import { siteConfig } from "../../site.config";

const { process, business } = siteConfig;

export default function ProcessSteps() {
    return (
        <section id="process" className="section-padding bg-white" aria-labelledby="process-heading">
            <div className="container-wide">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                        {process.sectionLabel}
                    </p>
                    <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
                        {process.sectionTitle}
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                    {process.steps.map((step, i) => (
                        <div key={i} className="relative">
                            <div className="card p-6 h-full">
                                <span className="text-3xl font-bold text-[var(--color-primary)]/15 font-[family-name:var(--font-heading)] block mb-3">
                                    {step.number}
                                </span>
                                <h3 className="text-base font-bold text-[var(--color-ink)] mb-2 font-[family-name:var(--font-body)]">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            {/* Connector line (desktop only) */}
                            {i < process.steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[var(--color-border)]" />
                            )}
                        </div>
                    ))}
                </div>

                {/* What You Can Expect */}
                <div className="card p-8 max-w-2xl mx-auto bg-[var(--color-bg)]">
                    <h3 className="text-lg font-bold text-[var(--color-ink)] mb-4 text-center font-[family-name:var(--font-heading)]">
                        What You Can Expect
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {process.expectations.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
                                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Section CTA */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-[var(--color-secondary)] text-white font-semibold px-7 py-3.5 shadow-md hover:bg-[var(--color-secondary-dark)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm"
                    >
                        Get Started — Request Your Free Estimate
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>
                    <a
                        href={`tel:${business.phoneRaw}`}
                        className="inline-flex items-center gap-2 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-semibold px-7 py-3.5 hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-200 hover:-translate-y-0.5 text-sm"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        {business.phone}
                    </a>
                </div>
                <p className="mt-3 text-center text-xs text-[var(--color-muted)]">Simple, fast, and commitment&#8209;free</p>
            </div>
        </section>
    );
}
