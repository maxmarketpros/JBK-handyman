import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../site.config";

const { services } = siteConfig;

export default function ServicesGrid() {
    return (
        <section id="services" className="section-padding" aria-labelledby="services-heading">
            <div className="container-wide">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                        {services.sectionLabel}
                    </p>
                    <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
                        {services.sectionTitle}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.items.map((service, i) => (
                        <div key={i} className="card overflow-hidden group">
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2 font-[family-name:var(--font-heading)]">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">
                                    {service.description}
                                </p>
                                <Link
                                    href={service.href}
                                    className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors inline-flex items-center gap-1"
                                >
                                    View Service
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section CTA */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-semibold px-7 py-3.5 shadow-md hover:bg-[var(--color-primary-dark)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm"
                    >
                        Request a Free Estimate
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                    <a
                        href={`tel:${siteConfig.business.phoneRaw}`}
                        className="inline-flex items-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold px-7 py-3.5 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 hover:-translate-y-0.5 text-sm"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        {siteConfig.business.phone}
                    </a>
                </div>
                <p className="mt-3 text-center text-xs text-[var(--color-muted)]">No obligation · Fast response · Local experts</p>
            </div>
        </section>
    );
}
