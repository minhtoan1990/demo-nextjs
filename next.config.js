/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['platform-lookaside.fbsbx.com', 'avatars.githubusercontent.com'],
    },
    env: {
      BACKEND_URL: process.env.BACKEND_URL,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      AWS_S3_ENDPOINT: process.env.AWS_S3_ENDPOINT,
      GITHUB_ID: process.env.GITHUB_ID,
      GITHUB_SECRET: process.env.GITHUB_SECRET,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    },
}

module.exports = nextConfig
