/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "randomuser.me", protocol: "https", pathname: "**" }],
  },
};

module.exports = nextConfig;
