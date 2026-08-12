import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ayush",
  lastName: "Varma",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer · Commerce Platforms & Distributed Systems · Node.js, React & GraphQL",
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
      Notes on commerce architecture, API design, and building 3D product
      experiences for the web.
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
  title: `${person.name} — Software Engineer · Commerce Platforms & Distributed Systems`,
  description: `Software engineer with 3 years building production commerce systems: a multi-tenant platform across 5 markets and 5 currencies, a headless React + GraphQL layer, a published marketplace app, and 3D/AR product experiences in Three.js.`,
  headline: <>I build commerce systems that run in five countries</>,
  subline: (
    <>
      I'm {person.firstName}, a software engineer at The Diamond Port — promoted through four
      roles in 3 years and now leading a small engineering team. I architected a multi-tenant
      platform serving 5 international markets across 5 currencies, designed the headless
      React + GraphQL layer behind it, and shipped a product to two independent public
      marketplaces. Lately: LLM automation over commerce APIs, and photoreal 3D product
      viewers with browser AR.
    </>
  ),
  seo: {
    title: "Ayush Varma — Software Engineer · Commerce Platforms, Distributed Systems & AI",
    description:
      "Software engineer: multi-tenant commerce architecture, API design in REST and GraphQL, headless storefronts in React and Next.js, Node.js backends, LLM automation pipelines, and 3D/AR commerce with Three.js and React Three Fiber.",
    keywords: [
      "Ayush Varma",
      "software engineer",
      "full stack engineer",
      "backend engineer",
      "Node.js developer",
      "React developer",
      "Next.js engineer",
      "GraphQL",
      "TypeScript",
      "system design",
      "distributed systems",
      "API design",
      "multi-tenant architecture",
      "headless commerce",
      "eCommerce engineer",
      "LLM automation",
      "Shopify app developer",
      "Shopify Functions",
      "checkout extensibility",
      "Three.js developer",
      "React Three Fiber",
      "3D web developer",
      "AR try-on developer",
      "WebGL engineer",
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
      "I'm Ayush Varma, a software engineer with 3 years at The Diamond Port, promoted through four roles from React intern to Senior Engineer, and now leading a small engineering team. I architected a multi-tenant commerce platform across 5 markets and 5 currencies, designed a headless React + GraphQL layer, built a multi-supplier B2B aggregation platform over 2,000+ SKUs, and ship 3D product experiences with Three.js and React Three Fiber.",
    description: (
      <>
        I'm {person.name}, a software engineer with 3 years at a single employer — promoted
        through four roles, from React intern to Senior Engineer, and now leading a small
        engineering team across our commerce, AI and 3D tracks. I design and ship end to end,
        from data model to deployed UI.
        <br /><br />
        The core of my work is a <strong>multi-tenant commerce platform</strong> serving 5
        international markets across 5 currencies, each with independent catalog, pricing, tax
        and fulfilment configuration, unified behind a shared component library and a single
        analytics layer. On top of it I designed a headless React + Storefront API + GraphQL
        layer that decoupled the frontend from platform theme constraints, and built a
        multi-supplier B2B aggregation platform in Next.js over a 2,000+ SKU catalog ingested
        from heterogeneous supplier APIs across six countries.
        <br /><br />
        I also own a product shipped to two independent public marketplaces — a ring
        configurator live on the Shopify App Store since July 2024 and on the WordPress.org
        plugin directory. I took it through platform review and have owned every release since.
        <br /><br />
        Since 2025 I've been building 3D for the web — Three.js and React Three Fiber viewers
        that turn raw CAD files into photoreal, configurable products, with browser AR try-on.
        That work became <InlineCode>i3dStudio</InlineCode>.
        <br /><br />
        What I care about most is the decision behind the code. Choosing five separate stores
        over one multi-market instance, moving checkout logic into sandboxed serverless
        functions instead of legacy scripts, factoring a shared section library to offset
        duplicated deploys — those calls mattered more than any individual feature I shipped.
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
        role: "Senior Engineer, Commerce Platform & AI",
        achievements: [
          <>
            <strong>Lead a small engineering team</strong> across the commerce, AI and 3D tracks —
            setting technical direction and architecture, running code review, defining release
            and QA standards, and onboarding and mentoring engineers into the codebase.
          </>,
          <>
            Architected and operate a <strong>multi-tenant commerce platform</strong> serving 5
            international markets (AU, UK, DE, US, IN) across 5 currencies — each with
            independent catalog, pricing, tax and fulfilment configuration, unified behind a
            shared component library and a single analytics layer.
          </>,
          <>
            Designed and shipped <strong>LLM-based automation services</strong> in Node.js over
            the GraphQL Admin API for inventory synchronisation, order reporting and catalog
            enrichment across all 5 storefronts — eliminating roughly 780 engineer-hours per
            year of manual operations.
          </>,
          <>
            Own a <strong>publicly distributed commerce application</strong> end to end — Remix,
            Node.js and React with App Bridge, Polaris, OAuth and session storage, backed by
            Admin GraphQL and webhook-driven event handling — architecture, release, monitoring
            and support across two years in market.
          </>,
          <>
            Delivered <strong>server-side checkout customisation</strong> through sandboxed
            serverless functions distributed via the app: discount logic, cart and checkout
            validation, delivery and payment customisation, and cart transformation.
          </>,
          <>
            Led a <strong>vendor-deadline platform migration</strong> ahead of the 26 Aug 2026
            cutoff — audited legacy checkout scripts across the estate, mapped each behaviour to
            a supported extension point, and rebuilt them with zero customer-facing regression.
          </>,
        ],
      },
      {
        company: "The Diamond Port",
        timeframe: "Apr 2025 – Mar 2026",
        role: "Full Stack Developer — International Commerce",
        achievements: [
          <>
            Built and launched the <strong>5-market storefront estate</strong> from scratch —
            ringsofaustralia.com.au (AUD), ringsofuk.com (GBP), ringsofgermany.com (EUR),
            preciouscarbon.com (USD) and premexa.in (INR).
          </>,
          <>
            Chose separate stores over a single multi-market instance because each market carries
            its own legal entity, inventory and merchandising team; offset the duplicated deploys
            with a shared section library and one analytics layer across the estate.
          </>,
          <>
            Designed a <strong>headless commerce architecture</strong> (React + Storefront API +
            GraphQL) decoupling the frontend from theme constraints — cutting frontend delivery
            time roughly 3x versus traditional theme development.
          </>,
          <>
            Built <strong>thediamondport.com</strong>, a multi-supplier B2B/B2C aggregation
            platform in Next.js and Tailwind over a 2,000+ SKU catalog ingested from
            heterogeneous supplier APIs across six countries — schema normalisation, caching,
            multi-currency pricing, markup rules and white-label iframe embeds. Replaced a fully
            manual ordering process and cut order processing time by roughly 70%.
          </>,
          <>
            Executed <strong>platform migrations</strong> from Magento, WooCommerce and
            BigCommerce — catalog, customer and order data mapping, metafield modelling, URL and
            301 redirect strategy, and post-launch QA.
          </>,
          <>
            Integrated <strong>10+ third-party payment, logistics and analytics services</strong>{" "}
            into a single unified data layer via REST and GraphQL with webhook-driven state
            reconciliation.
          </>,
          <>
            Started and led the 3D commerce track — Three.js and React Three Fiber configurators
            and GLTF/GLB asset pipelines — which became i3dStudio.
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
            published on the Shopify App Store in July 2024 at $1,499 one-time, rated 5.0 out of
            5, and on WordPress.org with WooCommerce integration — and have owned every release
            since.
          </>,
          <>
            Built the shared component library adopted as the company UI standard, cutting
            average feature build time by roughly <strong>30%</strong> across concurrent projects.
          </>,
          <>
            Shipped production React, Vue.js and ES6+ interfaces from Figma across international
            markets, owning responsive behaviour and cross-browser QA.
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
            Jun 2024 – May 2026. Grade A. Coursework: data structures and algorithms,
            distributed systems, DBMS, operating systems, machine learning. Completed while
            working full time as a software engineer.
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
        title: "Systems & Architecture",
        description:
          "Multi-tenant architecture, API design in REST and GraphQL, event-driven integration via webhooks, data modelling and schema normalisation, caching, third-party service integration, platform migration, performance optimisation. Architecture decision-making, technical documentation and handover runbooks.",
      },
      {
        title: "Backend & APIs",
        description:
          "Node.js, Express, GraphQL, REST, MongoDB, MySQL, webhooks, OAuth and session management, OpenAPI specifications and typed SDKs.",
      },
      {
        title: "Frontend",
        description:
          "JavaScript (ES6+), TypeScript, React, Next.js, Vue.js, HTML5, CSS/SCSS, Tailwind CSS. GSAP with ScrollTrigger, AOS and custom scroll-reveal systems. Core Web Vitals, WCAG accessibility, cross-browser QA, Figma-to-production.",
      },
      {
        title: "AI & Automation",
        description:
          "LLM API integration and prompt pipelines in Node.js over commerce GraphQL APIs — inventory sync, order reporting, catalog enrichment and recommendation systems, running unattended across five storefronts.",
      },
      {
        title: "3D, AR & WebGL",
        description:
          "Three.js, React Three Fiber, WebGL, GLTF/GLB pipelines and CAD ingestion (3DM, STL, OBJ, FBX, DAE, PLY), PBR materials, physically-based lighting, refraction and dispersion, 4K and turntable render export, browser AR try-on with camera tracking.",
      },
      {
        title: "Commerce Platform",
        description:
          "Headless commerce (React + Storefront API + GraphQL), Shopify Hydrogen, Admin API, Shopify Functions and checkout extensibility, custom app development (Remix, Node.js, React, App Bridge, Polaris), Liquid themes and the Shopify CLI, metafield modelling, multi-store operations.",
      },
      {
        title: "Migrations & Audits",
        description:
          "Magento, WooCommerce and BigCommerce to Shopify — catalog, customer and order data mapping, metafield modelling, URL and 301 redirect strategy, launch QA. Technical audits of inherited themes and apps.",
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Notes on commerce architecture, 3D on the web, and shipping software",
  description: `Technical write-ups and build logs from ${person.name}.`,
};

const work = {
  label: "Work",
  title: "Case Studies",
  description: `Production commerce platforms, published marketplace apps, 3D/AR product experiences and automation systems built by ${person.name}.`,
};

const gallery = {
  label: "Projects",
  title: "Project Gallery",
  description: `Live production work by ${person.name} — every link goes to a running site.`,
  images: [
    {
      src: "/images/gallery/10.png",
      alt: "Diamond Engagement RingBuilder — published Shopify App Store app, Remix and Node.js",
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
      alt: "The Diamond Port — multi-supplier B2B/B2C aggregation platform, Next.js, 2,000+ SKUs across six countries",
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
      alt: "i3dStudio — CAD-to-web 3D product viewer with browser AR try-on, Three.js and React Three Fiber",
      orientation: "horizontal",
      href: "https://i3dstudio.vercel.app",
    },
    {
      src: "/images/gallery/2.png",
      alt: "Rings of Australia — multi-tenant storefront, AUD market",
      orientation: "horizontal",
      href: "https://ringsofaustralia.com.au",
    },
    {
      src: "/images/gallery/19.png",
      alt: "Rings of UK — multi-tenant storefront, GBP market",
      orientation: "horizontal",
      href: "https://ringsofuk.com",
    },
    {
      src: "/images/gallery/20.png",
      alt: "Rings of Germany — multi-tenant storefront, EUR market",
      orientation: "horizontal",
      href: "https://ringsofgermany.com",
    },
    {
      src: "/images/gallery/5.png",
      alt: "Precious Carbon — multi-tenant storefront, USD market",
      orientation: "horizontal",
      href: "https://www.preciouscarbon.com",
    },
    {
      src: "/images/gallery/6.png",
      alt: "Premexa — multi-tenant storefront, INR market",
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