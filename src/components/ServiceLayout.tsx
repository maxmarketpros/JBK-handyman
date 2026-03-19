import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import EstimateForm from "./EstimateForm";

interface Section {
    id: string;
    title: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
}

interface ServiceLayoutProps {
    title: string;
    serviceImage: string;
    sections: Section[];
}

export default function ServiceLayout({
    title,
    serviceImage,
    sections
}: ServiceLayoutProps) {
    return (
        <>
            <Header />
            <main>
                {/* ── Internal Hero ── */}
                <section className="relative pt-[160px] pb-[100px] flex items-center justify-center min-h-[50vh] overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/8.jpg"
                            alt="Header Background"
                            fill
                            className="object-cover scale-105"
                            priority
                            quality={90}
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                    <div className="container relative z-10 text-center text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] drop-shadow-md mb-6 leading-tight">
                            {title}
                        </h1>
                        <div className="w-24 h-1 bg-[var(--color-primary-light)] mx-auto mb-8 rounded-full" />
                        <div className="flex justify-center gap-4">
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
                                        {/* Inject CTA after the second section as an extra touchpoint */}
                                        {idx === 1 && (
                                            <div className="mt-8 mb-4 p-8 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl flex items-center justify-between flex-col sm:flex-row gap-6">
                                                <div>
                                                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-ink)] mb-2">Ready to transform your home?</h3>
                                                    <p className="text-[var(--color-muted)] text-sm">Reach out today. Our team is fully committed to outstanding craftsmanship and open communication.</p>
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
                                <div className="rounded-xl overflow-hidden shadow-sm border border-[var(--color-border)] bg-white relative h-80 sm:h-96 w-full">
                                    <Image
                                        src={serviceImage}
                                        alt={title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                    />
                                </div>
                                
                                <div className="p-8 bg-[var(--color-primary)] text-white rounded-xl shadow-sm">
                                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-4">Why Choose JBK?</h3>
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
                                            <span>Local Highlands Ranch Contractor</span>
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
                                        Let's Talk
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <EstimateForm />
            </main>
            <Footer />
        </>
    );
}
