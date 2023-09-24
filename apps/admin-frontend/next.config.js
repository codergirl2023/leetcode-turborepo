/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages:["ui","trpc","db","types","store"]
}

module.exports = nextConfig