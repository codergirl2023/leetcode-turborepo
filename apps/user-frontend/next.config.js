/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "store", "types", "db", "trpc"],
  env: {
    PORT: process.env.PORT || 4000
  }
}

module.exports =
  nextConfig
