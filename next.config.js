const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,

  // Netlify Forms用の設定
  async rewrites() {
    return [
      {
        source: '/:path*.html',
        destination: '/:path*',
      },
    ]
  },

  // ビルド出力の設定
  output: 'standalone',

  // 環境変数の設定
  env: {
    NEXT_PUBLIC_FORM_NAME: 'contact-form',
  }
}

module.exports = nextConfig