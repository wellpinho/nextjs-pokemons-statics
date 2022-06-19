/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // permitir imagens do site confiável
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
