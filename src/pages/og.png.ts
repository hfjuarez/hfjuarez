import type { APIRoute } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

async function loadGoogleFont(font: string, weight: number): Promise<ArrayBuffer> {
	const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&display=swap`;
	// Use Chrome 36 UA — Google Fonts returns WOFF1 which satori supports (not WOFF2)
	const css = await (
		await fetch(url, {
			headers: {
				'User-Agent':
					'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36',
			},
		})
	).text();
	const match = css.match(/src: url\((.+?)\) format\('woff'\)/);
	if (!match?.[1]) throw new Error(`Font not found: ${font} ${weight}`);
	return (await fetch(match[1])).arrayBuffer();
}

export const GET: APIRoute = async () => {
	const [fontRegular, fontBold] = await Promise.all([
		loadGoogleFont('Inter', 400),
		loadGoogleFont('Inter', 700),
	]);

	const tags = ['Vue.js', 'React', 'TypeScript', 'Node.js'];

	const svg = await satori(
		{
			type: 'div',
			props: {
				style: {
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					width: '1200px',
					height: '630px',
					background: '#0a0a0a',
					padding: '72px 80px',
					fontFamily: 'Inter',
					color: '#ffffff',
				},
				children: [
					{
						type: 'div',
						props: {
							style: { display: 'flex', flexDirection: 'column', gap: '14px' },
							children: [
								{
									type: 'div',
									props: {
										style: {
											fontSize: '72px',
											fontWeight: 700,
											color: '#ffffff',
											letterSpacing: '-2px',
											lineHeight: '1.1',
										},
										children: 'Hernán Fabrica',
									},
								},
								{
									type: 'div',
									props: {
										style: {
											fontSize: '34px',
											fontWeight: 400,
											color: '#888888',
										},
										children: 'Frontend Engineer',
									},
								},
							],
						},
					},
					{
						type: 'div',
						props: {
							style: { display: 'flex', flexDirection: 'column', gap: '28px' },
							children: [
								{
									type: 'div',
									props: {
										style: {
											fontSize: '22px',
											fontWeight: 400,
											color: '#666666',
										},
										children: '4+ years building scalable UI systems for fintech, Web3 and enterprise',
									},
								},
								{
									type: 'div',
									props: {
										style: { display: 'flex', gap: '12px' },
										children: tags.map((tech) => ({
											type: 'div',
											props: {
												style: {
													display: 'flex',
													padding: '8px 18px',
													background: '#161616',
													border: '1px solid #2a2a2a',
													borderRadius: '6px',
													fontSize: '20px',
													color: '#aaaaaa',
												},
												children: tech,
											},
										})),
									},
								},
								{
									type: 'div',
									props: {
										style: {
											display: 'flex',
											alignItems: 'center',
											gap: '8px',
											fontSize: '22px',
											color: '#444444',
										},
										children: 'hernanfabrica.com →',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			width: 1200,
			height: 630,
			fonts: [
				{ name: 'Inter', data: fontRegular, weight: 400, style: 'normal' },
				{ name: 'Inter', data: fontBold, weight: 700, style: 'normal' },
			],
		},
	);

	const resvg = new Resvg(svg);
	const png = resvg.render().asPng();

	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
};
