import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // webpack: function (config, options) {
  //   // if (!options.isServer) {
  //   // config.resolve.fallback.fs = false;
  //   // }
  //   // config.resolve.fallback = { fs: false, net: false, tls: false };
  //   config.resolve.fallback = {
  //     fs: false,
  //     stream: false,
  //     path: false,
  //     crypto: false,
  //     os: false,
  //   };
  //   console.log(config.experiments);
  //   config.experiments = {
  //     ...config.experiments,
  //     asyncWebAssembly: true,
  //     // layers: false,
  //     // layers: true, // Temporarily commented out
  //     // syncWebAssembly: true, // Temporarily commented out
  //     topLevelAwait: true,
  //   };
  //   console.log(config.experiments);
  //   return config;
  // },
};

export default nextConfig;
