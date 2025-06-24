const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rawgit.com',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;