import React, { useState } from 'react';
import StatusBar from './StatusBar';
import AppGrid from './AppGrid';
import MobileDock from './MobileDock';
import AppSheet from './AppSheet';
import AboutWindow from '../desktop/windows/AboutWindow';
import ChromeWindow from '../desktop/windows/ChromeWindow';
import VSCodeWindow from '../desktop/windows/VSCodeWindow';
import styles from './HomeScreen.module.scss';

interface DockApp {
	id: string;
	name: string;
	icon: string;
	type: string;
	url?: string;
}

interface HomeScreenProps {
	dock: DockApp[];
	me: any;
	aboutContent: string;
	projects: any[];
	stack: any;
}

const SHEET_TITLES: Record<string, string> = {
	about: 'About',
	chrome: 'Projects',
	vscode: 'VS Code',
};

export default function HomeScreen({ dock, me, aboutContent, projects, stack }: HomeScreenProps) {
	const [openSheet, setOpenSheet] = useState<string | null>(null);

	const handleOpen = (app: DockApp) => {
		if (app.type === 'link' && app.url) {
			window.open(app.url, '_blank', 'noopener,noreferrer');
		} else {
			setOpenSheet(app.id);
		}
	};

	const renderSheetContent = (id: string) => {
		switch (id) {
			case 'about':
				return <AboutWindow content={aboutContent} />;
			case 'chrome':
				return <ChromeWindow projects={projects} />;
			case 'vscode':
				return <VSCodeWindow stack={stack} />;
			default:
				return null;
		}
	};

	return (
		<div className={styles.homeScreen}>
			{/* Wallpaper */}
			<div className={styles.wallpaper}>
				<img src={me.personal.image} alt="" className={styles.wallpaperImg} />
				<div className={styles.wallpaperOverlay} />
			</div>

			{/* Status bar */}
			<StatusBar />

			{/* App grid */}
			<AppGrid
				apps={dock}
				onOpen={(id) => handleOpen(dock.find((a) => a.id === id)!)}
				projectCount={projects.length}
			/>

			{/* Dock */}
			<MobileDock
				apps={dock.slice(0, 4)}
				onOpen={(id) => handleOpen(dock.find((a) => a.id === id)!)}
			/>

			{/* Home indicator */}
			<div className={styles.homeIndicator} />

			{/* Sheets */}
			{dock.filter((a) => a.type !== 'link').map((app) => (
				<AppSheet
					key={app.id}
					isOpen={openSheet === app.id}
					title={SHEET_TITLES[app.id] ?? app.name}
					onClose={() => setOpenSheet(null)}
				>
					{renderSheetContent(app.id)}
				</AppSheet>
			))}
		</div>
	);
}
