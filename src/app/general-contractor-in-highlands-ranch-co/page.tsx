import { Metadata } from 'next';
import LocationLayout from '@/components/LocationLayout';

const slug = '/general-contractor-in-highlands-ranch-co';
const base = 'https://jbkhandymanco.com';
const pageTitle = 'General Contractor in Highlands Ranch, CO | JBK';
const pageDesc = 'Premium general contractor in Highlands Ranch, CO. Specializing in luxury kitchen and bathroom remodeling, custom basement finishing, and expert property maintenance.';

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
        images: [{ url: `${base}/images/8.jpg`, width: 1200, height: 630, alt: 'General Contractor in Highlands Ranch, CO' }],
    },
    twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, images: [`${base}/images/8.jpg`] },
};

export default function HighlandsRanchAreaPage() {
    return (
        <LocationLayout
            title="General Contractor in Highlands Ranch, CO"
            area="Highlands Ranch"
            heroImage="/images/8.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Excellence in Highlands Ranch Home Remodeling",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Welcome to JBK Handyman & Construction Services LLC, the leading choice for general contracting in Highlands Ranch. As one of Colorado's premier master-planned communities, Highlands Ranch demands a level of craftsmanship and attention to detail that matches its beautiful neighborhoods and high standards of living.
                            </p>
                            <p>
                                Whether you are looking to update a newer home or modernize a classic Highlands Ranch property, our team brings over 15 years of local experience to every project. We understand that your home is more than just a building—it's a significant investment and a sanctuary for your family. We treat every job with the respect and precision it deserves.
                            </p>
                            <p>
                                From expansive kitchen renovations to detailed trim work and professional repairs, JBK is dedicated to delivering results that exceed expectations. We focus on clear communication, transparent pricing, and a clean workspace, ensuring your remodeling experience is as smooth as possible from start to finish.
                            </p>
                        </div>
                    )
                },
                {
                    id: "highlands-ranch-services",
                    title: "Specialized Construction Services",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636m.214 9.226c.214.618.455 1.222.721 1.81.246.549.06 1.21-.464 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                Our comprehensive service offerings are designed to address the unique needs of Highlands Ranch homeowners. We combine modern aesthetics with durable construction to enhance both the beauty and function of your home.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Luxury Kitchens</h4>
                                    <p className="text-sm">Transform your kitchen into a culinary masterpiece with custom cabinetry, premium stone countertops, and high-end appliance integration that fits the Highlands Ranch lifestyle.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Spa-Like Bathrooms</h4>
                                    <p className="text-sm">From walk-in steam showers to elegant freestanding tubs, we create serene bathroom retreats with meticulous tile work and modern fixtures.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Basement Finishing</h4>
                                    <p className="text-sm">Maximize your home's square footage by turning an unfinished basement into a home theater, guest suite, or the ultimate entertainment space.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Custom Carpentry</h4>
                                    <p className="text-sm">Add character to your home with expert trim work, custom built-ins, and high-quality wood accents that showcase superior craftsmanship.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "local-trust",
                    title: "Your Trusted Highlands Ranch Partner",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Choosing a contractor in Highlands Ranch means selecting someone who understands the local architecture and community standards. JBK is committed to maintaining the integrity and value of your home.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Professional Project Management:</strong> We handle everything from initial design consultation to final walkthrough, ensuring every milestone is met with quality.</li>
                                <li><strong>HOA Compliance:</strong> We are experienced in working within neighborhood guidelines and ensuring all external modifications meet community standards.</li>
                                <li><strong>Exceptional Quality Control:</strong> Every project undergoes rigorous inspection by our lead contractors to ensure it meets our "Built to Last" philosophy.</li>
                            </ul>
                            <p>
                                Join the hundreds of satisfied homeowners in Highlands Ranch who have trusted JBK with their most important asset. Contact us today to schedule your consultation and see what's possible.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}
