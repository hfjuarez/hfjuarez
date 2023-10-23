/** @type {import('next').NextConfig} */

import { join } from 'path';

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
	reactStrictMode: true,
	sassOptions: {
		includePaths: [join(__dirname, 'styles')],
		prependData: `@import "@/styles/index.scss";`,
	},
	swcMinify: true,
};

export default isGithubActions
	? { ...nextConfig, ...nextConfigGithub }
	: nextConfig;
