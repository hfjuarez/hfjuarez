import React from 'react';

interface AppIconSVGProps {
	icon: string;
}

export function AppIconSVG({ icon }: AppIconSVGProps) {
	switch (icon) {
		case 'finder':
			return (
				<svg viewBox="0 0 100 100" width="100%" height="100%">
					<rect width="100" height="100" rx="22" fill="#2478CF"/>
					<defs>
						<linearGradient id="fG2" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#4B9FE5"/>
							<stop offset="100%" stopColor="#1A6EB5"/>
						</linearGradient>
					</defs>
					<rect x="2" y="2" width="96" height="96" rx="20" fill="url(#fG2)"/>
					<ellipse cx="35" cy="45" rx="14" ry="18" fill="white" opacity="0.9"/>
					<ellipse cx="65" cy="45" rx="14" ry="18" fill="#A8D4FF" opacity="0.9"/>
					<ellipse cx="35" cy="45" rx="8" ry="11" fill="#1A6EB5"/>
					<ellipse cx="65" cy="45" rx="8" ry="11" fill="#0A4080"/>
					<ellipse cx="38" cy="41" rx="3" ry="3.5" fill="white"/>
					<ellipse cx="68" cy="41" rx="3" ry="3.5" fill="white"/>
					<path d="M20 68 Q50 80 80 68" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
				</svg>
			);
		case 'chrome':
			return (
				<svg viewBox="0 0 100 100" width="100%" height="100%">
					<circle cx="50" cy="50" r="50" fill="#fff"/>
					<circle cx="50" cy="50" r="20" fill="#4285F4"/>
					<path d="M50 50 L100 50 A50 50 0 0 0 25 6.7 Z" fill="#EA4335"/>
					<path d="M50 50 L25 6.7 A50 50 0 0 0 0 50 Z" fill="#FBBC05"/>
					<path d="M50 50 L0 50 A50 50 0 0 0 75 93.3 Z" fill="#34A853"/>
					<path d="M50 50 L75 93.3 A50 50 0 0 0 100 50 Z" fill="#EA4335"/>
					<circle cx="50" cy="50" r="18" fill="white"/>
					<circle cx="50" cy="50" r="14" fill="#4285F4"/>
				</svg>
			);
		case 'vscode':
			return (
				<svg viewBox="0 0 100 100" width="100%" height="100%">
					<rect width="100" height="100" rx="22" fill="#0078D4"/>
					<defs>
						<linearGradient id="vsG2" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0%" stopColor="#29B6F6"/>
							<stop offset="100%" stopColor="#0277BD"/>
						</linearGradient>
					</defs>
					<rect x="2" y="2" width="96" height="96" rx="20" fill="url(#vsG2)"/>
					<path d="M73 20L50 45 27 20 13 28 35 50 13 72 27 80 50 55 73 80 87 72 65 50 87 28Z" fill="white" opacity="0.9"/>
					<path d="M73 20L87 28 65 50 87 72 73 80 50 55V45Z" fill="white"/>
					<path d="M27 20L13 28 35 50 13 72 27 80 50 55V45Z" fill="rgba(255,255,255,0.5)"/>
				</svg>
			);
		case 'mail':
			return (
				<svg viewBox="0 0 100 100" width="100%" height="100%">
					<rect width="100" height="100" rx="22" fill="#147EFB"/>
					<defs>
						<linearGradient id="mG2" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#47A3FF"/>
							<stop offset="100%" stopColor="#0A60D6"/>
						</linearGradient>
					</defs>
					<rect x="2" y="2" width="96" height="96" rx="20" fill="url(#mG2)"/>
					<rect x="16" y="30" width="68" height="45" rx="6" fill="white" opacity="0.95"/>
					<path d="M16 36 L50 58 L84 36" stroke="#147EFB" strokeWidth="3" fill="none"/>
				</svg>
			);
		default:
			return (
				<div style={{
					width: '100%', height: '100%',
					background: '#1172fa',
					borderRadius: '22%',
					display: 'flex', alignItems: 'center', justifyContent: 'center',
					color: 'white', fontSize: '2rem', fontWeight: 700,
				}}>
					{icon[0]?.toUpperCase()}
				</div>
			);
	}
}
