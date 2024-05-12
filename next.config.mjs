/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xsgames.co',
      },
      {
        protocol: 'https',
        hostname: 'source.boringavatars.com',
      },
    ],
    dangerouslyAllowSVG: true,
    unoptimized: true,
    
  },
  typescript: {
    ignoreBuildErrors: true,
    
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;