import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 本番環境のセキュリティヘッダー
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'microphone=(self)',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // 画像最適化
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // 本番ビルドの最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // スタンドアロンモード（Dockerデプロイ時に有用）
  output: 'standalone',
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/.*\.vercel-storage\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'vercel-blob-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30日
        },
      },
    },
    {
      urlPattern: /^https?:\/\/.*/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'https-cache',
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7日
        },
      },
    },
  ],
})(nextConfig);