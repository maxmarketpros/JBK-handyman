import { Metadata } from 'next';
import LocationLayout from '@/components/LocationLayout';

const slug = '/general-contractor-in-douglas-county-co';
const base = 'https://jbkhandymanco.com';
const pageTitle = 'General Contractor in Douglas County, CO | JBK';
const pageDesc = 'Expert home remodeling, basement finishing, and general contracting services serving all of Douglas County, CO. Built on absolute trust and quality.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDesc,
    alternates: { canonical: `${base}${slug}` },
    openGraph: {
        title: pageTitle,
        description: pageDesc,
        url: `${base}${slug}`,
        siteName: 'JBK Handyman & Construction Services LLC',
        type: 'website',
        locale: 'en_US',
        images: [{ url: `${base}/images/3.jpg`, width: 1200, height: 630, alt: 'General Contractor in Douglas County, CO' }],
    },
    twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, images: [`${base}/images/3.jpg`] },
};

export default function DouglasCountyAreaPage() {
    return (
        <LocationLayout
            title="General Contractor in Douglas County, CO"
            area="Douglas County"
            heroImage="/images/3.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Leading General Contractors in Douglas County",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Welcome to JBK Handyman & Construction Services LLC, the trusted premier choice for comprehensive home renovations and general contracting across all of Douglas County, CO. From the rolling hills of Parker to the beautiful planned communities of Lone Tree and Highlands Ranch, maintaining property excellence requires a contracting team intimately familiar with local architectural standards. 
                            </p>
                            <p>
                                Undertaking a complex remodeling project, whether it involves opening a cramped traditional floor plan or finally transforming a dark concrete basement into a spectacular home theater, requires immense mutual trust. Finding honest, highly skilled contractors who actively listen to your design goals and flawlessly execute the structural modifications shouldn't involve stressful guesswork. With over 15 years invested in local craftsmanship, JBK delivers complete peace of mind.
                            </p>
                            <p>
                                Our comprehensive Douglas County contracting services are intentionally designed to handle frustrating logistical challenges internally. Justin B. Kirschner and his expert crew coordinate every phase of construction beautifully, eliminating unexpected costly delays and ensuring your newly upgraded living spaces surpass your highest visual expectations.
                            </p>
                        </div>
                    )
                },
                {
                    id: "douglas-county-expertise",
                    title: "Our Specialized Capabilities",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636m.214 9.226c.214.618.455 1.222.721 1.81.246.549.06 1.21-.464 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                Functioning successfully as a robust general contractor dictates mastering multiple construction trades simultaneously. Rather than juggling individual, unreliable specialists for specialized tasks, Douglas County homeowners utilize our highly integrated renovation solutions.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Major Renovations</h4>
                                    <p className="text-sm">We efficiently completely transform cramped older layouts by knocking down non-load-bearing walls safely, modernizing your incredible kitchen countertops, and upgrading master bathroom vanities cleanly.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Basement Escapes</h4>
                                    <p className="text-sm">Effectively manage the valuable unused lower floor in your home. We securely construct framing, properly manage moisture barriers, and finish drywall to build spectacular recreation rooms.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Cosmetic Finishes</h4>
                                    <p className="text-sm">A remodeling job looks incredibly cheap without pristine finishes. We meticulously install beautiful crown molding, perform expert touch-up painting, and completely swap out interior doors.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Complete Flooring</h4>
                                    <p className="text-sm">There is absolutely no substitute for the elegance of classic hardwood. We securely nail down beautiful maple planks and install durable luxury vinyl layouts flawlessly across the main levels.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "local-trust",
                    title: "Building Wealth Through Property",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Your home typically constitutes your most massive single financial asset. Substandard repairs and unpermitted construction drastically negatively impact resale appraisals.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Asset Protection:</strong> A poorly installed plumbing fixture actively cultivates dangerous invisible mold. We rigorously test supply lines behind your newly finished drywall carefully to stop leaks rapidly.</li>
                                <li><strong>Modern Appeal:</strong> We intelligently advise Douglas County clients regarding trending high-value aesthetic upgrades that strongly resonate with discerning contemporary home buyers.</li>
                                <li><strong>Unwavering Quality:</strong> Every detail securely fastened by our carpenters ensures massive long-term structural longevity, totally shielding your investment safely.</li>
                            </ul>
                            <p>
                                Entrust your important property improvements to an experienced team heavily invested in the local community. Contact JBK Handyman today for a thoroughly transparent, competitively priced construction estimate right here in Douglas County.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}