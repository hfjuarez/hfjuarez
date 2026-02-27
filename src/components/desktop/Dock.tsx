import React, { useEffect, useState } from 'react';
import styles from './Dock.module.scss';
import { ICON_SRCS, PADDED_ICONS } from '@/assets/icons';

interface DockApp {
	id: string;
	name: string;
	icon: string;
	type: string;
	url?: string;
}

interface DockProps {
	apps: DockApp[];
	openWindows: Record<string, boolean>;
	onOpen: (id: string) => void;
	projectCount?: number;
}

const BOUNCE_DURATION_MS = 5000;

export default function Dock({ apps, openWindows, onOpen, projectCount = 0 }: DockProps) {
	const [hoveredId, setHoveredId] = useState<string | null>(null);
	const [shouldBounce, setShouldBounce] = useState(true);

	useEffect(() => {
		const t = setTimeout(() => setShouldBounce(false), BOUNCE_DURATION_MS);
		return () => clearTimeout(t);
	}, []);

	return (
		<div className={styles.dockWrapper}>
			<div className={styles.dock}>
				{apps.map((app) => {
					const isOpen = openWindows[app.id];
					const isChrome = app.icon === 'chrome';
					const isHovered = hoveredId === app.id;
					const iconSrc = ICON_SRCS[app.icon];
					const bouncing = isChrome && !isOpen && shouldBounce;

					const iconContent = (
						<>
							{iconSrc ? (
								<img
									src={iconSrc.src}
									alt={app.name}
									className={PADDED_ICONS.has(app.icon) ? styles.iconPadded : undefined}
								/>
							) : (
								<div className={styles.fallbackIcon}>{app.name[0]}</div>
							)}
							{isChrome && projectCount > 0 && (
								<div className={styles.badge}>{projectCount}</div>
							)}
						</>
					);

					return (
						<div
							key={app.id}
							className={`${styles.appWrapper} ${isOpen ? styles.appWrapperOpen : ''}`}
							onMouseEnter={() => setHoveredId(app.id)}
							onMouseLeave={() => setHoveredId(null)}
						>
							{isHovered && <div className={styles.tooltip}>{app.name}</div>}

							{app.type === 'link' ? (
								<a
									href={app.url}
									target="_blank"
									rel="noopener noreferrer"
									className={`${styles.appIcon} ${bouncing ? styles.chromeBounce : ''}`}
									aria-label={app.name}
								>
									{iconContent}
								</a>
							) : (
								<button
									className={`${styles.appIcon} ${bouncing ? styles.chromeBounce : ''}`}
									onClick={() => onOpen(app.id)}
									aria-label={app.name}
								>
									{iconContent}
								</button>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
