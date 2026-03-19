import { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';

export const metadata: Metadata = {
    title: 'Bathroom Remodel in Highlands Ranch, CO | JBK',
    description: 'Expert bathroom remodeling including fixture upgrades, custom tile work, layout improvements, and complete renovation solutions.',
};

export default function BathroomRemodelingPage() {
    return (
        <ServiceLayout
            title="Bathroom Remodeling"
            serviceImage="/images/4.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Luxurious Bathroom Remodeling",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Welcome to JBK Handyman & Construction Services LLC, the leading provider of highly exceptional, incredibly luxurious bathroom remodeling in Highlands Ranch, CO. Transforming an outdated primary bathroom or heavily-used guest bath into a tranquil, relaxing modern sanctuary requires creative vision, meticulous planning, and unparalleled aesthetic craftsmanship.
                            </p>
                            <p>
                                We know that your morning routine sets the tone for your entire day. A beautifully remodeled bathroom should effectively blend elegant visual design with robust daily functionality. From executing a total floor-to-ceiling demolition to meticulously placing intricate shower tile work, we upgrade every square inch. We handle residential projects across Douglas County with unmatched professionalism and impressive attention to detail.
                            </p>
                            <p>
                                When your home experiences natural aging, older bathrooms often develop issues like outdated plumbing, leaky fixtures, and visually unappealing moldy grout. Our comprehensive bathroom remodeling services confidently replace these older components with highly durable, stunningly beautiful modern alternatives.
                            </p>
                        </div>
                    )
                },
                {
                    id: "custom-upgrades",
                    title: "Premium Fixtures & Custom Upgrades",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M15.17 11.42L21 5.58A2.652 2.652 0 0017.25 1.83l-5.83 5.83m-3.84 0L1.83 13.5A2.652 2.652 0 005.58 17.25l5.84-5.84m-5.84-3.83L1.83 1.83" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                A major factor in successfully executing a premium remodel is completely committing to high-quality materials. We beautifully integrate top-tier fixtures to ensure an impressive aesthetic result. Our core capabilities address the most vital components of a luxury bathroom.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Custom Tile Work</h4>
                                    <p className="text-sm">We securely lay intricate mosaic backsplashes, large-format porcelain floor tiles, and visually stunning marble shower surrounds, ensuring every grout line is perfectly straight and cleanly sealed.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Modern Vanities</h4>
                                    <p className="text-sm">Upgrade functionally and aesthetically by replacing highly worn countertops with cleanly installed custom double vanities, gracefully topped with quartz or granite surfaces.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Walk-in Showers</h4>
                                    <p className="text-sm">We efficiently completely transform cramped older tubs into incredibly spacious, smartly designed walk-in glass showers equipped with elegantly installed rain showerheads and built-in aesthetic niches.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Lighting Design</h4>
                                    <p className="text-sm">Properly illuminated bathrooms feel dramatically larger. We nicely implement cleanly recessed ceiling lights, elegant vanity sconces, and masterfully coordinated highly polished hardware.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "waterproofing",
                    title: "Advanced Waterproofing Technology",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Beyond mere aesthetics, the structural longevity of a newly remodeled bathroom hinges on the caliber of its hidden waterproofing systems. When water penetrates subflooring or escapes behind shower panels, it can foster debilitating mold and severely rot your home's framing.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Protective Membranes:</strong> We utilize state-of-the-art waterproofing membranes beneath all tile installations to ensure water remains entirely contained.</li>
                                <li><strong>Proper Ventilation:</strong> Exhaust fans must be properly sized and correctly vented to the exterior to combat heavy localized humidity after hot showers.</li>
                                <li><strong>Cement Board Alignment:</strong> Installing robust cement backer boards offers a stable, rot-resistant foundation for heavy natural stone materials.</li>
                            </ul>
                            <p>
                                Let JBK Handyman build a stunning washroom that will stand the test of time. Reach out today to schedule your comprehensive on-site consultation and design estimate.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}