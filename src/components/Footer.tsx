import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../site.config";

const { business, location, images } = siteConfig;

const serviceLinks = [
    { label: "Handyman Services", href: "/handyman-services-highlands-ranch-co" },
    { label: "Repair & Installation", href: "/repair-installation-services-highlands-ranch-co" },
    { label: "Construction & Remodeling", href: "/construction-remodeling-services-jbk-handyman-construction" },
    { label: "Bathroom Remodeling", href: "/bathroom-remodel-in-highlands-ranch-co" },
    { label: "Kitchen Remodeling", href: "/kitchen-remodel-in-highlands-ranch-co" },
    { label: "Flooring Installation", href: "/flooring-installation-in-highlands-ranch-co" },
];

const locationLinks = [
    { label: "Castle Rock", href: "/general-contractor-in-castle-rock-co" },
    { label: "Jefferson County", href: "/general-contractor-in-jefferson-county-co" },
    { label: "Douglas County", href: "/general-contractor-in-douglas-county-co" },
    { label: "Denver", href: "/general-contractor-in-denver-co" },
    { label: "Littleton", href: "/general-contractor-in-littleton-co" },
    { label: "Lakewood", href: "/general-contractor-in-lakewood-co" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-ink)] text-white/70" role="contentinfo">
            <div className="container-wide py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/">
                            <Image
                                src={images.logo}
                                alt={business.name}
                                width={160}
                                height={42}
                                className="h-9 w-auto mb-4"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed max-w-sm mb-4">
                            {business.description}
                        </p>
                        <p className="text-xs text-white/40">
                            Serving {location.city}, {location.state} and surrounding communities in {location.county}.
                        </p>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h4>
                        <ul className="space-y-2">
                            {serviceLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Areas Served</h4>
                        <ul className="space-y-2">
                            {locationLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href={`tel:${business.phoneRaw}`} className="text-sm hover:text-white transition-colors flex items-center gap-2">
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                    {business.phone}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${business.email}`} className="text-sm hover:text-white transition-colors flex items-center gap-2">
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    {business.email}
                                </a>
                            </li>
                            <li className="text-sm flex items-start gap-2">
                                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                {location.city}, {location.state} {location.zip}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-wide py-5 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs text-white/40">
                        &copy; {year} {business.name}. All rights reserved.
                    </p>
                    <p className="text-xs text-white/30">
                        Locally owned &amp; operated in {location.city}, {location.state}.
                    </p>
                </div>
            </div>
        </footer>
    );
}
