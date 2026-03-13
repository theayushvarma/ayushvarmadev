import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
   eslint: {
    ignoreDuringBuilds: true,  // ← add this line
  },

};

export default withMDX(nextConfig);
