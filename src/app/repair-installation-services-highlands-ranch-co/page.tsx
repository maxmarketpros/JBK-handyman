import { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';

const slug = '/repair-installation-services-highlands-ranch-co';
const base = 'https://jbkhandymanco.com';
const pageTitle = 'Repair & Installation Services in Highlands Ranch, CO | JBK';
const pageDesc = 'Expert electrical repairs, plumbing repairs, light fixture installations, drywall repair, and related home improvement work across Douglas County, CO.';

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
        images: [{ url: `${base}/images/2.jpg`, width: 1200, height: 630, alt: 'Repair and Installation Services in Highlands Ranch, CO' }],
    },
    twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, images: [`${base}/images/2.jpg`] },
};

export default function RepairInstallationPage() {
    return (
        <ServiceLayout
            title="Repair & Installation"
            serviceImage="/images/2.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Reliable Repair & Installation in Highlands Ranch",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636m.214 9.226c.214.618.455 1.222.721 1.81.246.549.06 1.21-.464 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Welcome to JBK Handyman & Construction Services LLC, your dependable local provider for professional repair and installation services in Highlands Ranch, CO. Maintaining a fully functional and secure home requires an eye for detail and uncompromising quality standards. From swapping out an outdated ceiling fan to expertly repairing structurally damaged drywall, our experienced technicians ensure your residence performs flawlessly year-round.
                            </p>
                            <p>
                                When your property experiences sudden malfunctions or requires crucial fixture upgrades, prompt attention is vital to prevent minor annoyances from escalating into expensive problems. Our comprehensive repair and installation services are specifically designed to give discerning homeowners complete peace of mind. With over 15 years of rigorous industry experience, we handle complex upgrades with efficiency and safety as our top priorities.
                            </p>
                            <p>
                                We firmly believe that your home deserves the utmost respect. That means no cut corners, no temporary fixes, and no mess left behind. Whether you need an emergency drywall patch before hosting a large event or you're planning proactive electrical fixture upgrades to modernize your living room, JBK Handyman provides the reliable expertise that Highlands Ranch homeowners trust.
                            </p>
                        </div>
                    )
                },
                {
                    id: "comprehensive-solutions",
                    title: "Our Specialty Installation Services",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.055.902-.417 1.173l-1.293.97a17.14 17.14 0 007.824 7.824l.97-1.293c.271-.362.733-.527 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                Instead of juggling radically different specialized contractors for light carpentry, touch-up painting, basic plumbing repairs, and minor electrical fixture tasks, you can simply call our incredibly versatile team to handle it all in a single visit. 
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Electrical & Lighting</h4>
                                    <p className="text-sm">We securely install elegant chandeliers, update outdated recessed lighting, and replace dysfunctional light switches to dramatically improve the illumination and functionality of your interior spaces.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Plumbing Fixtures</h4>
                                    <p className="text-sm">Tired of a leaking faucet or a clogged sink drain? We professionally install new kitchen sinks, modern bathroom vanities, and upgraded showerheads ensuring watertight precision.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Drywall & Painting</h4>
                                    <p className="text-sm">We meticulously handle frustrating drywall patching and expert texture blending. Our detailed touch-up painting seamlessly removes unsightly wall damage and completely revitalizes your interior.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Appliance Installation</h4>
                                    <p className="text-sm">Properly securing heavy dishwashers, integrating new ovens, or setting up complex washer-dryer units requires robust capability. We ensure your new investments are hooked up properly and safely.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "why-hire-pros",
                    title: "The Danger of DIY Installations",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                In today's digital world, online tutorial videos can easily make complex fixture installations appear deceptively simple. However, taking on these tasks without the specialized tools and extensive hands-on experience often leads to exacerbated damage and surprisingly high financial costs to eventually correct the amateur mistakes.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Structural Integrity:</strong> Heavily laden shelving and massive wall-mounted displays must be securely driven into wooden studs to avoid catastrophic property damage.</li>
                                <li><strong>Electrical Safety:</strong> Wiring mistakes can easily lead to blown fuses or serious fire hazards. Our professionals know precisely how to navigate residential electrical setups carefully.</li>
                                <li><strong>Water Damage Prevention:</strong> A poorly installed plumbing fixture can slowly leak inside the walls, cultivating dangerous invisible mold and causing massive foundational rotting.</li>
                            </ul>
                            <p>
                                Reach out today to schedule a detailed consultation. Let the dedicated professionals at JBK Handyman significantly reduce your stress and securely install your essential household fixtures.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}