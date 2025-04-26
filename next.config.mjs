import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX({
  baseUrl: '/docs', // set your base URL here
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
