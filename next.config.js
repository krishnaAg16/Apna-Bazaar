/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'tailwindui.com',
      //   port: '',
      //   pathname: '/img/ecommerce-images/**',
      // },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**', 
      },
    ],
  },}

module.exports = nextConfig
