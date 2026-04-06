/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: isStaticExport,
  },
};

if (isStaticExport) {
  nextConfig.output = "export";
}

export default nextConfig;