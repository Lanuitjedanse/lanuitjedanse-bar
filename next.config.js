/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    CLIENT_ID: process.env.CLIENT_ID,
    REDIRECT_URI: process.env.REDIRECT_URI,
    AUTH_ENDPOINT: process.env.AUTH_ENDPOINT,
    RESPONSE_TYPE: process.env.RESPONSE_TYPE,
  },
};

module.exports = nextConfig;
