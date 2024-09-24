// next.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
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
  experimental: {
    appDir: true, // Si usas la carpeta `app`
  },
  pageExtensions: ["ts", "tsx", "js", "jsx"], // asegúrate de que coincidan con tus archivos
  output: "standalone", // para vercel
};

module.exports = withPWA(nextConfig);
