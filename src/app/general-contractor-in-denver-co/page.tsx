import { Metadata } from 'next';
import LocationLayout from '@/components/LocationLayout';

export const metadata: Metadata = {
    title: 'General Contractor in Denver, CO | JBK',
    description: 'Premier home remodeling and general contracting located throughout Denver, CO. Kitchen upgrades, master bathrooms, basement finishing, and historical rectifications.',
};

export default function DenverAreaPage() {
    return (
        <LocationLayout
            title="General Contractor in Denver, CO"
            area="Denver"
            heroImage="/images/9.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Premier Contracting in Denver",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Welcome to JBK Handyman & Construction Services LLC, the trusted, top-tier general contracting partner for transforming residential homes across Denver, CO. The Mile High City uniquely blends spectacular historical neighborhoods like Washington Park with rapidly developing, highly dense modern metro communities. Servicing these vastly different architectural styles demands an experienced general contractor who thoroughly understands structural nuances and rigorous local city building ordinances.
                            </p>
                            <p>
                                We know that executing a substantial renovation inside the Denver city limits often entails managing incredibly tight workspaces, handling massive plumbing upgrades in century-old basements, and adhering to strict HOA guidelines nicely. JBK Handyman expertly shields homeowners from this chaotic logistical stress by meticulously managing every single aspect of construction, from the initial architectural drawing reviews to cleanly applying the incredibly beautiful final coats of satin paint.
                            </p>
                            <p>
                                Choosing a reliable contractor shouldn't require risking your major financial investment on inexperienced teams. Justin B. Kirschner and his professionals deliver flawlessly executed, visually striking home improvements backed by fifteen years of honest, highly commended local integrity.
                            </p>
                        </div>
                    )
                },
                {
                    id: "denver-services",
                    title: "Comprehensive Residential Upgrades",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636m.214 9.226c.214.618.455 1.222.721 1.81.246.549.06 1.21-.464 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                By deeply trusting JBK Handyman, Denver property owners absolutely skip the terrible frustration of hiring separate, notoriously tardy subcontractors. Our incredibly versatile crew performs critical trades safely underneath unified project management.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Luxury Kitchen Renovations</h4>
                                    <p className="text-sm">We efficiently completely transform cramped older layouts by confidently installing highly customized solid wood cabinetry, massive granite island structures, and modernly upgraded stainless cooking appliances.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Historic Repair & Remodel</h4>
                                    <p className="text-sm">Properly handling older Denver homes means carefully leveling incredibly sagging floor joists and cleanly matching highly customized plaster textures precisely on deeply aged historic interior walls.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Primary Bathroom Builds</h4>
                                    <p className="text-sm">Intelligently transform a dingy secondary bathroom into a totally stunning primary suite featuring custom laid intricate mosaic shower tile, heavily sealed glass partitions, and highly polished fixtures.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Full Flooring Refits</h4>
                                    <p className="text-sm">Protect expensive investments nicely. We correctly install premium oak hardwood directly atop thoroughly prepared concrete slabs securely, and strictly flawlessly integrate massive luxury vinyl panels.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "local-trust",
                    title: "Protecting Denver Investments",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Denver real estate values consistently maintain impressive highs, but significantly poorly executed plumbing modifications or visibly terribly sloppy carpentry work drastically harms your home's total appraisal worth. 
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Code Expertise:</strong> We pull correctly appropriate municipal building permits swiftly, fiercely shielding you from highly expensive legal neighborhood fines regarding massively illegal unpermitted construction.</li>
                                <li><strong>Total Site Cleanliness:</strong> Working actively within high density municipal neighborhoods cleanly requires massively respectful trash management accurately preventing annoying debris piles from disturbing excellent neighbors nicely.</li>
                                <li><strong>Durable Installation:</strong> Denver’s significantly fluctuating rapid seasonal weather violently flexes framing lumber deeply. We correctly integrate highly durable expansion joints strongly avoiding massive costly cracking properly.</li>
                            </ul>
                            <p>
                                Partner with an intensely devoted local general contractor completely committed to wildly exceeding your most demanding interior design expectations smoothly. Contact JBK heavily today comfortably for a totally free estimate carefully addressing your lovely Denver property correctly.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}