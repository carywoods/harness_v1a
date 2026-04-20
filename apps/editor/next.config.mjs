/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@harness/ui", "@harness/db", "@harness/ai"],
};

export default nextConfig;
