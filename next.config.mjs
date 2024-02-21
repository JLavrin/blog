/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
        port: '',
      }
    ]
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/blog',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
