// next.config.mjs

import next from 'next'; // Import the entire next module as default
const { webpack } = next; // Access the webpack function from the next module

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add HTML loader rule for handling HTML files
    config.module.rules.push({
      test: /\.html$/,
      use: 'html-loader'
    });

    // Return the modified webpack configuration
    return config;
  }
};

export default nextConfig;
