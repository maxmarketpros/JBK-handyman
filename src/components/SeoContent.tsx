import { siteConfig } from "../../site.config";

export default function SeoContent() {
    return (
        <section className="section-padding bg-[var(--color-bg-alt)]">
            <div className="container-wide">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* SEO Section 1 */}
                    <div className="card p-8 bg-white">
                        <div className="w-14 h-14 mb-6 bg-green-50 text-[var(--color-primary)] rounded-xl flex items-center justify-center">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-heading)]">
                            Dedicated Handyman & Construction Services in Highlands Ranch, CO
                        </h2>
                        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                            Finding a reliable professional for home improvement can be challenging. At {siteConfig.business.name}, we provide top-tier handyman and construction services tailored to the unique needs of residents in Highlands Ranch, CO, and surrounding areas. Our expert team is dedicated to handling everything from minor repairs to large-scale remodeling projects with precision.
                        </p>
                        <p className="text-[var(--color-muted)] leading-relaxed">
                            Whether you require expert drywall repair, flooring installation, or a complete kitchen remodel, our focus is always on quality. As the premier choice in Douglas County, we ensure your home remains safe, functional, and aesthetically pleasing.
                        </p>
                    </div>

                    {/* SEO Section 2 */}
                    <div className="card p-8 bg-white">
                        <div className="w-14 h-14 mb-6 bg-green-50 text-[var(--color-primary)] rounded-xl flex items-center justify-center">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-heading)]">
                            Comprehensive Coverage Across Douglas County
                        </h2>
                        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                            Our commitment extends beyond Highlands Ranch. We are proud to offer our comprehensive handyman and construction services throughout Castle Rock, Littleton, Lakewood, and the broader Denver area. We understand the local architecture and building standards, ensuring every project meets the highest local benchmarks.
                        </p>
                        <p className="text-[var(--color-muted)] leading-relaxed">
                            From quick handyman troubleshooting to extensive layout changes, we use the best materials and proven construction techniques. Trust a local professional who knows Highlands Ranch, CO inside and out to elevate your living space and maximize your home's value.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
