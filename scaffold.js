const fs = require('fs');
const path = require('path');

const pages = [
  { slug: '/general-contractor-in-castle-rock-co', h1: 'General Contractor in Castle Rock, CO' },
  { slug: '/general-contractor-in-jefferson-county-co', h1: 'General Contractor in Jefferson County, CO' },
  { slug: '/general-contractor-in-douglas-county-co', h1: 'General Contractor in Douglas County, CO' },
  { slug: '/general-contractor-in-denver-co', h1: 'General Contractor in Denver, CO' },
  { slug: '/general-contractor-in-littleton-co', h1: 'General Contractor in Littleton, CO' },
  { slug: '/general-contractor-in-lakewood-co', h1: 'General Contractor in Lakewood, CO' },
  { slug: '/bathroom-remodel-in-highlands-ranch-co', h1: 'Bathroom Remodel in Highlands Ranch, CO' },
  { slug: '/handyman-services-highlands-ranch-co', h1: 'Handyman Services' },
  { slug: '/repair-installation-services-highlands-ranch-co', h1: 'Repair and Installation Services' },
  { slug: '/construction-remodeling-services-jbk-handyman-construction', h1: 'Construction and Remodeling Services' },
  { slug: '/kitchen-remodel-in-highlands-ranch-co', h1: 'Kitchen Remodel in Highlands Ranch, CO' },
  { slug: '/flooring-installation-in-highlands-ranch-co', h1: 'Flooring Installation in Highlands Ranch, CO' },
  { slug: '/contact-us-jbk-handyman-construction-services', h1: 'Request a Quote' }
];

const appDir = path.join(__dirname, 'src', 'app');

pages.forEach(({ slug, h1 }) => {
  const dirPath = path.join(appDir, slug.substring(1));
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const content = `import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "${h1} - JBK Handyman & Construction Services LLC",
  description: "${h1} provided by JBK Handyman & Construction Services LLC in Highlands Ranch, CO and surrounding areas."
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-[70vh]">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-[var(--color-ink)] mb-6">
            ${h1}
          </h1>
          <p className="text-lg text-[var(--color-muted)] mb-8">
            This page is currently under development. Please check back soon for more information about ${h1.toLowerCase()}.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});
console.log('Pages scaffolded successfully.');
