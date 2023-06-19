/** @type {import('next').NextConfig} */

const path = require("path");

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}
const nextConfigGithub = {
  assetPrefix: assetPrefix,
  basePath: basePath,
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "https://hfjuarez.imgix.net",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "@/styles/index.scss";`,
  },
};

module.exports = isGithubActions
  ? { ...nextConfig, ...nextConfigGithub }
  : nextConfig;
