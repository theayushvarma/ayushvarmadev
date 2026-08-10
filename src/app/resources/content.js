import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ayush",
  lastName: "Varma",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer · React · Next.js · Shopify · Three.js/3D · AI Automation",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Surat, Gujarat, India
  languages: ["English", "Hindi", "Gujarati"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I share what I learn building AI-powered Shopify apps, 3D/AR-VR commerce
      experiences, automation tools, and full-stack systems - from inside the
      diamond and jewelry industry.
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
    name: "Portfolio",
    icon: "website",
    link: "https://theayushvarma.vercel.app",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:vayush798@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio showcasing ${person.name}'s work as a full-stack engineer specialising in Shopify, React, Next.js, 3D/AR-VR web experiences, and AI automation for eCommerce.`,
  headline: <>Full-Stack Engineer · Shopify · 3D/AR-VR · AI Automation</>,
  subline: (
    <>
      I'm {person.firstName}, a software engineer who builds production commerce systems
      at international scale. I've shipped 4 Shopify storefronts across Australia, Germany,
      UK, and USA - plus a full B2B marketplace, a 3D rendering / AR-VR try-on SaaS built
      with Three.js, and AI pipelines that eliminated 60%+ of manual operations work. I sit
      at a rare intersection: deep Shopify expertise, modern React/Next.js and Three.js/3D
      skills, and domain knowledge inside the diamond and jewelry industry almost no other
      developer has.
    </>
  ),
  seo: {
    title: "Ayush Varma - Software Engineer · Shopify · React · Next.js · Three.js · AI Automation",
    description:
      "Ayush Varma - Full-stack engineer specialising in Shopify development, React/Next.js, headless commerce, Three.js/3D & AR-VR experiences, and AI automation. Shipped 4 international storefronts. Open to remote roles.",
    keywords: [
      "Ayush Varma",
      "Shopify developer",
      "Shopify app developer",
      "React developer",
      "Next.js engineer",
      "full-stack developer",
      "Three.js developer",
      "3D web developer",
      "AR VR try-on developer",
      "AI automation",
      "headless commerce",
      "eCommerce engineer",
      "jewelry tech",
      "diamond industry software",
    ],
  },
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet ${person.name}, ${person.role} based in Surat, Gujarat, India`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: true, link: "tel:+918732953410" },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm {person.name}, a full-stack engineer with 2.5 years of production experience
        building international commerce systems. I design and ship end-to-end - from database
        schema to deployed UI - with a focus on performance, automation, and real business
        impact.
        <br /><br />
        I work inside the diamond and jewelry industry in Surat - the diamond capital of the
        world. This gives me a perspective on commerce problems that most developers simply
        don't have. I don't just build features. I solve the actual business problem.
        <br /><br />
        Alongside commerce systems, I build 3D and AR/VR product experiences with Three.js and
        React Three Fiber - photoreal rendering, virtual try-on, and interactive embeds -
        aimed at the jewelry and luxury retail space.
        <br /><br />
        Currently deepening: TypeScript, system design, distributed systems, and building
        AI-powered Shopify apps as a side project for the jewelry industry.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "The Diamond Port",
        timeframe: "Apr 2025 – Present",
        role: "Software Engineer - Full Stack",
        achievements: [
          <>
            Architected and shipped <strong>4 international Shopify storefronts</strong> from
            scratch (Australia, Germany, UK, USA) - custom Liquid themes, localised checkout,
            multi-currency payments, and 3rd-party API integrations.
          </>,
          <>
            Built the company's complete <strong>B2B marketplace in Next.js</strong> - wholesale
            ordering, 2,000+ SKU catalog, merchant portal, and multi-currency pricing across 3
            countries.
          </>,
          <>
            Implemented <strong>AI automation pipelines</strong> using Node.js + LLM APIs that
            eliminated ~15 hours/week of manual operations work across inventory, ordering, and
            reporting workflows.
          </>,
          <>
            Integrated Shopify APIs, custom metafields, GraphQL, and 10+ third-party services
            to deliver seamless headless commerce experiences.
          </>,
          <>
            <strong>Sole engineer</strong> - owned full product lifecycle from requirements →
            architecture → deployment → monitoring across all 4 storefronts.
          </>,
        ],
      },
      {
        company: "The Diamond Port",
        timeframe: "Apr 2024 – Mar 2025",
        role: "Frontend Web Developer",
        achievements: [
          <>
            Developed responsive, high-performance UIs using React.js, Vue.js, and Vanilla
            JavaScript across multiple client-facing web applications.
          </>,
          <>
            Built reusable UI component libraries - reduced feature development time by
            ~30% across projects.
          </>,
          <>
            Optimised Core Web Vitals and Lighthouse performance scores across all deployed
            Shopify and web properties.
          </>,
          <>
            Implemented animated, accessible interfaces using GSAP and AOS for premium jewelry
            brand experiences.
          </>,
        ],
      },
      {
        company: "The Diamond Port",
        timeframe: "Oct 2023 – Mar 2024",
        role: "React.js Developer Intern",
        achievements: [
          <>
            Built dynamic web interfaces using React.js in a live production codebase.
          </>,
          <>
            Developed reusable components and implemented responsive UI designs across multiple
            product pages.
          </>,
          <>
            Applied REST API integration, state management, and Git version control in a
            professional team setting.
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
            Master of Computer Applications (MCA) - AI/ML (Jun 2024 – May 2026). Pursuing
            full-time while working as a software engineer. Focus: advanced algorithms,
            distributed systems, AI/ML applications.
          </>
        ),
      },
      {
        name: "Veer Narmad South Gujarat University (VNSGU), Surat",
        description: (
          <>
            Bachelor of Computer Applications - Web Development (Jun 2021 – Apr 2024).
            Grade: A · Top 10 in Class.
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
        title: "Shopify Development",
        description:
          "Shopify Liquid, Storefront API, Admin API, Polaris, Checkout Extensions, private & public app development, headless commerce architecture.",
      },
      {
        title: "Frontend - React & Next.js",
        description:
          "React.js, Next.js, TypeScript, JavaScript (ES6+), Vue.js, HTML5, CSS3, Tailwind CSS - production-grade, accessible UIs.",
      },
      {
        title: "3D & AR/VR",
        description:
          "Three.js, React Three Fiber, WebGL, GSAP (ScrollTrigger, timeline animations), AOS, photoreal 3D product rendering, AR/VR virtual try-on, GLTF/GLB/CAD model pipelines.",
      },
      {
        title: "Backend & APIs",
        description:
          "Node.js, Express.js, GraphQL, REST APIs, MongoDB, MySQL, Firebase - scalable APIs and full-stack architectures.",
      },
      {
        title: "AI & Automation",
        description:
          "LLM integration (OpenAI API, Claude API), n8n, Make, Zapier, workflow automation, AI-powered product tools for eCommerce.",
      },
      {
        title: "Currently Learning",
        description:
          "TypeScript (deepening), system design, distributed systems, Docker, Jest/Cypress, CI/CD pipelines.",
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about Shopify, 3D/AR-VR, AI Automation, and Building in Public",
  description: `Technical posts, build logs, and lessons from ${person.name} - engineering inside the diamond and jewelry industry.`,
};

const work = {
  label: "Work",
  title: "Projects & Case Studies",
  description: `Production Shopify stores, full-stack apps, 3D/AR-VR experiences, and AI automation projects by ${person.name}.`,
};

const gallery = {
  label: "Projects",
  title: "Project Gallery",
  description: `A curated gallery of production work by ${person.name}.`,
  images: [
    {
      src: "/images/gallery/1.png",
      alt: "The Diamond Port - B2B Jewelry Marketplace",
      orientation: "horizontal",
      href: "https://thediamondport.com",
    },
    {
      src: "/images/gallery/2.png",
      alt: "Rings of Australia - International Shopify Storefront",
      orientation: "horizontal",
      href: "https://ringsofaustralia.com.au",
    },
    {
      src: "/images/gallery/10.png",
      alt: "TDP Ring Builder - Shopify App Store",
      orientation: "horizontal",
      href: "https://apps.shopify.com/tdp-ring-builder",
    },
    {
      src: "/images/gallery/5.png",
      alt: "Precious Carbon - Luxury Diamond eCommerce",
      orientation: "horizontal",
      href: "https://www.preciouscarbon.com",
    },
    {
      src: "/images/gallery/14.png",
      alt: "Velar Diamonds - Shopify Headless Store",
      orientation: "horizontal",
      href: "https://velardiamonds.com",
    },
    {
      src: "/images/gallery/7.png",
      alt: "Moimoi - Colour Lab Grown Diamonds",
      orientation: "horizontal",
      href: "https://www.moimoi.com.au/colour-lab-grown-diamonds",
    },
    {
      src: "/images/gallery/6.png",
      alt: "Premexa - Next.js eCommerce",
      orientation: "horizontal",
      href: "https://premexa.in",
    },
    {
      src: "/images/gallery/8.png",
      alt: "World Wide Stock Lot",
      orientation: "horizontal",
      href: "https://worldwidestocklot.com",
    },
    {
      src: "/images/gallery/9.png",
      alt: "Vaidehi Rayon",
      orientation: "horizontal",
      href: "https://vaidehirayon.com",
    },
    {
      src: "/images/gallery/15.png",
      alt: "i3dStudio - 3D Rendering & AR/VR Try-On SaaS (Three.js / React Three Fiber)",
      orientation: "horizontal",
      href: "https://i3dstudio.vercel.app",
    },
    {
      src: "/images/gallery/16.png",
      alt: "Hi-Lab Eye Hospital - GSAP Scroll & Motion Design",
      orientation: "horizontal",
      href: "https://eye.hi-labsolution.org",
    },
    {
      src: "/images/gallery/17.png",
      alt: "The Chiku Orchard - GSAP Scroll & Motion Design",
      orientation: "horizontal",
      href: "https://thechiku.in",
    },
    {
      src: "/images/gallery/18.png",
      alt: "Radiant Sun Energy - GSAP Scroll & Motion Design",
      orientation: "horizontal",
      href: "https://www.radiantsunenergy.com",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
