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
        ],
      },
    ];
  },
  // 画像最適化
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;