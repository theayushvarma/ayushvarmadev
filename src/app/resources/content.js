import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ayush",
  lastName: "Varma",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Shopify Engineer · Shopify Apps · 3D / WebGL · React & Next.js",
  avatar: "/images/avatar.jpg",
  email: "vayush798@gmail.com",
  // Single source of truth for the number. `phone` is the display form,
  // `phoneIntl` is the digits-only form wa.me requires (no +, no spaces).
  phone: "+91 87329 53410",
  phoneIntl: "918732953410",
  // IANA identifier — consumed by <TimeDisplay/>. Never render this directly.
  location: "Asia/Kolkata",
  // Human-readable label — this is what appears in the UI.
  displayLocation: "Surat, Gujarat, India",
  languages: ["English", "Hindi", "Gujarati"],
};

const newsletter = {
  // Disabled until a real form endpoint is configured in config.js (mailchimp.action).
  // The previous placeholder action caused the subscribe form to error on submit.
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Notes on Shopify app development, checkout extensibility, and building 3D
      product experiences for the web.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/theayushvarma",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/theayushvarma/",
  },
  {
    name: "App Store",
    icon: "globe",
    link: "https://apps.shopify.com/tdp-ring-builder",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: `https://wa.me/${person.phoneIntl}`,
  },
  {
    name: "Call",
    icon: "phone",
    link: `tel:${person.phoneIntl.replace(/^/, "+")}`,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  label: "Home",
  title: `${person.name} — Senior Shopify Engineer & 3D Web Developer`,
  description: `Shopify engineer with 3 years shipping production commerce: a five-store Shopify estate, a published Shopify App Store app, and 3D/AR product experiences built with Three.js.`,
  headline: <>Shopify engineer who ships 3D commerce</>,
  subline: (
    <>
      I'm {person.firstName}. I run a five-store Shopify estate across Australia, the UK,
      Germany, the US and India — one custom Liquid theme per market on a shared section
      library. I've published a ring configurator to two marketplaces, the Shopify App Store
      and WordPress.org, and I build photoreal 3D product viewers with browser AR try-on in
      Three.js.
    </>
  ),
  seo: {
    title: "Ayush Varma — Senior Shopify Engineer · Shopify Apps · Three.js & 3D Commerce",
    description:
      "Senior Shopify engineer: Liquid themes, custom apps in Remix with App Bridge and Polaris, Shopify Functions and checkout extensibility, and platform migrations. Also builds 3D/AR commerce with Three.js and React Three Fiber.",
    keywords: [
      "Ayush Varma",
      "Shopify developer",
      "Shopify app developer",
      "Shopify Liquid developer",
      "Shopify Functions",
      "checkout extensibility",
      "Remix Shopify app",
      "React developer",
      "Next.js engineer",
      "Three.js developer",
      "React Three Fiber",
      "3D web developer",
      "AR try-on developer",
      "WebGL engineer",
      "Shopify migration",
      "eCommerce engineer",
    ],
  },
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet ${person.name}, ${person.role}, based in Surat, Gujarat, India`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: {
    display: true,
    icon: "email",
    label: "Get in touch",
    link: "mailto:vayush798@gmail.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    // Plain-string mirror of the JSX below. Used for schema.org JSON-LD, which
    // cannot serialize a React element.
    plainDescription:
      "I'm Ayush Varma, a full stack engineer with 3 years at The Diamond Port, promoted through four roles from React intern to Senior Shopify Engineer. I own a five-store Shopify estate, ship custom Shopify apps in Remix and Node, and build 3D product experiences with Three.js and React Three Fiber.",
    description: (
      <>
        I'm {person.name}, a full stack engineer with 3 years at a single employer — promoted
        through four roles, from React intern to Senior Shopify Engineer. I design and ship
        end to end, from data model to deployed UI.
        <br /><br />
        Most of my work is Shopify: a five-store estate with one storefront per market, custom
        Liquid themes built with the Shopify CLI, and a ring configurator I shipped to two
        public marketplaces — the Shopify App Store and the WordPress.org plugin directory.
        I work in Remix and Node with App Bridge and Polaris, Shopify Functions and checkout
        extensibility, and I've migrated stores onto Shopify from Magento, WooCommerce and
        BigCommerce.
        <br /><br />
        Since 2025 I've been building 3D for the web — Three.js and React Three Fiber viewers
        that turn raw CAD files into photoreal, configurable products, with browser AR try-on.
        That work became <InlineCode>i3dStudio</InlineCode>.
        <br /><br />
        I work inside the diamond and jewellery industry in Surat, which gives me a view of
        commerce problems most developers never see.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "The Diamond Port",
        timeframe: "Apr 2026 – Present",
        role: "Senior Shopify Engineer",
        achievements: [
          <>
            Own a <strong>five-store Shopify estate</strong> — one storefront per market across
            Australia, the UK, Germany, the US and India — each on its own custom Liquid theme
            sharing a common section library and analytics layer, with per-store catalog,
            pricing, tax and shipping configuration.
          </>,
          <>
            Maintain and release the company's <strong>public Shopify App Store app</strong> —
            Remix, Node.js and React with App Bridge, Polaris, OAuth and session storage,
            backed by Admin GraphQL and webhooks.
          </>,
          <>
            Deliver <strong>checkout extensibility on non-Plus plans</strong> through the
            supported route: Shopify Functions distributed via the public app (discount, cart
            and checkout validation, delivery and payment customization, cart transform), plus
            app blocks on the Thank You and Order Status pages.
          </>,
          <>
            Leading the Thank You / Order Status upgrade ahead of the 26 Aug 2026 non-Plus
            deadline — audited legacy checkout scripts and rebuilt the behaviour as app blocks
            and Functions.
          </>,
          <>
            Build <strong>LLM automation pipelines</strong> in Node.js against the Admin API for
            inventory sync, order reporting and catalog enrichment, removing roughly 15 hours of
            manual operations per week.
          </>,
        ],
      },
      {
        company: "The Diamond Port",
        timeframe: "Apr 2025 – Mar 2026",
        role: "Full Stack Shopify Developer",
        achievements: [
          <>
            Built and launched the five-store estate, each store with a distinct custom theme
            built with the Shopify CLI — sections, blocks, JSON templates and theme app
            extensions.
          </>,
          <>
            Chose separate stores over a single multi-market store because each market carries
            its own legal entity, inventory and merchandising team; offset the duplicated theme
            deploys with a shared section library and one analytics layer across the estate.
          </>,
          <>
            Executed <strong>platform migrations onto Shopify</strong> from Magento, WooCommerce
            and BigCommerce — catalog, customer and order data mapping, metafield modelling, URL
            and 301 redirect strategy, and post-launch QA.
          </>,
          <>
            Built <strong>thediamondport.com</strong>, a multi-supplier B2B/B2C marketplace in
            Next.js and Tailwind aggregating 2,000+ SKUs from supplier API feeds, with
            white-label iframe embeds, operating across six countries.
          </>,
          <>
            Started the 3D commerce track — Three.js and React Three Fiber configurators and
            GLTF/GLB asset pipelines.
          </>,
        ],
      },
      {
        company: "The Diamond Port",
        timeframe: "Apr 2024 – Mar 2025",
        role: "Frontend Engineer (React & Vue)",
        achievements: [
          <>
            Built the ring configurator that shipped to <strong>two public marketplaces</strong> —
            published on the Shopify App Store in July 2024 and on WordPress.org with WooCommerce
            integration — and have owned every release since.
          </>,
          <>
            Built the shared component library adopted as the company UI standard, cutting
            average feature build time by roughly <strong>30%</strong> across concurrent projects.
          </>,
          <>
            Shipped production React, Vue.js and ES6+ interfaces across international markets,
            owning responsive behaviour and cross-browser QA.
          </>,
          <>
            Drove Core Web Vitals work — code splitting, lazy loading, asset strategy — and
            applied WCAG accessibility practices across all UI work.
          </>,
          <>
            Delivered scroll-driven motion across production sites: GSAP with ScrollTrigger on
            radiantsunenergy.com, and AOS with custom scroll-reveal systems on thechiku.in and
            eye.hi-labsolution.org.
          </>,
        ],
      },
      {
        company: "The Diamond Port",
        timeframe: "Oct 2023 – Mar 2024",
        role: "React.js Intern",
        achievements: [
          <>
            Shipped production React components and REST API integrations into live storefronts
            within the first month, working in a Git pull-request and code-review workflow.
          </>,
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Parul University, Vadodara",
        description: (
          <>
            Master of Computer Applications (MCA) — Artificial Intelligence & Machine Learning.
            Jun 2024 – May 2026. Grade A. Completed while working full time as a software
            engineer.
          </>
        ),
      },
      {
        name: "Veer Narmad South Gujarat University (VNSGU), Surat",
        description: (
          <>
            Bachelor of Computer Applications (BCA) — Web Development. Jun 2021 – Apr 2024.
            Grade A · Top 10 in Class.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Shopify",
        description:
          "Liquid themes (sections, blocks, JSON templates, theme app extensions), Shopify CLI, custom app development (Remix, Node.js, React, App Bridge, Polaris, OAuth and session storage), Shopify Functions, checkout extensibility, Admin API, Storefront API, GraphQL, webhooks, metafields, multi-store operations.",
      },
      {
        title: "Migrations & Audits",
        description:
          "Magento, WooCommerce and BigCommerce to Shopify — catalog, customer and order data mapping, metafield modelling, URL and 301 redirect strategy, launch QA. Technical audits of inherited themes and apps, plus technical documentation and handover runbooks.",
      },
      {
        title: "3D, AR & WebGL",
        description:
          "Three.js, React Three Fiber, WebGL, GLTF/GLB pipelines and CAD ingestion (3DM, STL, OBJ, FBX, DAE, PLY), PBR materials, physically-based lighting, refraction and dispersion, 4K and turntable render export, browser AR try-on with camera tracking.",
      },
      {
        title: "Frontend",
        description:
          "JavaScript (ES6+), TypeScript, React, Next.js, Vue.js, HTML5, CSS/SCSS, Tailwind CSS. GSAP with ScrollTrigger, AOS and custom scroll-reveal systems. Core Web Vitals, WCAG accessibility, cross-browser QA.",
      },
      {
        title: "Backend & APIs",
        description:
          "Node.js, Express, GraphQL, REST, MongoDB, MySQL, webhooks, OpenAPI specifications and typed SDKs.",
      },
      {
        title: "AI & Automation",
        description:
          "LLM automation pipelines in Node.js over the Shopify Admin API — inventory sync, order reporting and catalog enrichment.",
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Notes on Shopify, 3D commerce and shipping software",
  description: `Technical write-ups and build logs from ${person.name}.`,
};

const work = {
  label: "Work",
  title: "Case Studies",
  description: `Production Shopify builds, published marketplace apps, 3D/AR product experiences and commerce automation by ${person.name}.`,
};

const gallery = {
  label: "Projects",
  title: "Project Gallery",
  description: `Live production work by ${person.name} — every link goes to a running site.`,
  images: [
    {
      src: "/images/gallery/10.png",
      alt: "Diamond Engagement RingBuilder — published Shopify App Store app",
      orientation: "horizontal",
      href: "https://apps.shopify.com/tdp-ring-builder",
    },
    {
      src: "/images/gallery/11.png",
      alt: "TDP Ring Builder — published WordPress.org plugin with WooCommerce integration",
      orientation: "horizontal",
      href: "https://wordpress.org/plugins/tdp-ring-builder/",
    },
    {
      src: "/images/gallery/1.png",
      alt: "The Diamond Port — B2B/B2C diamond marketplace, Next.js and Tailwind, 2,000+ SKUs",
      orientation: "horizontal",
      href: "https://thediamondport.com",
    },
    {
      src: "/images/gallery/4.png",
      alt: "The Diamond Port — merchant onboarding and account flow",
      orientation: "horizontal",
      href: "https://thediamondport.com",
    },
    {
      src: "/images/gallery/15.png",
      alt: "i3dStudio — CAD-to-web 3D product viewer with AR try-on, built in Three.js and React Three Fiber",
      orientation: "horizontal",
      href: "https://i3dstudio.vercel.app",
    },
    {
      src: "/images/gallery/2.png",
      alt: "Rings of Australia — Shopify storefront, custom Liquid theme, AUD",
      orientation: "horizontal",
      href: "https://ringsofaustralia.com.au",
    },
    {
      src: "/images/gallery/19.png",
      alt: "Rings of UK — Shopify storefront, custom Liquid theme, GBP",
      orientation: "horizontal",
      href: "https://ringsofuk.com",
    },
    {
      src: "/images/gallery/20.png",
      alt: "Rings of Germany — Shopify storefront, custom Liquid theme, EUR",
      orientation: "horizontal",
      href: "https://ringsofgermany.com",
    },
    {
      src: "/images/gallery/5.png",
      alt: "Precious Carbon — Shopify storefront, custom Liquid theme, USD",
      orientation: "horizontal",
      href: "https://www.preciouscarbon.com",
    },
    {
      src: "/images/gallery/6.png",
      alt: "Premexa — Shopify storefront, custom theme, INR",
      orientation: "horizontal",
      href: "https://premexa.in",
    },
    {
      src: "/images/gallery/7.png",
      alt: "Moimoi — colour lab grown diamonds, WordPress build",
      orientation: "horizontal",
      href: "https://www.moimoi.com.au/colour-lab-grown-diamonds",
    },
    {
      src: "/images/gallery/18.png",
      alt: "Radiant Sun Energy — scroll-driven motion built with GSAP and ScrollTrigger",
      orientation: "horizontal",
      href: "https://www.radiantsunenergy.com",
    },
    {
      src: "/images/gallery/17.png",
      alt: "The Chiku Orchard — event venue site with scroll-reveal animation",
      orientation: "horizontal",
      href: "https://thechiku.in",
    },
    {
      src: "/images/gallery/16.png",
      alt: "Hi-Lab Eye Hospital — healthcare site with scroll-driven motion",
      orientation: "horizontal",
      href: "https://eye.hi-labsolution.org",
    },
  ],
};

// ---------------------------------------------------------------------------
// Every href above was checked live and returns HTTP 200. Screenshots 15-20
// were captured headlessly at 1600x900 and cropped to 1600x730.
//
// Removed on purpose — do NOT restore without re-checking first:
//   velardiamonds.com      HTTP 402 — Shopify store frozen / unpaid
//   worldwidestocklot.com  offline, connection refused
//   vaidehirayon.com       offline, connection refused
//
// Re-verify the whole list before any interview or application. A dead link in
// a portfolio costs more than a missing one.
// ---------------------------------------------------------------------------

export { person, social, newsletter, home, about, blog, work, gallery };
