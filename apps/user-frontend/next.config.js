/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui","store","types","db"],
}

module.exports = nextConfig
