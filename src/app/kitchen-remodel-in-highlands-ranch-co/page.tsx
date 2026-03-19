import { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';

export const metadata: Metadata = {
    title: 'Kitchen Remodeling in Highlands Ranch, CO | JBK',
    description: 'Expert kitchen remodeling including custom cabinetry, premium countertops, modern lighting, layout upgrades, and full custom renovations.',
};

export default function KitchenRemodelingPage() {
    return (
        <ServiceLayout
            title="Kitchen Remodeling"
            serviceImage="/images/5.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Custom Kitchen Renovations",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Welcome to JBK Handyman & Construction Services LLC, the trusted local partner for stunning kitchen remodeling in Highlands Ranch, CO. The kitchen is overwhelmingly considered the true, authentic beating heart of any comfortable family home. It serves as a gathering space, a culinary laboratory, and a central hub for daily routines.
                            </p>
                            <p>
                                Whether you envision a sleek, minimalist culinary space equipped with hidden storage, or a warm, rustic farmhouse kitchen featuring an expansive central island, our experienced contractors possess the specialized skills to bring your vision to life. A proper kitchen renovation necessitates integrating complex plumbing lines, dedicated electrical circuits, and meticulous carpentry into a unified, functional design.
                            </p>
                            <p>
                                If your current cooking space suffers from cramped floor plans, insufficient counter space, or outdated, deteriorating fixtures, it is time for an upgrade. JBK Handyman oversees the entire renovation process. We coordinate skilled tradesmen and handle the challenging logistics, seamlessly guiding the project from demolition to the final coat of paint.
                            </p>
                        </div>
                    )
                },
                {
                    id: "custom-materials",
                    title: "Premium Materials & Appliances",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M15.17 11.42L21 5.58A2.652 2.652 0 0017.25 1.83l-5.83 5.83m-3.84 0L1.83 13.5A2.652 2.652 0 005.58 17.25l5.84-5.84m-5.84-3.83L1.83 1.83" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                The durability and eventual resale value of a remodeled kitchen depend heavily on the quality of the raw materials utilized. From robust wood cabinetry to heat-resistant stone, we collaborate with you to select finishes that match your lifestyle and budget.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Custom Cabinetry</h4>
                                    <p className="text-sm">We securely install premium solid wood cabinets featuring soft-close hinges, hidden slide-out pantries, and beautiful crown molding details to maximize your kitchen's storage capacity.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Countertops</h4>
                                    <p className="text-sm">Whether you prefer the natural, unpredictable beauty of genuine granite slabs, the low-maintenance resilience of quartz, or premium butcher block, we guarantee perfectly leveled installations.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Central Islands</h4>
                                    <p className="text-sm">A massive central island changes the entire flow of the room. We build robust foundational structures for beautiful islands that incorporate modern prep sinks and secondary seating areas.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Modern Backsplashes</h4>
                                    <p className="text-sm">Protect your freshly painted walls while adding a compelling visual focal point. We lay intricate ceramic subway tiles, glass mosaics, and sleek custom metal backsplashes.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "plumbing-electric",
                    title: "Robust Plumbing & Electrical Systems",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Behind the beautiful finishes lies the crucial mechanical infrastructure of your home. Reworking a classic kitchen layout means relocating heavy appliances, which directly impacts the underlying electrical load and water lines hidden inside the walls.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Dedicated Circuits:</strong> Modern luxury appliances like dual-zone wine coolers and induction cooktops draw immense power. We ensure your electrical panel handles the enhanced demand safely.</li>
                                <li><strong>Task Lighting:</strong> We install under-cabinet LED light strips and stylish pendant fixtures to banish shadows from your most important food preparation zones.</li>
                                <li><strong>Leak Prevention:</strong> Water damage under a kitchen sink can ruin expensive hardwood. We install top-of-the-line braided steel supply lines and modern garbage disposals to prevent catastrophe.</li>
                            </ul>
                            <p>
                                Our team manages the complexity so you do not have to. Contact JBK Handyman & Construction Services today to begin discussing your exciting kitchen transformation.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}