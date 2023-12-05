/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    nextConfig,
    images: {
      domains: ['openweathermap.org', 'cdn-icons-png.flaticon.com'],
    },
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        // Other plugins if needed
      }
};
  