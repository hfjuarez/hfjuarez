import React, { useEffect, useState } from 'react';
import { useWindowManager } from '@/hooks/useWindowManager';
import MenuBar from './desktop/MenuBar';
import Dock from './desktop/Dock';
import Window from './desktop/Window';
import AboutWindow from './desktop/windows/AboutWindow';
import ChromeWindow from './desktop/windows/ChromeWindow';
import chromeStyles from './desktop/windows/ChromeWindow.module.scss';
import VSCodeWindow from './desktop/windows/VSCodeWindow';
import HomeScreen from './mobile/HomeScreen';
import styles from './Desktop.module.scss';

interface Project {
	id: string;
	name: string;
	url: string;
	stack: string[];
	content: string;
}

interface DockApp {
	id: string;
	name: string;
	icon: string;
	type: string;
	url?: string;
}

interface Stack {
	frontend: string[];
	backend: string[];
	tools: string[];
}

interface Me {
	contact: { email: string; github: string; linkedin: string };
	personal: { name: string; lastName: string; image: string; age: number };
	professional: { currentPosition: string; company: string; yearsOfExperience: number };
}

interface DesktopProps {
	aboutContent: string;
	projects: Project[];
	stack: Stack;
	dock: DockApp[];
	me: Me;
}

const WINDOW_IDS = ['about', 'chrome', 'vscode'];

const WINDOW_TITLES: Record<string, string> = {
	about: 'About — Hernán Fabrica',
	chrome: 'Google Chrome',
	vscode: 'Visual Studio Code',
};

const WINDOW_ICONS: Record<string, string> = {
	about: '/icons/finder.svg',
	chrome: '/icons/chrome.svg',
	vscode: '/icons/vscode.svg',
};

export default function Desktop({ aboutContent, projects, stack, dock, me }: DesktopProps) {
	const [isMobile, setIsMobile] = useState(false);
	const [mounted, setMounted] = useState(false);

	const {
		windows,
		openWindow,
		closeWindow,
		focusWindow,
		minimizeWindow,
		toggleMaximize,
		updatePosition,
		updateSize,
	} = useWindowManager(WINDOW_IDS);

	useEffect(() => {
		setMounted(true);
		const check = () => setIsMobile(window.innerWidth < 768);
		check();
		window.addEventListener('resize', check);
		return () => window.removeEventListener('resize', check);
	}, []);

	if (!mounted) return null;

	const openWindowsMap = Object.fromEntries(
		WINDOW_IDS.map((id) => [id, windows[id]?.isOpen && !windows[id]?.isMinimized])
	);

	const renderWindowContent = (id: string) => {
		switch (id) {
			case 'about':
				return <AboutWindow content={aboutContent} />;
			case 'chrome':
				return (
					<ChromeWindow
						projects={projects}
						windowControls={{
							onClose: () => closeWindow(id),
							onMinimize: () => minimizeWindow(id),
							onToggleMaximize: () => toggleMaximize(id),
						}}
					/>
				);
			case 'vscode':
				return <VSCodeWindow stack={stack} />;
			default:
				return null;
		}
	};

	if (isMobile) {
		return (
			<HomeScreen
				dock={dock}
				me={me}
				aboutContent={aboutContent}
				projects={projects}
				stack={stack}
			/>
		);
	}

	return (
		<div className={styles.desktop}>
			{/* Wallpaper */}
			<div className={styles.wallpaper}>
				<img src={me.personal.image} alt="wallpaper" className={styles.wallpaperImg} />
				<div className={styles.wallpaperOverlay} />
			</div>

			{/* Menu bar */}
			<MenuBar name={`${me.personal.name} ${me.personal.lastName}`} />

			{/* Windows container */}
			<div className={styles.windowsContainer}>
				{WINDOW_IDS.map((id) => (
					<Window
						key={id}
						state={windows[id]}
						title={WINDOW_TITLES[id]}
						icon={WINDOW_ICONS[id]}
						hideTitlebar={id === 'chrome'}
						dragHandleClass={id === 'chrome' ? chromeStyles.titleRow : undefined}
						onClose={() => closeWindow(id)}
						onMinimize={() => minimizeWindow(id)}
						onFocus={() => focusWindow(id)}
						onToggleMaximize={() => toggleMaximize(id)}
						onPositionChange={(pos) => updatePosition(id, pos)}
						onSizeChange={(size) => updateSize(id, size)}
					>
						{renderWindowContent(id)}
					</Window>
				))}
			</div>

			{/* Dock */}
			<Dock
				apps={dock}
				openWindows={openWindowsMap}
				onOpen={(id) => openWindow(id)}
				projectCount={projects.length}
			/>
		</div>
	);
}
