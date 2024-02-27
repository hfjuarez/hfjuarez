/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '/';

if (isGithubActions) {
	const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
	assetPrefix = `/${repo}/`;
	basePath = `/${repo}`;
}
const nextConfigGithub = {
	assetPrefix: assetPrefix,
	basePath: basePath,
};

const nextConfig = {
	images: {
		unoptimized: true,
	},
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "@/styles/index.scss";`,
	},
	swcMinify: true,
};

module.exports = isGithubActions
	? { ...nextConfig, ...nextConfigGithub }
	: nextConfig;
