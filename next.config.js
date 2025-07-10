import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(process.cwd());
    config.module.rules.push({
      test: /\.po/, // Make sure to handle `.po` files with lingui loader
      use: ["@lingui/loader"],
    });
    return config;
  },
  experimental: {
    swcPlugins: [
      [
        "@lingui/swc-plugin", // Fixed swc plugin with an empty object as the second argument
        {},
      ],
    ],
  },
};

export default nextConfig;
