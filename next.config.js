/** @type {import('next').NextConfig} */
const path = require("path");
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "/",
  images: {
    domains: isProd ? ["www.lhome.co.in"] : ["localhost"], // removed "https://" as it's not needed here
    unoptimized: isProd,
  },
  // distDir: "dist",
  sassOptions: { includePaths: [path.join(__dirname, "styles")] },

  // ❌ Removed output: 'export' so it can work with `next start`
  // ✅ Optional: keep assetPrefix only if you're hosting under subdirectory
  assetPrefix: isProd ? "https://www.lhome.co.in" : undefined,

  trailingSlash: true,
};

module.exports = nextConfig;
