/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    allowedDevOrigins: ["wails.localhost"],
    compress: false,
}

module.exports = nextConfig