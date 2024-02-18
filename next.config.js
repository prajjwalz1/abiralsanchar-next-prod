/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // env: {
  //   // Set different API base URLs for development and production
  //   NEWS_PORTAL_BASE_URL: process.env.NEXT_PUBLIC_MODE === 'production'
  //     ? 'https://www.abiralsanchar.com' :
  //     process.env.NEXT_PUBLIC_MODE === 'netlify' ? 'https://news-udip.netlify.com'
  //       : 'https://localhost:3000',
  // },

  // IMAGE CONFIG
  images: {
    domains: ["https://www.onlinekhabar.com"],
    deviceSizes: [320, 420, 768, 1024, 1200],
    unoptimized: true,
    loader: "custom",
    loaderFile: "./src/utils/loaders/cloudinaryLoader.ts",
  },
}

module.exports = nextConfig
