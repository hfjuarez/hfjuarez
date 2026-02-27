import React from 'react';
import styles from './MobileDock.module.scss';
import { ICON_SRCS, PADDED_ICONS } from '@/assets/icons';

interface DockApp {
	id: string;
	name: string;
	icon: string;
	type: string;
	url?: string;
}

interface MobileDockProps {
	apps: DockApp[];
	onOpen: (id: string) => void;
}

export default function MobileDock({ apps, onOpen }: MobileDockProps) {
	return (
		<div className={styles.dockWrapper}>
			<div className={styles.dock}>
				{apps.map((app) => {
					const iconSrc = ICON_SRCS[app.icon];
					return (
						<button
							key={app.id}
							className={styles.appIcon}
							onClick={() => onOpen(app.id)}
							aria-label={app.name}
						>
							{iconSrc ? (
								<img
									src={iconSrc.src}
									alt={app.name}
									className={PADDED_ICONS.has(app.icon) ? styles.iconPadded : undefined}
								/>
							) : (
								<div className={styles.fallbackIcon}>{app.name[0]}</div>
							)}
						</button>
					);
				})}
			</div>
		</div>
	);
}
