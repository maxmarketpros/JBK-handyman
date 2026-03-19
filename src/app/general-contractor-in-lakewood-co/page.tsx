import { Metadata } from 'next';
import LocationLayout from '@/components/LocationLayout';

export const metadata: Metadata = {
    title: 'General Contractor in Lakewood, CO | JBK',
    description: 'Highly rated general contractor located in Lakewood, CO. Trusted for exceptional kitchen remodeling, bathroom buildouts, custom carpentry, and property repairs.',
};

export default function LakewoodAreaPage() {
    return (
        <LocationLayout
            title="General Contractor in Lakewood, CO"
            area="Lakewood"
            heroImage="/images/2.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Top-Tier Home Construction in Lakewood",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Welcome to JBK Handyman & Construction Services LLC, Lakewood's preferred general contracting team. Situated right alongside the foothills of the beautiful Rocky Mountains, Lakewood features sprawling neighborhoods filled with tremendous potential for residential upgrades. To unlock that potential, homeowners require a contractor who blends modern design sensibilities with deep structural expertise.
                            </p>
                            <p>
                                Embarking on a massive kitchen transformation or finishing an empty basement represents a major financial commitment. You must have absolute confidence that the team taking apart your home knows exactly how to put it back together better than before. For over fifteen years, JBK has demonstrated unyielding reliability, delivering breathtaking visual results for local families.
                            </p>
                            <p>
                                We approach every Lakewood remodeling project with a comprehensive, organized strategy. We focus on transparent budgeting, strict daily cleanup routines, and proactive communication. Once we start a job, we commit fully until every single detail meets our rigorous internal standards. Your ultimate satisfaction represents our most critical gauge of success.
                            </p>
                        </div>
                    )
                },
                {
                    id: "lakewood-services",
                    title: "Extensive Remodeling Expertise",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636m.214 9.226c.214.618.455 1.222.721 1.81.246.549.06 1.21-.464 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                Leveraging modern construction techniques, our versatile crew executes a diverse range of improvements. From the smallest handyman repair to whole-room structural renovations, we keep your property functioning at peak performance.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Opulent Bathrooms</h4>
                                    <p className="text-sm">We handle the challenging plumbing reroutes required to install luxurious soaking tubs, massive double vanities, and seamlessly integrated smart mirrors in your master suite.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Culinary Upgrades</h4>
                                    <p className="text-sm">Stop bumping elbows in a narrow kitchen. We modify tight floor plans and introduce expansive custom cabinetry layouts, premium backsplashes, and brilliant under-cabinet task lighting.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">General Handyman Care</h4>
                                    <p className="text-sm">Every property experiences regular wear. Rely on our experienced framing and drywall experts to restore damaged walls, adjust heavy doors, and securely mount complex televisions.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Flooring Solutions</h4>
                                    <p className="text-sm">We meticulously grind and level uneven concrete subfloors before laying down stunning, highly resilient porcelain tile borders or installing classic oak hardwood throughout the main level.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "local-trust",
                    title: "Safeguard Your Property Equity",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Renovating a Lakewood home involves navigating specific municipal building codes designed to keep families safe. We take an uncompromising stance on doing the job right the first time, protecting your property's resale value.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Code Expertise:</strong> We pull the necessary local permits on major additions, ensuring that structural loads, plumbing vents, and new electrical panels easily pass any official city inspection.</li>
                                <li><strong>Dust Mitigation:</strong> Living in a construction zone can be miserable. We hang protective plastic barriers and utilize HEPA vacs to actively stop fine drywall dust from ruining your home's air quality.</li>
                                <li><strong>Long-term Value:</strong> We advise clients on the most durable finishes. We rely on premium solid core materials over cheap veneers to ensure your home looks fantastic decades from now.</li>
                            </ul>
                            <p>
                                Experience the immense difference of partnering with a professional contracting firm deeply invested in your community. Contact JBK Handyman today to begin discussing the future of your Lakewood residence.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}