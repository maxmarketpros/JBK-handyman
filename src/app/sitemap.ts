import type { MetadataRoute } from "next";
import { siteConfig } from "../../site.config";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.business.siteUrl.replace(/\/$/, "");
    
    const routes = [
        "",
        "/general-contractor-in-castle-rock-co",
        "/general-contractor-in-jefferson-county-co",
        "/general-contractor-in-douglas-county-co",
        "/general-contractor-in-denver-co",
        "/general-contractor-in-littleton-co",
        "/general-contractor-in-lakewood-co",
        "/bathroom-remodel-in-highlands-ranch-co",
        "/handyman-services-highlands-ranch-co",
        "/repair-installation-services-highlands-ranch-co",
        "/construction-remodeling-services-jbk-handyman-construction",
        "/kitchen-remodel-in-highlands-ranch-co",
        "/flooring-installation-in-highlands-ranch-co",
        "/contact-us-jbk-handyman-construction-services",
        "/remodeling-faq",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}
