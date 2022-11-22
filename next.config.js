/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  redirects: async () => [
    {
      source: '/index.html',
      destination: '/startseite/index.html',
      permanent: true,
    },
  ]
}

module.exports = nextConfig
