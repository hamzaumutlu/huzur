/** @type {import('next').NextConfig} */
const nextConfig = {
    // Ensure images are handled correctly
    images: {
        remotePatterns: [],
        unoptimized: true, // Temporarily disable optimization to debug 404s
    },
};

export default nextConfig;
