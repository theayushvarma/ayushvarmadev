import { InlineCode } from "@/once-ui/components";

// Portfolio configuration for Ayush Varma
// Tone: Balanced mix (Professional + creative)
// SEO-ready: titles, descriptions, and structured fields included

const person = {
  firstName: "Ayush",
  lastName: "Varma",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Shopify Theme & App Developer | MERN Full-Stack Engineer | AI in eCommerce (PhD Aspirant)",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Surat, Gujarat, India
  languages: ["English", "Hindi", "Gujarati"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally share case studies, Shopify tips, MERN tutorials, and research notes on
      AI for eCommerce.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ayushvarmadev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ayushvarmadev/",
  },
  {
    name: "Portfolio",
    icon: "website",
    link: "https://ayushvarmadev.vercel.app",
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
  description: `Portfolio showcasing ${person.name}'s work as a Shopify & Full-Stack developer (MERN) and AI-in-eCommerce researcher.`,
  headline: <>Shopify Theme & App Developer</>,
  subline: (
    <>
      I'm {person.name}, a Shopify & Full-Stack Developer building high-converting stores,
      custom apps, and AI-driven eCommerce tooling. I combine deep Shopify knowledge (Liquid,
      Polaris, Storefront/Admin GraphQL) with React/Next.js and scalable Node.js backends to
      solve complex problems simply.
    </>
  ),
  seo: {
    title: "Ayush Varma — Shopify Theme & App Developer | MERN & AI",
    description:
      "Ayush Varma — Shopify developer specializing in themes, apps, headless stores, and AI-driven eCommerce solutions. Portfolio, projects and contact.",
    keywords: ["Ayush Varma", "Shopify developer", "Shopify app developer", "MERN", "AI eCommerce"],
  },
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet ${person.name}, ${person.role} from Surat, Gujarat, India`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: true, link: "tel:+918732953410" },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm {person.name}, a Shopify-focused Full-Stack Developer with 2+ years of practical experience building
        scalable eCommerce solutions. My work spans advanced Shopify theme customization, private & public Shopify
        apps, headless storefronts with React/Next.js, and automation tooling using the MERN stack. After completing
        my MCA, I plan to pursue a PhD in Artificial Intelligence applied to eCommerce automation and personalization.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "The Diamond Port",
        timeframe: "Apr 2025 - Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            MERN & Shopify developer working on high-performance websites, SaaS products and custom Shopify solutions.
          </>,
          <>
            Built tools and integrations using React, Next.js, Vue.js, Node.js, Express, MongoDB, MySQL, Firebase and Shopify Liquid.
          </>,
          <>
            Focus areas: headless commerce, app automation, performance optimization, and GraphQL integrations.
          </>,
        ],
      },
      {
        company: "The Diamond Port",
        timeframe: "Apr 2024 - Mar 2025",
        role: "Frontend Web Developer",
        achievements: [
          <>
            Led front-end work for The Diamond Port website and multiple client stores using React, Vue, Sass and animation libraries.
          </>,
          <>
            Implemented accessible, responsive UIs and collaborated closely with design & backend teams to deliver polished products.
          </>,
        ],
      },
      {
        company: "The Diamond Port",
        timeframe: "Oct 2023 - Mar 2024",
        role: "React.js Intern",
        achievements: [
          <>
            Contributed to dynamic and responsive web applications, improving user interactions and frontend architecture.
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
        description: <>Master of Computer Applications (MCA) — Computer & Information Sciences (Jun 2024 - May 2026)</>,
      },
      {
        name: "Veer Narmad South Gujarat University (VNSGU), Surat",
        description: <>Bachelor's degree, Computer Software Engineering (Jun 2021 - Apr 2024) — Grade: A</>,
      },
    ],
    phdPlan: {
      display: true,
      note:
        "Planning to pursue a PhD in Artificial Intelligence applied to eCommerce Automation and Personalization after MCA.",
    },
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Shopify Theme & App Development",
        description:
          "Advanced customization (Liquid), Polaris components, Storefront/Admin GraphQL, private & public app architecture.",
      },
      {
        title: "MERN Stack & Headless Commerce",
        description: "React, Next.js, Node.js, Express, MongoDB — building headless stores and APIs.",
      },
      {
        title: "AI / Automation",
        description: "Python automation, exploring ML/AI for recommendations, personalization, and chatbots in eCommerce.",
      },
      {
        title: "Frontend & Animations",
        description: "GSAP, AOS, Tailwind CSS, Bootstrap — accessible, animated, responsive UIs.",
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about Shopify, MERN, and AI-in-eCommerce",
  description: `Read technical posts and research notes by ${person.name}`,
};

const work = {
  label: "Work",
  title: "Projects & Case Studies",
  description: `Selected Shopify and web development projects by ${person.name}.`,
};

const gallery = {
  label: "Projects",
  title: "Project Gallery",
  description: `A curated gallery of professional work by ${person.name}.`,
  images: [
    { src: "/images/gallery/1.png", alt: "The Diamond Port", orientation: "horizontal", href: "https://thediamondport.com" },
    { src: "/images/gallery/2.png", alt: "Rings of Australia", orientation: "horizontal", href: "https://ringsofaustralia.com.au" },
    { src: "/images/gallery/5.png", alt: "Precious Carbon", orientation: "horizontal", href: "https://www.preciouscarbon.com" },
    { src: "/images/gallery/6.png", alt: "Premexa", orientation: "horizontal", href: "https://premexa.in" },
    { src: "/images/gallery/7.png", alt: "Moimoi - Colour Lab Grown Diamonds", orientation: "horizontal", href: "https://www.moimoi.com.au/colour-lab-grown-diamonds" },
    { src: "/images/gallery/8.png", alt: "World Wide Stock Lot", orientation: "horizontal", href: "https://worldwidestocklot.com" },
    { src: "/images/gallery/9.png", alt: "Vaidehi Rayon", orientation: "horizontal", href: "https://vaidehirayon.com" },
    { src: "/images/gallery/10.png", alt: "TDP Ring Builder (Shopify)", orientation: "horizontal", href: "https://apps.shopify.com/tdp-ring-builder" },
    { src: "/images/gallery/14.png", alt: "Velar Diamonds", orientation: "horizontal", href: "https://velardiamonds.com" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
