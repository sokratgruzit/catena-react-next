/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ['assets.coingecko.com', 'localhost'],
  },
})

module.exports = nextConfig
