import React from 'react';
import { AppIconSVG } from './AppIconSVG';
import styles from './MobileDock.module.scss';

interface DockApp {
	id: string;
	name: string;
	icon: string;
	type: string;
}

interface MobileDockProps {
	apps: DockApp[];
	onOpen: (id: string) => void;
}

export default function MobileDock({ apps, onOpen }: MobileDockProps) {
	return (
		<div className={styles.dockWrapper}>
			<div className={styles.dock}>
				{apps.map((app) => (
					<button
						key={app.id}
						className={styles.appIcon}
						onClick={() => onOpen(app.id)}
						aria-label={app.name}
					>
						<AppIconSVG icon={app.icon} />
					</button>
				))}
			</div>
		</div>
	);
}
