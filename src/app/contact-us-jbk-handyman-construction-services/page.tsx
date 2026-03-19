import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateForm from "@/components/EstimateForm";

export const metadata = {
  title: "Request a Quote - JBK Handyman & Construction Services LLC",
  description: "Request a Quote provided by JBK Handyman & Construction Services LLC in Highlands Ranch, CO and surrounding areas."
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