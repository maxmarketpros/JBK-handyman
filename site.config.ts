// ╔══════════════════════════════════════════════════════════════════╗
// ║  SITE CONFIG — Customized for JBK Handyman & Construction        ║
// ╚══════════════════════════════════════════════════════════════════╝

export const siteConfig = {
    // ── Business Info ──────────────────────────────────────────────
    business: {
        name: "JBK Handyman & Construction Services LLC",
        tagline: "Premium Handyman & Remodeling in Highlands Ranch, CO",
        description:
            "JBK Handyman & Construction Services LLC provides handyman, repair, installation, construction, and remodeling services in Highlands Ranch and surrounding Colorado areas.",
        ownerName: "Justin B. Kirschner",
        phone: "(720) 987-6053",
        phoneRaw: "7209876053",
        email: "jbkhandyman617@gmail.com",
        siteUrl: "https://jbkhandymanco.com/",
    },

    // ── Location ─────────────────────────────────────────────────
    location: {
        city: "Highlands Ranch",
        state: "CO",
        zip: "80126",
        county: "Douglas County",
        geo: { lat: 39.5544, lng: -104.9696 },
        areasServed: [
            "Castle Rock",
            "Jefferson County",
            "Douglas County",
            "Denver",
            "Littleton",
            "Lakewood",
        ],
    },

    // ── Branding / Colors ────────────────────────────────────────
    colors: {
        primary: "#324225",
        primaryDark: "#2D3920",
        primaryLight: "#9FA69A",
        secondary: "#CB7517",
        secondaryDark: "#AA7126",
        secondaryLight: "#D9DED4",
        bg: "#FFFFFF",
        bgAlt: "#F7F8F4",
        ink: "#324225",
        muted: "#55604C",
        border: "#D9DED4",
        star: "#CB7517",
    },

    // ── Images ───────────────────────────────────────────────────
    images: {
        logo: "/logo-jbk-v2.png",
        hero: "/images/8.jpg",
        about: "/images/7.jpg",
        trust: "/images/1.jpg",
    },

    // ── Hero Section ─────────────────────────────────────────────
    hero: {
        badge: "Trusted Local Contractor · Highlands Ranch, CO",
        headline: "Expert Handyman & Construction Services in Highlands Ranch, CO",
        subheadline:
            "From small home repairs to full kitchen and bathroom remodels, JBK Handyman & Construction Services LLC delivers precision and quality workmanship across Douglas County.",
        ctaText: "Request a Free Estimate",
        responseTime: "Prompt, Professional Service",
        stats: [
            { value: "15+", label: "Years Experience" },
            { value: "6", label: "Core Services" },
            { value: "100%", label: "Satisfaction Focus" },
            { value: "Local", label: "Douglas County" },
        ],
    },

    // ── Trust Row ────────────────────────────────────────────────
    trustItems: [
        {
            title: "Over 15 Years of Experience",
            description: "Deep expertise across diverse handyman, maintenance, and complex remodeling projects.",
        },
        {
            title: "Craftsmanship & Detail",
            description: "An unwavering commitment to quality in everything we build, repair, and install.",
        },
        {
            title: "Customer-Centered Service",
            description: "Clear communication, practical problem solving, and respectful project execution.",
        },
        {
            title: "Local Highland Ranch Contractor",
            description: "A reliable community partner you can confidently call for any home improvement need.",
        },
    ],

    // ── Services ─────────────────────────────────────────────────
    services: {
        sectionLabel: "Our Expertise",
        sectionTitle: "Comprehensive Construction & Handyman Services",
        items: [
            {
                title: "Handyman Services",
                description: "General repairs, home maintenance, fixture work, and TV mounting to keep homes functional and well maintained.",
                image: "/images/9.jpg",
                alt: "Handyman mounting a TV and performing home maintenance",
                href: "/handyman-services-highlands-ranch-co",
            },
            {
                title: "Repair and Installation Services",
                description: "Electrical repairs, plumbing repairs, light fixture installations, drywall repair, and related home improvement work.",
                image: "/images/2.jpg",
                alt: "Professional performing appliance and home installation services",
                href: "/repair-installation-services-highlands-ranch-co",
            },
            {
                title: "Construction and Remodeling Services",
                description: "Carpentry, painting, basement finishing, renovation work, and more involved residential improvement projects.",
                image: "/images/3.jpg",
                alt: "Completed living space construction and remodeling project",
                href: "/construction-remodeling-services-jbk-handyman-construction",
            },
            {
                title: "Bathroom Remodeling",
                description: "Fixture upgrades, tile work, layout improvements, and complete beautiful bathroom remodeling solutions.",
                image: "/images/4.jpg",
                alt: "Beautiful, modernized completed bathroom remodeling",
                href: "/bathroom-remodel-in-highlands-ranch-co",
            },
            {
                title: "Kitchen Remodeling",
                description: "Cabinetry, countertops, lighting improvements, layout upgrades, and full custom kitchen renovation work.",
                image: "/images/5.jpg",
                alt: "Luxurious modernized kitchen with large island and modern lighting",
                href: "/kitchen-remodel-in-highlands-ranch-co",
            },
            {
                title: "Flooring Services",
                description: "Expert installation and replacement of hardwood, laminate, tile, luxury vinyl, and other residential flooring materials.",
                image: "/images/6.jpg",
                alt: "New hardwood flooring and stairs installation",
                href: "/flooring-installation-in-highlands-ranch-co",
            },
        ],
    },

    // ── Process Steps ────────────────────────────────────────────
    process: {
        sectionLabel: "How We Work",
        sectionTitle: "A Homeowner Friendly Process",
        steps: [
            {
                number: "01",
                title: "Consultation & Review",
                description: "We discuss your project requirements, listen to your goals, and assess the scope of work and property condition.",
            },
            {
                number: "02",
                title: "Detailed Estimate",
                description: "You'll receive a clear, upfront estimate covering all necessary materials, labor, and expected timelines.",
            },
            {
                number: "03",
                title: "Scheduling & Execution",
                description: "We work efficiently and respectfully in your home, ensuring top-tier craftsmanship and a clean workspace.",
            },
            {
                number: "04",
                title: "Project Completion",
                description: "A final walkthrough verifies quality, ensuring every detail meets your standards and exceeds your expectations.",
            },
        ],
        expectations: [
            "Clear, honest communication",
            "Punctual and dependable scheduling",
            "Organized, clean workspaces",
            "Professional, highly skilled craftsmanship",
        ],
    },

    // ── Reviews ──────────────────────────────────────────────────
    reviews: {
        sectionLabel: "Testimonials",
        sectionTitle: "What Homeowners Are Saying",
        items: [
            {
                initials: "MH",
                name: "Mark H.",
                stars: 5,
                text: "Justin and his team completely transformed our master bathroom. Their attention to detail was incredible, and they finished exactly when they said they would. A highly professional local contractor.",
            },
            {
                initials: "SS",
                name: "Sarah S.",
                stars: 5,
                text: "JBK Handyman is our go-to for everything from drywall fixes to tricky light fixtures. They are always reliable, fully transparent with pricing, and provide excellent craftsmanship.",
            },
            {
                initials: "DB",
                name: "David B.",
                stars: 5,
                text: "We hired them for a kitchen upgrade and flooring installation throughout the main level. The result is flawless. Truly a premium remodeling service right here in Highlands Ranch.",
            },
        ],
    },

    // ── About ────────────────────────────────────────────────────
    about: {
        sectionLabel: "About Us",
        heading: "Meet JBK Handyman & Construction Services LLC in Highlands Ranch, CO",
        paragraphs: [
            "With over 15 years of experience, Justin B. Kirschner and the expert team at JBK Handyman & Construction Services LLC deliver exceptional craftsmanship to homeowners in Highlands Ranch and the greater Douglas County area.",
            "From simple handyman tasks and fixture installations to comprehensive construction and remodeling services, we handle every project with precision. As the premier general contractor in Highlands Ranch, CO, we pride ourselves on reliability and practical problem solving.",
        ],
        ctaPrimary: "Request an Estimate",
        ctaSecondary: "Call (720) 987-6053",
    },

    // ── Service Area ─────────────────────────────────────────────
    serviceArea: {
        sectionLabel: "Where We Work",
        heading: "Serving Highlands Ranch & the Greater Denver Area",
        mapTitle: "Serving Highlands Ranch, CO",
        mapSubtitle: "and surrounding areas including Castle Rock, Jefferson County, and Douglas County",
    },

    // ── Estimate Form ────────────────────────────────────────────
    form: {
        embedUrl: "https://api.leadconnectorhq.com/widget/form/JHshIb4QVpaGnye1OJpT",
        formId: "JHshIb4QVpaGnye1OJpT",
        formTitle: "Request a Free Consultation",
        promises: [
            "Professional, competitive estimate",
            "Respectful, responsive local service",
            "Premium quality execution",
            "Clear project timelines",
        ],
    },

    // ── SEO ──────────────────────────────────────────────────────
    seo: {
        title: "Handyman & Remodeling in Highlands Ranch | JBK Handyman",
        description:
            "Expert handyman & construction services in Highlands Ranch, CO. JBK Handyman provides premier remodeling, renovations, and flooring across Douglas County.",
        keywords: [
            "handyman Highlands Ranch CO",
            "kitchen remodeling Highlands Ranch",
            "bathroom remodeling Douglas County",
            "home improvement Denver area",
            "general contractor Littleton CO",
        ],
        ogImage: "/images/8.jpg",
    },

    // ── Schema.org (JSON-LD) ─────────────────────────────────────
    schema: {
        businessType: "LocalBusiness",
        priceRange: "$$",
        knowsAbout: [
            "Handyman Services",
            "Repair and Installation Services",
            "Construction and Remodeling Services",
            "Bathroom Remodeling",
            "Kitchen Remodeling",
            "Flooring Services"
        ],
    },

    // ── External Scripts ─────────────────────────────────────────
    scripts: {
        // GoHighLevel / LeadConnector form embed script
        formEmbedScript: "https://link.msgsndr.com/js/form_embed.js",
    },
} as const;

export type SiteConfig = typeof siteConfig;
