/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/nateify",
    output: "export",
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;