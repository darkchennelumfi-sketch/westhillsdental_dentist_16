import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://westhillsdentalnd.com";
  const now = new Date();
  const routes = [
    "",
    "/meet-our-doctor",
    "/meet-our-team",
    "/office-tour",
    "/services",
    "/services/preventative-dentistry",
    "/services/restorative-dentistry",
    "/services/cosmetic-dentistry",
    "/services/childrens-dentistry",
    "/services/dental-implants",
    "/services/emergency-dentistry",
    "/new-patients",
    "/insurance-and-financing",
    "/faqs",
    "/make-payment",
    "/contact-us",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.7 : 0.8,
  }));
}

export const dynamic = "force-static";
