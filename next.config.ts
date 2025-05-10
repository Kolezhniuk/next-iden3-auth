import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // webpack: function (config) {
    // if (!options.isServer) {
    // config.resolve.fallback.fs = false;
    // }
    // config.resolve.fallback = { fs: false, net: false, tls: false };
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   // Provide a browser-compatible version of web-worker
    //   "web-worker": "next/dist/compiled/web-worker",
    // };
    // config.experiments = {
    //   asyncWebAssembly: true,
    //   syncWebAssembly: true,
    //   layers: true,
    //   topLevelAwait: true,
    // };
    // config.resolve.fallback = {
    //   fs: false,
    //   path: false,
    //   dns: false,
    //   net: false,
    //   tls: false,
    //   "rdf-canonize-native": false,
    // };
    // return config;
  // },
};

export default nextConfig;
