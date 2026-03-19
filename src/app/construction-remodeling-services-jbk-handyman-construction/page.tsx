import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Construction and Remodeling Services - JBK Handyman & Construction Services LLC",
  description: "Construction and Remodeling Services provided by JBK Handyman & Construction Services LLC in Highlands Ranch, CO and surrounding areas."
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-[70vh]">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-[var(--color-ink)] mb-6">
            Construction and Remodeling Services
          </h1>
          <p className="text-lg text-[var(--color-muted)] mb-8">
            This page is currently under development. Please check back soon for more information about construction and remodeling services.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}