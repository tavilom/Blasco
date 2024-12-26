/** @type {import('next').NextConfig} */
const nextConfig = {
  module.exports = {
  assetPrefix: './',
  basePath: '/Blasco',
  trailingSlash: true,
  output: "export",  // <=== habilita o export estático
  reactStrictMode: true,
}
};

export default nextConfig;
