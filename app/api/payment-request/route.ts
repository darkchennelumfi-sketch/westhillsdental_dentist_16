import { z } from "zod";
import { paymentRequestSchema } from "@/lib/validation";

const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function isRateLimited(key: string) {
  const now = Date.now();
  const entry = attempts.get(key);

  if (!entry || entry.resetAt < now) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = paymentRequestSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      {
        ok: false,
        message: "Please check the highlighted fields and try again.",
        errors: z.flattenError(parsed.error).fieldErrors,
      },
      { status: 400 },
    );
  }

  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "local";
  if (isRateLimited(ip)) {
    return Response.json(
      {
        ok: false,
        message:
          "We have received several requests from this connection. Please call (701) 837-1050 so we can help you directly.",
      },
      { status: 429 },
    );
  }

  console.info("[payment-request]", {
    hasAmount: Boolean(parsed.data.amount),
    receivedAt: new Date().toISOString(),
  });

  return Response.json({
    ok: true,
    message: "Your payment request has been received.",
  });
}
