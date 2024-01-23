/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // IMAGE CONFIG
  images: {
    domains: ["https://www.onlinekhabar.com"],
    unoptimized: true,
    // loader: "custom",
    // loaderFile: "./constants/methods/cloudinaryLoader.ts",
  },
}

module.exports = nextConfig
