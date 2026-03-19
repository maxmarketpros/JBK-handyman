"use client";

import Link from "next/link";
import { siteConfig } from "../../site.config";

const { location, serviceArea } = siteConfig;

// Output: /general-contractor-in-[area]-co
const generateAreaLink = (area: string) => {
    return `/general-contractor-in-${area.toLowerCase().replace(/\s+/g, "-")}-co`;
};

export default function ServiceArea() {
    return (
        <section
            id="service-area"
            className="relative py-20 lg:py-28 overflow-hidden"
            aria-labelledby="service-area-heading"
            style={{ backgroundColor: "#2D3920" }}
        >
            {/* CSS dot pattern background */}
            <div
                className="absolute inset-0 pointer-events-none z-0 opacity-20"
                style={{
                    backgroundImage: "radial-gradient(#D9DED4 1.5px, transparent 1.5px)",
                    backgroundSize: "28px 28px",
                }}
            />
            {/* Top + bottom gradient fade */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background:
                        "linear-gradient(to bottom, #2D3920 0%, transparent 20%, transparent 80%, #2D3920 100%)",
                }}
            />

            <div className="container-wide relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 px-4">
                    <p
                        className="text-sm font-bold uppercase tracking-widest mb-3"
                        style={{ color: "#CB7517" }}
                    >
                        {serviceArea.sectionLabel}
                    </p>
                    <h2
                        id="service-area-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] max-w-2xl mx-auto leading-tight"
                        style={{ color: "#FFFFFF" }}
                    >
                        {serviceArea.heading}
                    </h2>
                    <p
                        className="mt-5 max-w-xl mx-auto text-base opacity-80 font-medium leading-relaxed"
                        style={{ color: "#D9DED4" }}
                    >
                        {serviceArea.mapSubtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto px-4">
                    {/* Area Links Card */}
                    <div
                        className="shadow-2xl"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.12)",
                        }}
                    >
                        {/* Card header */}
                        <div
                            className="flex items-center gap-3 px-8 py-6"
                            style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}
                        >
                            <span
                                className="p-2.5"
                                style={{
                                    backgroundColor: "rgba(203,117,23,0.18)",
                                    border: "1px solid rgba(203,117,23,0.35)",
                                    color: "#CB7517",
                                }}
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </span>
                            <h3
                                className="text-xl font-bold font-[family-name:var(--font-heading)]"
                                style={{ color: "#FFFFFF" }}
                            >
                                Our Service Areas
                            </h3>
                        </div>

                        {/* Area link grid */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px p-6" style={{ gap: "8px" }}>
                            {location.areasServed.map((area, i) => (
                                <li key={i}>
                                    <Link
                                        href={generateAreaLink(area)}
                                        className="group flex items-center justify-between px-5 py-4 transition-all duration-200"
                                        style={{
                                            backgroundColor: "rgba(255,255,255,0.07)",
                                            border: "1px solid rgba(255,255,255,0.10)",
                                            color: "#FFFFFF",
                                        }}
                                        onMouseEnter={e => {
                                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#CB7517";
                                            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#CB7517";
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.07)";
                                            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.10)";
                                        }}
                                    >
                                        <span className="font-semibold tracking-wide text-sm">{area}</span>
                                        <svg
                                            className="w-4 h-4 shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.5}
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Footer note */}
                        <div
                            className="px-8 py-5 text-center"
                            style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
                        >
                            <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                                Don&apos;t see your area?{" "}
                                <Link
                                    href="/contact-us-jbk-handyman-construction-services"
                                    className="underline underline-offset-4 transition-colors"
                                    style={{ color: "#CB7517" }}
                                >
                                    Contact us
                                </Link>{" "}
                                — we may still be able to help.
                            </p>
                        </div>
                    </div>

                    {/* Google Map Embed */}
                    <div
                        className="relative overflow-hidden shadow-2xl group"
                        style={{
                            height: "520px",
                            border: "1px solid rgba(255,255,255,0.12)",
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196417.84852920272!2d-105.10912196024956!3d39.5447285521796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c827be9513e9d%3A0x7dcee3e68dfa1ec2!2sHighlands%20Ranch%2C%20CO!5e0!3m2!1sen!2sus!4v1710892095907!5m2!1sen!2sus"
                            className="w-full h-full border-0 transition-all duration-700 group-hover:scale-105"
                            style={{ filter: "contrast(1.1) saturate(0.85)" }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Map of Highlands Ranch and surrounding service areas"
                        />

                        {/* Info plaque over map */}
                        <div
                            className="absolute bottom-5 left-5 right-5 z-20 flex items-center gap-4 p-4 shadow-xl"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.96)",
                                border: "1px solid #D9DED4",
                            }}
                        >
                            <div
                                className="shrink-0 p-3"
                                style={{ backgroundColor: "#324225" }}
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <div>
                                <h4
                                    className="font-bold text-lg leading-tight font-[family-name:var(--font-heading)]"
                                    style={{ color: "#324225" }}
                                >
                                    {serviceArea.mapTitle}
                                </h4>
                                <p className="text-sm font-semibold mt-0.5" style={{ color: "#CB7517" }}>
                                    Local &amp; Trusted Professionals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
