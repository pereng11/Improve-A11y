import { resolve } from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": resolve("./src"),
        },
      },
      build: {
        rollupOptions: {
          maxParallelFileOps: 2,
          cache: false,
          output: {
            sourcemap: false,
            manualChunks: (id) => {
              if (id.includes("node_modules")) {
                return "vendor";
              }
            },
          },
        },
      },
    });
  },
};
export default config;
