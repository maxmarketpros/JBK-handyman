import { Metadata } from 'next';
import LocationLayout from '@/components/LocationLayout';

export const metadata: Metadata = {
    title: 'General Contractor in Littleton, CO | JBK',
    description: 'Expert general contractor serving Littleton, CO. Providing premium home remodeling, basement finishing, fixture installations, and dependable repairs.',
};

export default function LittletonAreaPage() {
    return (
        <LocationLayout
            title="General Contractor in Littleton, CO"
            area="Littleton"
            heroImage="/images/4.jpg"
            sections={[
                {
                    id: "introduction",
                    title: "Expert Modernization in Littleton",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Welcome to JBK Handyman & Construction Services LLC, the dedicated local general contracting team trusted throughout Littleton, CO. Maintaining a home in this beautiful area often means navigating a mix of established, mid-century properties and newer suburban developments. Each era of home construction presents unique structural challenges that demand an experienced remodeling professional.
                            </p>
                            <p>
                                Whether you are planning a comprehensive kitchen expansion to accommodate a growing family or simply need an expert to execute essential drywall and plumbing repairs, working with a highly skilled contractor guarantees peace of mind. JBK has built a stellar reputation on clear communication, upfront pricing, and a refusal to cut corners. We treat every Littleton residence as if it were our own.
                            </p>
                            <p>
                                From securing the proper building permits to applying the final coat of premium interior paint, our process is designed to eliminate homeowner stress. We manage the detailed logistics and adhere to strict safety timelines, so you can enjoy the exciting transformation of your living spaces without the typical headaches of modern construction.
                            </p>
                        </div>
                    )
                },
                {
                    id: "littleton-services",
                    title: "Our Full Range of Modifications",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636m.214 9.226c.214.618.455 1.222.721 1.81.246.549.06 1.21-.464 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.13-3.136.376-4.636" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-6">
                            <p>
                                A successful remodel hinges on seamless coordination across several specialized trades. As your Littleton general contractor, we operate as a unified team to execute complex upgrades efficiently.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Modern Kitchen Design</h4>
                                    <p className="text-sm">We orchestrate total kitchen tear-downs. Experience customized solid wood cabinetry installations, durable quartz countertop fittings, and elegant task lighting to transform how you cook and entertain.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Bathroom Overhauls</h4>
                                    <p className="text-sm">Convert a dated guest bath into a modern oasis. We pour custom shower pans, lay intricate glass mosaic tiles, and integrate premium high-efficiency plumbing fixtures.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Basement Layouts</h4>
                                    <p className="text-sm">Stop ignoring the bottom floor of your home. We frame, insulate, and drywall empty basements, creating expansive recreation rooms or functional in-law suites.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-[var(--color-border)] shadow-sm">
                                    <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">Carpentry & Touch-ups</h4>
                                    <p className="text-sm">We provide meticulous aesthetic finishing. Our carpenters construct beautiful built-in shelving, install detailed crown molding, and hang heavy doors with perfect alignment and hardware integration.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: "local-trust",
                    title: "The Importance of Quality Craftsmanship",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    content: (
                        <div className="space-y-4">
                            <p>
                                Settling for inexperienced laborers often leads to disastrous structural and financial consequences down the line. When a DIY project or a budget contractor fails, the resulting water damage or electrical shorts can cost double the original estimate to rectify properly.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Moisture Management:</strong> We utilize advanced water barriers behind every shower wall we build. This stops unseen mold colonization and protects your home's fragile wooden subfloors.</li>
                                <li><strong>Load Safety:</strong> Adjusting floor plans often requires removing walls. We possess the structural knowledge to safely engineer load-bearing transfers, ensuring your roof and second floor remain absolutely stable.</li>
                                <li><strong>Aesthetic Accuracy:</strong> We focus on the fine details, ensuring every tile grout line is perfectly parallel and every drywall seam is completely invisible to the naked eye.</li>
                            </ul>
                            <p>
                                Give your Littleton property the professional aesthetic treatment it deserves. Contact JBK Handyman today to explore our comprehensive remodeling capabilities. Let's build something lasting together.
                            </p>
                        </div>
                    )
                }
            ]}
        />
    );
}