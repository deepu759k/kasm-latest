/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://deepu759k.github.io/kasm-latest/',
    contactUrl: 'https://github.com/deepu759k/kasm-latest/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-latest/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
