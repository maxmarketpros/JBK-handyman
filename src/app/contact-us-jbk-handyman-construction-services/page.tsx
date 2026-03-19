import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateForm from "@/components/EstimateForm";

const slug = '/contact-us-jbk-handyman-construction-services';
const base = 'https://jbkhandymanco.com';
const pageTitle = 'Request a Quote - JBK Handyman & Construction Services LLC';
const pageDesc = 'Request a free quote from JBK Handyman & Construction Services LLC in Highlands Ranch, CO. Serving Douglas County and surrounding areas.';

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
        images: [{ url: `${base}/images/8.jpg`, width: 1200, height: 630, alt: 'JBK Handyman & Construction Services - Request a Quote' }],
    },
    twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, images: [`${base}/images/8.jpg`] },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20 lg:pt-[140px] min-h-[70vh]">
        <EstimateForm />
      </main>
      <Footer />
    </>
  );
}