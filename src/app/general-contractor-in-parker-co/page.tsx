import { Metadata } from 'next';
import LocationLayout from '@/components/LocationLayout';

const slug = '/general-contractor-in-parker-co';
const base = 'https://jbkhandymanco.com';
const pageTitle = 'General Contractor in Parker, CO | JBK';
const pageDesc = 'Highly rated general contractor in Parker, CO. Your local expert for high-quality kitchen and bathroom remodeling, basement finishes, and comprehensive property repairs.';

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
        images: [{ url: `${base}/images/6.jpg`, width: 1200, height: 630, alt: 'General Contractor in Parker, CO' }],
    },
    twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, images: [`${base}/images/6.jpg`] },
};

export default function ParkerAreaPage() {
    return (
        <LocationLayout
            title="General Contractor in Parker, CO"
            area="Parker"
            heroImage="/images/6.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Parker's Choice for Home Renovations",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Welcome to JBK Handyman & Construction Services LLC, Parker's trusted partner for general contracting and home improvements. In a town known for its unique blend of community spirit and suburban growth, Parker homeowners need a contractor who can balance tradition with modern living.
                            </p>
                            <p>
                                With fifteen years of industry experience, our team is equipped to handle the wide variety of residential styles found in Parker. Whether your goal is a complete modern kitchen transformation or maintaining the charm of an older residence, we approach every project with the same dedication to quality and craftsmanship.
                            </p>
                            <p>
                                We know that your Parker home is one of your most important investments. That's why JBK is committed to providing reliable service, transparent project management, and a level of finish that stands the test of time. From first consultation to final inspection, your satisfaction is our primary focus.
                            </p>
                        </div>
                    )
                },
                {
                    id: "parker-services",
                    title: "Comprehensive Home Contracting",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636m.214 9.226c.214.618.455 1.222.721 1.81.246.549.06 1.21-.464 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                Parker homeowners rely on JBK for a wide range of services. We use high-quality materials and modern construction methods to ensure every renovation and repair enhances your home's functionality and aesthetic.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Modern Kitchens</h4>
                                    <p className="text-sm">We design and build kitchens that serve as the heart of the home, featuring custom cabinetry, durable backsplashes, and efficient floor plans for local families.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Beautiful Bathrooms</h4>
                                    <p className="text-sm">Upgrade your bathroom with custom tile showers, high-efficiency fixtures, and layout improvements that add both comfort and resale value to your Parker home.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Basement Finishing</h4>
                                    <p className="text-sm">Turn your unfinished basement into a functional living space, home office, or guest retreat with our expert framing and finishing services.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Expert Drywall & Repairs</h4>
                                    <p className="text-sm">Maintain your property's integrity with expert drywall repair, door adjustments, and various property improvements that keep your home in top condition.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "local-trust",
                    title: "Integrity and Value in Every Build",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Parker's growth and community spirit mean that quality craftsmanship is always in high demand. We are proud to be part of the local building community and work tirelessly to protect your equity.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Reliable Scheduling:</strong> We understand your time is valuable. We maintain clear schedules and stay on task until your project is successfully completed.</li>
                                <li><strong>Superior Craftsmanship:</strong> We don't cut corners. We use premium materials and time-tested methods to ensure your Parker home remains a source of pride.</li>
                                <li><strong>Deep Local Expertise:</strong> We are familiar with Parker's building codes and community standards, ensuring a smooth and hassle-free remodeling process.</li>
                            </ul>
                            <p>
                                If you're ready to transform your Parker home, partner with a general contractor who treats every project like their own. Contact JBK Handyman today for your initial consultation.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}
