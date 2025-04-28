import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX({
  baseUrl: '/docs', // set your base URL here
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Allow CORS for development purpose, only to test plausible analaytics
  allowedDevOrigins: ['*.shadowarcanist.pvt'],
  output: 'export',
  images: {
    unoptimized: true,
    
  },
};

export default withMDX(config);
