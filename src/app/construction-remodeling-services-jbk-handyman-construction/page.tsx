import { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';

export const metadata: Metadata = {
    title: 'Construction and Remodeling Services in Highlands Ranch, CO | JBK',
    description: 'Expert carpentry, painting, basement finishing, renovation work, and remodeling services across Douglas County.',
};

export default function ConstructionRemodelingPage() {
    return (
        <ServiceLayout
            title="Construction & Remodeling"
            serviceImage="/images/3.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Expert Construction in Highlands Ranch",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Welcome to JBK Handyman & Construction Services LLC, the leading provider of highly exceptional construction and remodeling services in Highlands Ranch, CO. Transforming your home into your ideal living space requires tremendous vision, meticulous planning, and an unwavering commitment to impeccable craftsmanship. From finishing a basement to expanding your family's usable square footage, our experienced team ensures your ambitious project is flawlessly executed from the first design concept to final spectacular completion.
                            </p>
                            <p>
                                We know that undertaking a significant construction or remodeling project in Douglas County can feel overwhelming. Securing a reliable, highly communicative, and skilled local general contractor is the most crucial first step. We have intentionally built our reputation on complete absolute trust, fully transparent budgeting, and premium building quality. Your home deserves a contractor who listens, executes reliably, and respects your living environment.
                            </p>
                            <p>
                                Based heavily right here in Highlands Ranch, our expert team approaches every individual remodeling task with remarkable precision. Whether it is intricate carpentry work or massive structural changes to safely open up an existing floor plan, Justin B. Kirschner and the crew bring the necessary expertise. We consistently execute beautifully, cleanly, and safely.
                            </p>
                        </div>
                    )
                },
                {
                    id: "remodeling-capabilities",
                    title: "Our Construction Capabilities",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                A successful remodeling project marries high-quality aesthetic design with robust structural execution. Our core capabilities address the most commonly requested home improvements that generate the biggest returns on investment for homeowners.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Basement Finishing</h4>
                                    <p className="text-sm">We securely construct framing, install insulation, run necessary plumbing, and finish drywall to transform a dark, concrete block basement into a stunning home theater or extra family bedroom.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Custom Carpentry</h4>
                                    <p className="text-sm">From intricate crown molding and elegant wainscoting to building beautifully robust custom shelving units, our master carpenters bring a high level of artistic precision to every room.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Whole-Room Renovations</h4>
                                    <p className="text-sm">We manage tear-downs and rebuilds by securely removing outdated materials and thoughtfully installing sophisticated replacements, elevating the aesthetic standard of your main living areas.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Exterior Upgrades</h4>
                                    <p className="text-sm">Increase curb appeal and secure outdoor living spaces. We meticulously handle deck repairs, solid patio construction, and intricate exterior painting to ensure your outdoor areas look incredible.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "our-values",
                    title: "Why Trust JBK With Your Remodel?",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M15.17 11.42L21 5.58A2.652 2.652 0 0017.25 1.83l-5.83 5.83m-3.84 0L1.83 13.5A2.652 2.652 0 005.58 17.25l5.84-5.84m-5.84-3.83L1.83 1.83" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                JBK Handyman takes immense pride in providing superior general contractor services in Highlands Ranch, CO. We strongly believe that maintaining a clean, highly organized, and fully respectful job site is just as important as the actual construction quality. 
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Highly Organized Management:</strong> We expertly sequence every phase of construction, ensuring that drywallers, painters, and carpenters work efficiently to prevent frustrating timeline delays.</li>
                                <li><strong>Clear Honest Pricing:</strong> We intelligently outline precisely what your project entails beforehand, providing a robust, highly detailed estimate without intentionally confusing terminology.</li>
                                <li><strong>Strict Quality Control:</strong> Every custom cut, installed beam, and painted surface is critically evaluated. We gracefully execute every detail because we care about the long-term durability of the work.</li>
                            </ul>
                            <p>
                                Reach out today to schedule your free consultation. We are perfectly positioned to effectively upgrade your beautiful home exactly the way you've always imagined.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}