// Full origin, scheme included, NO trailing slash.
// Always build URLs via absoluteUrl()/ogUrl() from "@/app/utils/url" —
// never interpolate this into a `https://${baseURL}` template.
const baseURL = "https://theayushvarma.vercel.app";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/project": true,
  "/resume": true,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {};

// Theme: moved off the stock Once UI demo palette (emerald brand + orange accent
// + playful radii), which is instantly recognisable as an unmodified template.
// Slate + cyan -> indigo is cold and instrument-like: it reads "real-time
// graphics" rather than "SaaS marketing site", and cyan through to indigo is
// what light actually does through a stone — the diamond story stated in the
// design rather than only in the copy.
const style = {
  theme: "dark",          // dark | light
  neutral: "slate",       // sand | gray | slate
  brand: "cyan",          // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "indigo",       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast",      // color | contrast
  solidStyle: "flat",     // flat | plastic
  border: "conservative", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all",      // all | micro | macro
};

const effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 75,
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: 2,
    color: "brand-on-background-weak",
    opacity: 20,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
};

const display = {
  location: true,
  time: true,
};

const mailchimp = {
  // Empty until a real endpoint exists. Paste the `action` attribute from a
  // Mailchimp embedded-form snippet (or a Buttondown/ConvertKit form URL) here,
  // then set newsletter.display = true in content.js.
  // The previous value was a placeholder that made the form error on submit.
  action: "",
  effects: {
    mask: {
      cursor: false,
      x: 100,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      x: 100,
      y: 50,
      width: 100,
      height: 100,
      tilt: -45,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
      opacity: 100,
    },
    dots: {
      display: false,
      size: 24,
      color: "brand-on-background-weak",
      opacity: 100,
    },
    lines: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
    grid: {
      display: true,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
  },
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };