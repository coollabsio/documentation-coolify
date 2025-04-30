import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX({
  baseUrl: '/docs', // set your base URL here
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Allow CORS for development purpose, only to test plausible analaytics
  allowedDevOrigins: ['*.shadowarcanist.pvt'],
  output: 'export',
  images: {
    unoptimized: true,
    
  },
  trailingSlash: true,
};

export default withMDX(config);
