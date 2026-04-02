/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true, // important for static export
  },

  output: 'export', // required for static hosting
};

export default nextConfig;