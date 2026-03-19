import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import EstimateForm from "./EstimateForm";
import ServicesGrid from "./ServicesGrid";

interface Section {
    id: string;
    title: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
}

interface LocationLayoutProps {
    title: string;
    area: string;
    heroImage?: string;
    sections: Section[];
}

export default function LocationLayout({
    title,
    area,
    heroImage = "/images/1.jpg",
    sections
}: LocationLayoutProps) {
    const mapQuery = encodeURIComponent(area + ", CO");

    return (
        <>
            <Header />
            <main>
                {/* ── Internal Hero ── */}
                <section className="relative pt-[160px] pb-[100px] flex items-center justify-center min-h-[50vh] overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={heroImage}
                            alt={`${area} Header Background`}
                            fill
                            className="object-cover scale-105"
                            priority
                            quality={80}
                        />
                        <div className="absolute inset-0 bg-black/65" />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] !text-white drop-shadow-md mb-6 leading-tight break-words">
                            {title}
                        </h1>
                        <div className="w-24 h-1 bg-[var(--color-primary-light)] mx-auto mb-8 rounded-full" />
                        <div className="flex justify-center gap-4 flex-wrap">
                            <a href="#contact" className="btn btn-primary drop-shadow-sm">
                                Request a Quote
                            </a>
                            <a href="tel:7209876053" className="btn btn-outline-white">
                                Call Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── Content Area ── */}
                <section className="section-padding bg-[var(--color-bg)] text-[var(--color-ink)] leading-relaxed">
                    <div className="container-wide">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            {/* Main Text Content */}
                            <div className="lg:col-span-8 space-y-16">
                                {sections.map((sec, idx) => (
                                    <div key={sec.id} id={sec.id} className="scroll-mt-24">
                                        <div className="flex items-center gap-4 mb-6">
                                            {sec.icon && (
                                                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-primary)]">
                                                    {sec.icon}
                                                </div>
                                            )}
                                            <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-ink)]">
                                                {sec.title}
                                            </h2>
                                        </div>
                                        <div className="prose max-w-none text-lg text-[var(--color-muted)] font-[family-name:var(--font-body)]">
                                            {sec.content}
                                        </div>
                                        {/* Inject CTA after the second section */}
                                        {idx === 1 && (
                                            <div className="mt-8 mb-4 p-8 bg-white border border-[var(--color-border)] rounded-xl flex items-center justify-between flex-col sm:flex-row gap-6 shadow-sm">
                                                <div>
                                                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-ink)] mb-1">Serving {area} Homes</h3>
                                                    <p className="text-[var(--color-muted)] text-sm">Our expert general contractors are ready to take on your biggest home improvement projects.</p>
                                                </div>
                                                <a href="#contact" className="btn btn-primary whitespace-nowrap">
                                                    Get Your Free Estimate
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Sidebar Area */}
                            <div className="lg:col-span-4 sticky top-24 space-y-8">
                                {/* Map Box */}
                                <div className="rounded-xl overflow-hidden shadow-sm border border-[var(--color-border)] bg-white relative w-full flex flex-col">
                                    <div className="bg-[var(--color-bg-alt)] p-4 border-b border-[var(--color-border)]">
                                        <h3 className="font-bold font-[family-name:var(--font-heading)] text-[var(--color-ink)] flex items-center gap-2">
                                            <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            Our Service Area: {area}
                                        </h3>
                                    </div>
                                    <div className="h-64 sm:h-72 relative w-full">
                                        <iframe 
                                            src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
                                            width="100%" 
                                            height="100%" 
                                            style={{ border: 0 }} 
                                            allowFullScreen 
                                            loading="lazy" 
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title={`Map of ${area}, CO`}
                                        ></iframe>
                                    </div>
                                </div>
                                
                                {/* Why Choose Us Box */}
                                <div className="p-8 bg-[var(--color-primary)] text-white rounded-xl shadow-sm">
                                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] !text-white mb-4">Why Choose JBK?</h3>
                                    <ul className="space-y-4 text-white/90">
                                        <li className="flex gap-3">
                                            <svg className="w-6 h-6 flex-shrink-0 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                            <span>Over 15 Years of Experience</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <svg className="w-6 h-6 flex-shrink-0 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                            <span>Top-Tier General Contracting</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <svg className="w-6 h-6 flex-shrink-0 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                            <span>Unwavering Commitment to Quality</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <svg className="w-6 h-6 flex-shrink-0 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                            <span>Clear Communication & Respect</span>
                                        </li>
                                    </ul>
                                    <a href="#contact" className="btn btn-secondary mt-8 w-full justify-center">
                                        Get a Project Estimate
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Services Section ── */}
                <div className="bg-white">
                    <ServicesGrid />
                </div>

                <EstimateForm />
            </main>
            <Footer />
        </>
    );
}
