/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  i18n: {
    defaultLocale: 'en',
		locales: ['en', 'ru', 'ka']
  },
  images: {
    domains: ['assets.coingecko.com', 'localhost'],
  },
};

module.exports = nextConfig;
