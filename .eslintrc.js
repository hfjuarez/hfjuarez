module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'next/core-web-vitals',
		'eslint:recommended',
	],
	globals: {
		JSX: true,
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		project: true,
		sourceType: 'module',
		tsconfigRootDir: __dirname,
	},
	plugins: ['@typescript-eslint', 'react'],
	rules: {
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/sort-type-constituents': 'error',
		'no-unused-vars': 'off',
		'sort-keys': [
			'error',
			'asc',
			{ caseSensitive: true, minKeys: 2, natural: false },
		],
	},
};
