/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://coolify.io/docs', // Replace with your domain
  generateRobotsTxt: true,        // Generate a robots.txt along with your sitemap
  // Optional settings:
  changefreq: 'daily',
  priority: 0.7,
  outDir: 'out',
  // exclude: ['/secret-page'],
  // alternateRefs: [
  //   {
  //     href: 'https://example.com/en',
  //     hreflang: 'en',
  //   },
  // ],
};
