const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/the-movement",
        permanent: true
      },
      {
        source: "/how-it-works",
        destination: "/for-merchants",
        permanent: true
      },
      {
        source: "/our-impact",
        destination: "/impact",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
