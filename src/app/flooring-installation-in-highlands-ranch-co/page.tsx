import { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';

const slug = '/flooring-installation-in-highlands-ranch-co';
const base = 'https://jbkhandymanco.com';
const pageTitle = 'Flooring Installation in Highlands Ranch, CO | JBK';
const pageDesc = 'Expert residential installation and replacement of solid hardwood, laminate, custom tile, and luxury vinyl flooring in Douglas County, CO.';

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
        images: [{ url: `${base}/images/6.jpg`, width: 1200, height: 630, alt: 'Flooring Installation in Highlands Ranch, CO' }],
    },
    twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, images: [`${base}/images/6.jpg`] },
};

export default function FlooringInstallationPage() {
    return (
        <ServiceLayout
            title="Premium Flooring Services"
            serviceImage="/images/6.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Expert Flooring Installation",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Welcome to JBK Handyman & Construction Services LLC, the trusted local leader for flawless flooring installation in Highlands Ranch, CO. The floors in your residence literally form the foundational aesthetic basis and functional core of your entire living environment. Updating outdated, heavily worn carpets or damaged linoleum with beautiful new hard surfaces creates an immediate, striking transformation.
                            </p>
                            <p>
                                Replacing an entire home's flooring requires substantially more than simply purchasing brand-new high-quality materials. It involves meticulous subfloor preparation, precise expansion gap calculations, and expert knowledge of how different materials react to Colorado's dry climate. A poorly installed floor will prematurely buckle, squeak continually, and ultimately fail long before its projected lifespan.
                            </p>
                            <p>
                                Our dedicated installation team possesses the specialized tools and the rigorous hands-on experience needed to tackle your flooring upgrades. From removing massive amounts of heavy tile debris to seamlessly transitioning between rooms, we execute every phase of the project with minimal disruption to your daily family life.
                            </p>
                        </div>
                    )
                },
                {
                    id: "material-options",
                    title: "Versatile Material Options",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M15.17 11.42L21 5.58A2.652 2.652 0 0017.25 1.83l-5.83 5.83m-3.84 0L1.83 13.5A2.652 2.652 0 005.58 17.25l5.84-5.84m-5.84-3.83L1.83 1.83" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                We work closely with our clients to recommend the perfect flooring materials based on room usage, foot traffic, moisture levels, and overall budget constraints. Below are some of our most popular durable installations.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Solid Hardwood</h4>
                                    <p className="text-sm">There is no substitute for the timeless elegance of classic hardwood. We securely nail down oak, hickory, and maple planks, creating a stunning, high-value look that can be repeatedly refinished.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Luxury Vinyl Plank (LVP)</h4>
                                    <p className="text-sm">LVP offers the incredible aesthetic of real wood while providing total waterproof durability. It is the absolute optimal choice for active households with messy pets and small children.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Porcelain & Ceramic Tile</h4>
                                    <p className="text-sm">Ideal for moisture-heavy environments like bathrooms and laundry rooms. We flawlessly level the subfloor and apply crack-isolation membranes before setting beautiful large-format tiles.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Premium Laminate</h4>
                                    <p className="text-sm">A highly cost-effective floating floor solution that provides immense scratch resistance. Modern laminate heavily mimics natural textures, delivering an upscale appearance without the premium price tag.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "installation-process",
                    title: "The Critical Subfloor Preparation",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                The long-term success of any new flooring significantly relies upon what happens before a single plank or tile is ever laid down. Inadequate subfloor preparation is the number one cause of costly premature flooring failures.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Subfloor Leveling:</strong> We carefully grind down high concrete spots and pour self-leveling compounds into low depressions, ensuring your new flooring rests perfectly flat without hollow voids.</li>
                                <li><strong>Moisture Mitigation:</strong> Installing expensive hardwood over a damp concrete basement slab is disastrous. We test moisture levels and deploy appropriate industrial vapor barriers.</li>
                                <li><strong>Baseboard Alignment:</strong> We carefully remove your existing intricate baseboards and creatively reinstall them upon completion, gracefully covering necessary expansion gaps with precision shoe molding.</li>
                            </ul>
                            <p>
                                Protect your real estate investment by hiring a contractor who executes the unseen details correctly. Contact JBK Handyman today for your comprehensive free installation estimate.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}