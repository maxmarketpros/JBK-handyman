import { Metadata } from 'next';
import LocationLayout from '@/components/LocationLayout';

const slug = '/general-contractor-in-castle-rock-co';
const base = 'https://jbkhandymanco.com';
const pageTitle = 'General Contractor in Castle Rock, CO | JBK';
const pageDesc = 'Top-rated general contractor serving Castle Rock, CO. We specialize in basement finishing, remodeling, repairs, and reliable home improvements.';

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
        images: [{ url: `${base}/images/7.jpg`, width: 1200, height: 630, alt: 'General Contractor in Castle Rock, CO' }],
    },
    twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, images: [`${base}/images/7.jpg`] },
};

export default function CastleRockAreaPage() {
    return (
        <LocationLayout
            title="General Contractor in Castle Rock, CO"
            area="Castle Rock"
            heroImage="/images/7.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Expert Home Remodeling in Castle Rock",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Welcome to JBK Handyman & Construction Services LLC, the paramount choice for reliable general contracting and comprehensive home remodeling in Castle Rock, CO. As a rapidly expanding community characterized by beautiful suburban properties, Castle Rock homes require knowledgeable professionals who understand the specific needs of the region's architecture and local building codes.
                            </p>
                            <p>
                                When updating your family residence, you deserve a contracting partner equipped with vast experience, uncompromising structural standards, and a dedication to transparent communication. Finding trustworthy contractors who show up on schedule and treat your property with genuine respect shouldn't be a challenge. With over 15 years in the industry, our dedicated team fulfills all those critical expectations seamlessly.
                            </p>
                            <p>
                                From executing an entire basement finish to installing brand new luxury flooring to conducting minor electrical repairs, JBK is extremely proud to serve the incredible residents of Castle Rock. We handle the heavy lifting, navigate complex logistics, and prioritize safety, allowing you to thoroughly enjoy the striking final result of your home improvements.
                            </p>
                        </div>
                    )
                },
                {
                    id: "local-contracting-services",
                    title: "Comprehensive Contracting Services",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636m.214 9.226c.214.618.455 1.222.721 1.81.246.549.06 1.21-.464 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                By hiring a dedicated general contractor, you consolidate your project management. Rather than pursuing individual specialists, you'll communicate with our unified team for a hassle-free, streamlined renovation process.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Residential Remodeling</h4>
                                    <p className="text-sm">We orchestrate massive transformations including master bathroom upgrades, expansive kitchen renovations, and complete main-floor layout overhauls designed to maximize natural lighting.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Basement Buildouts</h4>
                                    <p className="text-sm">Castle Rock properties often feature spacious unfinished basements. We expertly frame, insulate, run wiring, and install drywall to expand your home’s functional living square footage.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Maintenance & Repairs</h4>
                                    <p className="text-sm">Owning a home incurs constant maintenance. We replace failing light fixtures, fix stubborn squeaky doors, mount heavy flat screen televisions securely, and execute complex dry-wall patches.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Flooring Installations</h4>
                                    <p className="text-sm">Enhance your property value quickly by removing severely stained carpets. Our crew masters the flawless installation of solid hardwood, porcelain tile, and highly durable luxury vinyl planks.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "castle-rock-difference",
                    title: "Understanding Castle Rock Homes",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Successfully executing construction projects in Castle Rock requires knowing how local environmental conditions impact residential structures. Colorado's dramatic temperature fluctuations affect foundational shifting, lumber expansion, and external paint durability.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Moisture Mitigation:</strong> When finishing basements, we utilize highly effective vapor barriers to completely stop dangerous mold from developing beneath drywall sections.</li>
                                <li><strong>Code Compliance:</strong> Rest comfortably knowing our work respects current Douglas County building codes concerning proper structural load management and hidden electrical systems.</li>
                                <li><strong>Property Value Enhancement:</strong> We advise our clients on the finest modern materials that consistently yield the most significant return on investment when competing in Castle Rock’s active housing market.</li>
                            </ul>
                            <p>
                                Don't let your renovation dreams remain trapped on paper. Contact the experienced professionals at JBK Handyman & Construction Services today to schedule a detailed on-site consultation for your Castle Rock home.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}