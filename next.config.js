/** @type {import('next').NextConfig} */
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: isProd ? ['www.lhome.co.in'] : ['localhost'],
    unoptimized: isProd,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: 'export',            // ✅ Keep this
  trailingSlash: true,
};

module.exports = nextConfig;

