import { Metadata } from 'next';
import LocationLayout from '@/components/LocationLayout';

const slug = '/general-contractor-in-jefferson-county-co';
const base = 'https://jbkhandymanco.com';
const pageTitle = 'General Contractor in Jefferson County, CO | JBK';
const pageDesc = 'Expert general contracting and remodeling services across Jefferson County, CO. Premium bathroom renovations, drywall repairs, and flooring installations.';

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
        images: [{ url: `${base}/images/5.jpg`, width: 1200, height: 630, alt: 'General Contractor in Jefferson County, CO' }],
    },
    twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, images: [`${base}/images/5.jpg`] },
};

export default function JeffersonCountyAreaPage() {
    return (
        <LocationLayout
            title="General Contractor in Jefferson County, CO"
            area="Jefferson County"
            heroImage="/images/5.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Professional Remodeling in Jefferson County",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Greetings from JBK Handyman & Construction Services LLC! We proudly stand as a leading general contracting firm serving homeowners throughout Jefferson County, CO. Nestled against the foothills, Jefferson County presents incredible residential communities featuring a mix of historic architecture and newly-developed sprawling modern suburban properties. It requires an experienced contractor to handle this diverse local environment correctly.
                            </p>
                            <p>
                                From executing complex structural kitchen remodels in older Golden homes to seamlessly executing massive basement build-outs in modern Arvada neighborhoods, our team possesses the rigorous expertise to achieve perfect results. Undertaking major housing construction without an organized project manager often results in chaotic delays and confusing hidden costs. Our straightforward, highly communicative process actively eliminates those stresses.
                            </p>
                            <p>
                                JBK Handyman heavily prioritizes strict quality control across every project phase. Justin B. Kirschner and his seasoned team arrive fully prepared, thoroughly executing each structural modification, plumbing upgrade, and cosmetic installation with a profound dedication to long-lasting craftsmanship.
                            </p>
                        </div>
                    )
                },
                {
                    id: "jeffco-services",
                    title: "Versatile Construction Capabilities",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636m.214 9.226c.214.618.455 1.222.721 1.81.246.549.06 1.21-.464 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                Rather than struggling to independently coordinate a chaotic network of specialized contractors for intricate carpentry, drywall texture matching, and essential plumbing repairs, simply contact JBK.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Bathroom Makeovers</h4>
                                    <p className="text-sm">We efficiently completely transform cramped older tubs into incredibly spacious, smartly designed walk-in glass showers equipped with elegantly installed rain showerheads and built-in niches.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Custom Decking Let</h4>
                                    <p className="text-sm">Increase incredible curb appeal and effectively secure outdoor living spaces in Jefferson County. We construct massive solid outdoor patios and handle intricate exterior painting.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Drywall & Texture</h4>
                                    <p className="text-sm">Older homes experience foundational settling, causing significant drywall cracking. We meticulously handle frustrating drywall patching and expert texture blending.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Hardwood & Tile</h4>
                                    <p className="text-sm">There is absolutely no substitute for the timeless elegance of classic hardwood or luxury porcelain tile layouts efficiently securing heavy foot-traffic areas.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "expert-contracting",
                    title: "Safety & Quality First",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                In today's digital world, online tutorial videos can easily make complex fixture installations appear deceptively simple. However, structural residential contracting requires profound hands-on experience and a relentless focus on safety protocols.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Structural Integrity:</strong> Heavily laden cabinetry and massively expanded floor plans must be securely supported by correctly engineered load-bearing beams to avoid catastrophic property damage.</li>
                                <li><strong>Electrical Safety:</strong> Rewiring a remodeled kitchen easily leads to blown fuses if executed incorrectly. Our general contracting oversight heavily minimizes dangerous fire hazards.</li>
                                <li><strong>Water Damage Prevention:</strong> A poorly configured plumbing fixture actively cultivates dangerous invisible mold. We rigorously test supply lines behind your newly finished bathroom drywall.</li>
                            </ul>
                            <p>
                                Choose a professional Jefferson County team possessing unparalleled dedication to the final product. Allow JBK Handyman to guide your next large-scale property improvement safely and accurately.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}