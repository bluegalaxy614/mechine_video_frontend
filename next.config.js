/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'repairingvideobucket.s3.ap-northeast-1.amazonaws.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
