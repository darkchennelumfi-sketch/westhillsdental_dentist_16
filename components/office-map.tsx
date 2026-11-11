import { cn } from "@/lib/utils";

export function OfficeMap({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden rounded-2xl border border-forest/10 bg-[#e8e2d4]",
        className,
      )}
    >
      <svg
        viewBox="0 0 600 375"
        aria-label="Illustrated map showing the West Hills Dental location on Elk Drive in Minot"
        className="h-full w-full"
        role="img"
      >
        <rect width="600" height="375" fill="#e8e2d4" />
        <path
          d="M-20 290C90 260 150 210 210 170s120-90 220-70 120 50 190 20"
          stroke="#cfc6b2"
          strokeWidth="34"
          fill="none"
        />
        <path
          d="M-20 290C90 260 150 210 210 170s120-90 220-70 120 50 190 20"
          stroke="#f7f2e8"
          strokeWidth="2"
          strokeDasharray="10 10"
          fill="none"
        />
        <path
          d="M120 -20c20 70 60 110 100 150s40 100 10 160-10 90 10 110"
          stroke="#d9d1c0"
          strokeWidth="20"
          fill="none"
        />
        <path
          d="M430 -20c-10 80-50 120-40 180s70 90 100 140 20 60 10 90"
          stroke="#d9d1c0"
          strokeWidth="14"
          fill="none"
        />
        <text
          x="70"
          y="250"
          fill="#9a8f7a"
          fontSize="12"
          fontFamily="monospace"
          transform="rotate(-14 70 250)"
        >
          ELK DRIVE
        </text>
        <text
          x="420"
          y="70"
          fill="#b0a68f"
          fontSize="10"
          fontFamily="monospace"
          transform="rotate(78 420 70)"
        >
          16TH AVE
        </text>
        <circle cx="305" cy="165" r="44" fill="#123b26" opacity="0.1" />
        <circle cx="305" cy="165" r="30" fill="#123b26" opacity="0.16" />
        <circle cx="305" cy="165" r="13" fill="#123b26" />
        <circle cx="305" cy="165" r="4" fill="#d9e8b8" />
        <rect x="326" y="132" width="138" height="38" rx="19" fill="#f7f2e8" />
        <text
          x="345"
          y="156"
          fill="#123b26"
          fontSize="12"
          fontFamily="monospace"
          letterSpacing="1"
        >
          WEST HILLS
        </text>
      </svg>
    </div>
  );
}
