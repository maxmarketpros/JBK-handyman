import Script from "next/script";
import { Metadata } from "next";
import { siteConfig } from "../../site.config";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustRow from "@/components/TrustRow";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSteps from "@/components/ProcessSteps";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import About from "@/components/About";
import SeoContent from "@/components/SeoContent";
import EstimateForm from "@/components/EstimateForm";
import Footer from "@/components/Footer";

const { business, seo } = siteConfig;
const baseUrl = business.siteUrl.replace(/\/$/, "");

export const metadata: Metadata = {
    title: "Handyman & Remodeling in Highlands Ranch | JBK Handyman",
    description:
        "Expert handyman & construction services in Highlands Ranch, CO. JBK Handyman provides premier remodeling, renovations, and flooring across Douglas County.",
    alternates: {
        canonical: business.siteUrl,
    },
    openGraph: {
        title: "Handyman & Remodeling in Highlands Ranch | JBK Handyman",
        description:
            "Expert handyman & construction services in Highlands Ranch, CO. JBK Handyman provides premier remodeling, renovations, and flooring across Douglas County.",
        url: business.siteUrl,
        siteName: business.name,
        type: "website",
        locale: "en_US",
        images: [
            {
                url: `${baseUrl}${seo.ogImage}`,
                width: 1200,
                height: 630,
                alt: `${business.name} — ${business.tagline}`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Handyman & Remodeling in Highlands Ranch | JBK Handyman",
        description:
            "Expert handyman & construction services in Highlands Ranch, CO. JBK Handyman provides premier remodeling, renovations, and flooring across Douglas County.",
        images: [`${baseUrl}${seo.ogImage}`],
    },
};

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <TrustRow />
                <ServicesGrid />
                <SeoContent />
                <ProcessSteps />
                <Reviews />
                <ServiceArea />
                <About />
                <EstimateForm />
            </main>
            <Footer />
            <Script
                src={siteConfig.scripts.formEmbedScript}
                strategy="lazyOnload"
            />
        </>
    );
}
