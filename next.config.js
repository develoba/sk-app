// next.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dvbw6k2veuonh.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx"], // asegúrate de que coincidan con tus archivos
  output: "standalone", // para vercel
};

module.exports = withPWA(nextConfig);
