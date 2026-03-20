import { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';

const slug = '/home-renovations-in-highlands-ranch-co';
const base = 'https://jbkhandymanco.com';
const pageTitle = 'Home Renovations in Highlands Ranch, CO | JBK';
const pageDesc = 'Professional home renovations in Highlands Ranch, CO. From full-scale interior updates to specific room transformations, we deliver expert craftsmanship.';

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
        images: [{ url: `${base}/images/8.jpg`, width: 1200, height: 630, alt: 'Home Renovations in Highlands Ranch, CO' }],
    },
    twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, images: [`${base}/images/8.jpg`] },
};

export default function HomeRenovationsPage() {
    return (
        <ServiceLayout
            title="Home Renovations"
            serviceImage="/images/8.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Premier Home Renovations in Highlands Ranch",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                At JBK Handyman & Construction Services LLC, we specialize in high-quality home renovations that breathe new life into Highlands Ranch properties. Whether you're looking to modernize an aging home or customize a newer property to better suit your lifestyle, our team brings the expertise and dedication needed for a successful transformation.
                            </p>
                            <p>
                                A successful home renovation is more than just a fresh coat of paint—it's about improving functionality, enhancing aesthetic appeal, and increasing the long-term value of your investment. We work closely with Highlands Ranch homeowners to understand their specific goals and provide tailored solutions that range from single-room updates to whole-home transformations.
                            </p>
                            <p>
                                With 15 years of experience in the Douglas County area, we have the local knowledge and technical skill to navigate any renovation project. We handle the complex logistics, manage skilled trades, and maintain a clean, organized job site, ensuring your renovation experience is as stress-free as possible.
                            </p>
                        </div>
                    )
                },
                {
                    id: "renovation-scope",
                    title: "Comprehensive Renovation Solutions",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M15.17 11.42L21 5.58A2.652 2.652 0 0017.25 1.83l-5.83 5.83m-3.84 0L1.83 13.5A2.652 2.652 0 005.58 17.25l5.84-5.84m-5.84-3.83L1.83 1.83" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                Our renovation services are designed to address every corner of your home. We use premium materials and modern construction techniques to ensure that every update is built to last.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Interior Updates</h4>
                                    <p className="text-sm">From opening up floor plans by removing non-load-bearing walls to updating trim and light fixtures, we modernize your home's interior for better flow and style.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Custom Finishes</h4>
                                    <p className="text-sm">Elevate your home's character with expert wainscoting, custom built-ins, and high-quality paint finishes that showcase premium craftsmanship.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Structure & Layout</h4>
                                    <p className="text-sm">We handle the structural modifications needed to improve your home's layout, ensuring every change is safe, code-compliant, and perfectly integrated.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Project Management</h4>
                                    <p className="text-sm">Our full-service approach means we manage every detail, from initial planning and permits to the final walkthrough, saving you time and frustration.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "why-renovate",
                    title: "The JBK Renovation Advantage",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Choosing JBK for your home renovation means partnering with a team that values your home as much as you do. We are committed to transparency, reliability, and superior quality in every project we undertake in Highlands Ranch.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Local Expertise:</strong> We understand the specific building codes and architectural styles of Highlands Ranch, ensuring a smooth renovation process.</li>
                                <li><strong>Clear Communication:</strong> We keep you informed at every stage, providing regular updates and honest answers to your questions.</li>
                                <li><strong>Uncompromising Quality:</strong> We don't cut corners. Every material used and every task performed meets our rigorous internal standards for excellence.</li>
                            </ul>
                            <p>
                                Ready to transform your Highlands Ranch home? Contact JBK Handyman & Construction Services today to schedule your consultation and take the first step toward the home of your dreams.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}
