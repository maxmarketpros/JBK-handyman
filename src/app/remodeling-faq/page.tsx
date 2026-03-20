import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EstimateForm from '@/components/EstimateForm';
import Image from 'next/image';

const slug = '/remodeling-faq';
const base = 'https://jbkhandymanco.com';
const pageTitle = 'Remodeling Services FAQ | JBK Handyman & Construction';
const pageDesc = 'Frequently asked questions about kitchen, bathroom, and basement remodeling in Highlands Ranch, CO. Learn about timelines, permits, and our renovation process.';

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
        images: [{ url: `${base}/images/8.jpg`, width: 1200, height: 630, alt: 'Remodeling Services FAQ' }],
    },
    twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, images: [`${base}/images/8.jpg`] },
};

const faqs = [
    {
        question: "How long does a typical kitchen or bathroom remodel take?",
        answer: "A standard bathroom remodel typically takes 2-4 weeks, while a full kitchen renovation usually spans 4-8 weeks depending on the complexity and scope of work. We provide a detailed project timeline during our initial consultation phase to help you plan accordingly."
    },
    {
        question: "Do I need a permit for my remodeling project?",
        answer: "Most significant remodeling projects in Highlands Ranch and Douglas County require structural, electrical, or plumbing permits. JBK Handyman & Construction Services LLC handles the entire permitting process, ensuring all work meets local building codes and safety standards for your peace of mind."
    },
    {
        question: "How do I prepare for a home renovation?",
        answer: "We recommend clearing out any personal items, furniture, and wall decor from the project area and adjacent workspaces. Our team handles professional floor protection and dust containment measures (such as zip-walls) to minimize the impact on the rest of your home."
    },
    {
        question: "How do you handle changes during the project?",
        answer: "While we aim for clear, upfront scopes, we understand that needs can shift. All modifications are documented through formal change orders, including any adjustments to pricing or the project timeline. This ensures absolute transparency and prevents any surprises at completion."
    },
    {
        question: "Is your work covered by a warranty?",
        answer: "Yes, all our craftsmanship is backed by a professional warranty. We pride ourselves on the durability and longevity of our remodeling work. If any issues arise related to our installation, we are committed to making it right immediately."
    },
    {
        question: "Can I live in my home during the remodel?",
        answer: "In most cases, yes. We work diligently to maintain a clean, safe workspace and establish clear work hours (typically 8 AM to 5 PM) to ensure your home remains as livable as possible throughout the transformation process."
    },
    {
        question: "What areas do you serve for remodeling projects?",
        answer: "We primarily serve Highlands Ranch, CO, but we also handle remodeling projects in Castle Rock, Littleton, Denver, Lakewood, and throughout Douglas and Jefferson Counties."
    }
];

export default function RemodelingFAQPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main>
                {/* ── Hero Section ── */}
                <section className="relative pt-[160px] pb-[100px] flex items-center justify-center min-h-[40vh] overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/8.jpg"
                            alt="Remodeling FAQ Background"
                            fill
                            className="object-cover scale-105"
                            priority
                            quality={90}
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] !text-white drop-shadow-md mb-6 leading-tight">
                            Remodeling Services FAQ
                        </h1>
                        <div className="w-24 h-1 bg-[var(--color-primary-light)] mx-auto mb-8 rounded-none" />
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 font-medium">
                            Answers to common questions about our renovation process, timelines, and expert craftsmanship.
                        </p>
                    </div>
                </section>

                {/* ── FAQ Content ── */}
                <section className="section-padding bg-[var(--color-bg)]">
                    <div className="container-wide">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 gap-8">
                                {faqs.map((faq, index) => (
                                    <div 
                                        key={index} 
                                        className="bg-white p-8 border border-[var(--color-border)] shadow-sm rounded-none hover:shadow-md transition-shadow"
                                    >
                                        <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-primary)] mb-4">
                                            {faq.question}
                                        </h3>
                                        <div className="h-0.5 w-12 bg-[var(--color-border)] mb-4 rounded-none" />
                                        <p className="text-[var(--color-muted)] text-lg leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 p-10 bg-[var(--color-primary)] text-white rounded-none shadow-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] !text-white mb-4">
                                            Have more questions?
                                        </h2>
                                        <p className="text-white/90 text-lg">
                                            We're happy to discuss your specific project needs and provide a customized consultation.
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                                        <a href="#contact" className="btn btn-white rounded-none shadow-sm">
                                            Get an Estimate
                                        </a>
                                        <a href="tel:7209876053" className="btn btn-outline-white rounded-none">
                                            Call (720) 987-6053
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="contact">
                    <EstimateForm />
                </div>
            </main>
            <Footer />
        </>
    );
}
