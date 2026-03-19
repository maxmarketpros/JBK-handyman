import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "General Contractor in Jefferson County, CO - JBK Handyman & Construction Services LLC",
  description: "General Contractor in Jefferson County, CO provided by JBK Handyman & Construction Services LLC in Highlands Ranch, CO and surrounding areas."
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-[70vh]">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-[var(--color-ink)] mb-6">
            General Contractor in Jefferson County, CO
          </h1>
          <p className="text-lg text-[var(--color-muted)] mb-8">
            This page is currently under development. Please check back soon for more information about general contractor in jefferson county, co.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}