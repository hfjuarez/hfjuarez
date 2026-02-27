import React from 'react';
import styles from './AppGrid.module.scss';
import { AppIconSVG } from './AppIconSVG';

interface DockApp {
	id: string;
	name: string;
	icon: string;
	type: string;
}

interface AppGridProps {
	apps: DockApp[];
	onOpen: (id: string) => void;
	projectCount?: number;
}

export default function AppGrid({ apps, onOpen, projectCount = 0 }: AppGridProps) {
	return (
		<div className={styles.grid}>
			{apps.map((app) => (
				<button
					key={app.id}
					className={styles.appItem}
					onClick={() => onOpen(app.id)}
					aria-label={app.name}
				>
					<div className={styles.iconWrapper}>
						<AppIconSVG icon={app.icon} />
						{app.icon === 'chrome' && projectCount > 0 && (
							<div className={styles.badge}>{projectCount}</div>
						)}
					</div>
					<span className={styles.label}>{app.name}</span>
				</button>
			))}
		</div>
	);
}
