import { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';

const slug = '/handyman-services-highlands-ranch-co';
const base = 'https://jbkhandymanco.com';
const pageTitle = 'Handyman Services in Highlands Ranch, CO | JBK';
const pageDesc = 'Expert general repairs, home maintenance, fixture work, and TV mounting to keep your Highlands Ranch home fully functional and well-maintained.';

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
        images: [{ url: `${base}/images/9.jpg`, width: 1200, height: 630, alt: 'Handyman Services in Highlands Ranch, CO' }],
    },
    twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, images: [`${base}/images/9.jpg`] },
};

export default function HandymanServicesPage() {
    return (
        <ServiceLayout
            title="Handyman Services"
            serviceImage="/images/9.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Expert Handyman Services in Highlands Ranch",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M15.17 11.42L21 5.58A2.652 2.652 0 0017.25 1.83l-5.83 5.83m-3.84 0L1.83 13.5A2.652 2.652 0 005.58 17.25l5.84-5.84m-5.84-3.83L1.83 1.83" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Welcome to JBK Handyman & Construction Services LLC, your trusted local provider for professional handyman services in Highlands Ranch, CO. We know that maintaining a beautiful home requires consistent attention and care. From fixing a stubborn squeaky door to expertly mounting a new living room television, our experienced team ensures your residence remains fully functional, secure, and visually appealing throughout the year. 
                            </p>
                            <p>
                                Finding a reliable, highly skilled contractor in Douglas County shouldn't be a frustrating experience. We have built our reputation on a foundation of absolute trust, transparent communication, and uncompromising quality. When your property experiences everyday wear and tear, it is crucial to address those small issues before they escalate into costly emergency repairs. Our comprehensive handyman solutions are designed to give homeowners complete peace of mind, freeing up your valuable time for what truly matters.
                            </p>
                            <p>
                                With over 15 years of industry experience, Justin B. Kirschner and his expert team approach every task—no matter how large or small—with precision and dedication. We don't believe in temporary quick fixes or cutting corners. Instead, we deliver long-lasting solutions using industry best practices and premium materials, so you can enjoy your home without the stress of constant upkeep.
                            </p>
                        </div>
                    )
                },
                {
                    id: "core-services",
                    title: "Our Core Handyman Solutions",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 2.25m-6-2.25 3-2.25" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                One of the primary advantages of working with JBK Handyman is our incredible versatility. Instead of juggling multiple specialized contractors for minor carpentry, painting, and basic installation tasks, you can simply make one phone call to our organized team. 
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                <div className="p-6 bg-white border border-[var(--color-border)] rounded-xl shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        General Repairs
                                    </h4>
                                    <p className="text-sm">We fix squeaky hinges, patch damaged drywall, repair broken cabinetry, and adjust stubborn doors that refuse to latch correctly.</p>
                                </div>
                                <div className="p-6 bg-white border border-[var(--color-border)] rounded-xl shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        TV & Furniture Assembly
                                    </h4>
                                    <p className="text-sm">Safe, secure wall mounting for heavy flat-screen televisions, as well as expert assembly for highly complex flat-pack furniture.</p>
                                </div>
                                <div className="p-6 bg-white border border-[var(--color-border)] rounded-xl shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        Fixture Installations
                                    </h4>
                                    <p className="text-sm">Upgrade the look of any room efficiently by having us securely swap out outdated light fixtures, ceiling fans, or bathroom hardware.</p>
                                </div>
                                <div className="p-6 bg-white border border-[var(--color-border)] rounded-xl shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        Preventative Maintenance
                                    </h4>
                                    <p className="text-sm">We tackle seasonal checklists including gutter cleaning, weatherstripping replacements, and essential smoke detector battery swaps.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "why-maintenance-matters",
                    title: "Why Regular Home Maintenance Matters",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Colorado’s fluctuating seasonal weather can take a severe toll on residential properties. Ignoring essential home maintenance drastically accelerates structural aging and negatively impacts your family's daily comfort. Professional, proactive upkeep preserves the value and aesthetic appeal of your most significant financial asset. Here is why hiring a professional team is essential:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Cost Efficiency:</strong> Preventive care is exponentially more cost-effective than enduring emergency interventions resulting from total system failures or hidden water damage.</li>
                                <li><strong>Safety First:</strong> Tasks involving heavy lifting, tall ladders, or electrical wires carry inherent physical risk. We utilize rigorous safety protocols to completely protect you and the property.</li>
                                <li><strong>Aesthetic Finish:</strong> We guarantee a premium level of finish that DIY attempts simply cannot replicate. We flawlessly match drywall textures and install baseboards with surgical precision.</li>
                                <li><strong>Expert Diagnostics:</strong> A seasoned handyman brings high-level diagnostic skills to uncover genuine root causes, avoiding temporary fixes that simply slap a bandage over persistent symptoms.</li>
                            </ul>
                        </div>
                    )
                },
                {
                    id: "our-process",
                    title: "Our Hassle-Free Process",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                We deeply recognize that inviting a contractor into your private home fundamentally requires mutual trust. To actively foster this trust and ensure your total satisfaction, we have meticulously developed a straightforward, highly streamlined handyman process. 
                            </p>
                            <p>
                                The journey begins when you reach out for a free project estimate. We emphasize rapid communication, typically responding within a single business day to discuss your specific needs. During our initial consultation, we conduct a thorough assessment, actively encouraging homeowners to prepare a comprehensive list of all necessary tasks prior to our arrival. Armed with this critical information, we quickly generate a transparent, incredibly detailed upfront estimate. You will never encounter hidden fees or confusing industry jargon when partnering with us.
                            </p>
                            <p>
                                Once scheduled, our team arrives precisely on time, independently equipped with the specialty tools and high-quality materials rapidly needed to execute the job efficiently. We treat your beautiful home with respect, utilizing durable protective coverings and ensuring a remarkably spotless cleanup following project completion. Experience the JBK difference today.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}