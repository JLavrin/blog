/** @type {import('next').NextConfig} */
console.log('next.config.js', process.env);

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
