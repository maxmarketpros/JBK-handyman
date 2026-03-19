"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../site.config";

const { business, images } = siteConfig;

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

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-sm shadow-sm"
                : "bg-white"
                }`}
        >
            <div className="container-wide flex items-center justify-between h-[90px]">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0" aria-label={`${business.name} Home`}>
                    <Image
                        src={images.logo}
                        alt={business.name}
                        width={270}
                        height={72}
                        className="h-[60px] w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
                    <Link href="/" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                        Home
                    </Link>
                    
                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors py-2">
                            Services
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 rounded-md py-2 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            {serviceLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block px-4 py-2 text-sm text-[var(--color-ink)] hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-primary)]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Locations Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors py-2">
                            Areas Served
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 rounded-md py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            {locationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block px-4 py-2 text-sm text-[var(--color-ink)] hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-primary)]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/contact-us-jbk-handyman-construction-services" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <a
                        href={`tel:${business.phoneRaw}`}
                        className="text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-secondary)] transition-colors flex items-center gap-1.5"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        {business.phone}
                    </a>
                    <Link href="/contact-us-jbk-handyman-construction-services" className="btn btn-primary text-sm">
                        {siteConfig.hero.ctaText}
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden p-2 text-[var(--color-ink)]"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Panel */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 overflow-y-auto ${mobileOpen ? "max-h-[80vh] border-t border-[var(--color-border)]" : "max-h-0"
                    }`}
            >
                <nav className="container-wide py-4 flex flex-col gap-1" aria-label="Mobile navigation">
                    <Link href="/" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-base font-medium text-[var(--color-ink)]">
                        Home
                    </Link>
                    
                    <div className="px-3 py-2 text-sm font-semibold uppercase text-[var(--color-muted)] mt-2">Services</div>
                    {serviceLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="px-5 py-2 text-base font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)] transition-colors rounded-sm"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="px-3 py-2 text-sm font-semibold uppercase text-[var(--color-muted)] mt-2">Areas Served</div>
                    {locationLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="px-5 py-2 text-base font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)] transition-colors rounded-sm"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <hr className="border-[var(--color-border)] my-4" />
                    <a
                        href={`tel:${business.phoneRaw}`}
                        className="px-3 py-2.5 text-base font-semibold text-[var(--color-ink)] flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        {business.phone}
                    </a>
                    <Link href="/contact-us-jbk-handyman-construction-services" onClick={() => setMobileOpen(false)} className="btn btn-primary text-center mt-2">
                        {siteConfig.hero.ctaText}
                    </Link>
                </nav>
            </div>
        </header>
    );
}
