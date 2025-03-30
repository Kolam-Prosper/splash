/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/launch-app",
        destination: "/dapp",
        permanent: false,
      },
    ]
  },
}

export default nextConfig

