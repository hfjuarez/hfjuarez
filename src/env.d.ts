/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.md?raw' {
	const content: string;
	export default content;
}

declare module '*.json' {
	const value: any;
	export default value;
}
