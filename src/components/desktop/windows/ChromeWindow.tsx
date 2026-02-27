import React, { useState } from 'react';
import TrafficLights from '../TrafficLights';
import styles from './ChromeWindow.module.scss';

interface Project {
	id: string;
	name: string;
	url: string;
	stack: string[];
	content: string;
}

interface WindowControls {
	onClose: () => void;
	onMinimize: () => void;
	onToggleMaximize: () => void;
}

interface ChromeWindowProps {
	projects: Project[];
	windowControls?: WindowControls;
}

export default function ChromeWindow({ projects, windowControls }: ChromeWindowProps) {
	const [activeTab, setActiveTab] = useState(0);
	const current = projects[activeTab];

	return (
		<div className={styles.browser}>
			{/* Title row: traffic lights + tabs — drag handle */}
			<div className={styles.titleRow}>
				{windowControls && (
					<div className={styles.trafficLightsWrapper}>
						<TrafficLights {...windowControls} />
					</div>
				)}
				<div className={styles.tabStrip}>
					{projects.map((p, i) => (
						<button
							key={p.id}
							className={`${styles.tab} ${i === activeTab ? styles.activeTab : ''}`}
							onClick={() => setActiveTab(i)}
						>
							<span className={styles.tabFavicon}>🌐</span>
							<span className={styles.tabName}>{p.name}</span>
						</button>
					))}
				</div>
			</div>

			{/* Address bar */}
			<div className={styles.addressBar}>
				<button className={styles.navBtn} aria-label="Back">‹</button>
				<button className={styles.navBtn} aria-label="Forward">›</button>
				<button className={styles.navBtn} aria-label="Reload">↻</button>
				<div className={styles.urlBar}>
					<span className={styles.lockIcon}>🔒</span>
					<span className={styles.url}>{current?.url}</span>
				</div>
				<a
					href={current?.url}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.openBtn}
					title="Open in new tab"
				>
					↗
				</a>
			</div>

			{/* Content — compiled markdown from .md file */}
			{current && (
				<div className={styles.contentWrapper}>
					<div
						className={styles.contentBody}
						dangerouslySetInnerHTML={{ __html: current.content }}
					/>
					<div className={styles.ctaBar}>
						<a
							href={current.url}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.ctaBtn}
						>
							Open {current.name} ↗
						</a>
					</div>
				</div>
			)}
		</div>
	);
}
