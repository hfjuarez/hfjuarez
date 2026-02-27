import React from 'react';
import styles from './AppGrid.module.scss';
import { ICON_SRCS, PADDED_ICONS } from '@/assets/icons';

interface DockApp {
	id: string;
	name: string;
	icon: string;
	type: string;
	url?: string;
}

interface AppGridProps {
	apps: DockApp[];
	onOpen: (id: string) => void;
	projectCount?: number;
}

export default function AppGrid({ apps, onOpen, projectCount = 0 }: AppGridProps) {
	return (
		<div className={styles.grid}>
			{apps.map((app) => {
				const iconSrc = ICON_SRCS[app.icon];
				return (
					<button
						key={app.id}
						className={styles.appItem}
						onClick={() => onOpen(app.id)}
						aria-label={app.name}
					>
						<div className={styles.iconWrapper}>
							{iconSrc ? (
								<img
									src={iconSrc.src}
									alt={app.name}
									className={PADDED_ICONS.has(app.icon) ? styles.iconPadded : undefined}
								/>
							) : (
								<div className={styles.fallbackIcon}>{app.name[0]}</div>
							)}
							{app.icon === 'chrome' && projectCount > 0 && (
								<div className={styles.badge}>{projectCount}</div>
							)}
						</div>
						<span className={styles.label}>{app.name}</span>
					</button>
				);
			})}
		</div>
	);
}
