/** @type {import('next').NextConfig} */
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '/',
  images: {
    domains: isProd ? ['https://www.lhome.co.in'] : ['localhost'],
    unoptimized: isProd,
  },
  distDir: 'dist',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: isProd ? 'export' : undefined,
  assetPrefix: isProd ? 'https://www.lhome.co.in' : undefined,
  trailingSlash: true,
};

module.exports = nextConfig;
