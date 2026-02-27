import React, { useState, useEffect } from 'react';
import styles from './StatusBar.module.scss';

export default function StatusBar() {
	const [time, setTime] = useState('9:41');

	useEffect(() => {
		const update = () => {
			const now = new Date();
			setTime(
				now.toLocaleTimeString('en-US', {
					hour: 'numeric',
					minute: '2-digit',
					hour12: true,
				}),
			);
		};
		update();
		const interval = setInterval(update, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.statusBar}>
			<span className={styles.time}>{time}</span>
			<div className={styles.icons}>
				{/* Signal bars */}
				<svg viewBox="0 0 17 12" width="17" height="12" fill="white">
					<rect x="0" y="8" width="3" height="4" rx="1"/>
					<rect x="4.5" y="5.5" width="3" height="6.5" rx="1"/>
					<rect x="9" y="3" width="3" height="9" rx="1"/>
					<rect x="13.5" y="0" width="3" height="12" rx="1"/>
				</svg>
				{/* WiFi */}
				<svg viewBox="0 0 16 12" width="16" height="12" fill="white">
					<path d="M8 9.5 C8.83 9.5 9.5 10.17 9.5 11 C9.5 11.83 8.83 12.5 8 12.5 C7.17 12.5 6.5 11.83 6.5 11 C6.5 10.17 7.17 9.5 8 9.5Z"/>
					<path d="M4.5 7C5.88 5.62 7.94 5 8 5C8.06 5 10.12 5.62 11.5 7" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
					<path d="M1.5 4C3.57 1.93 5.79 1 8 1C10.21 1 12.43 1.93 14.5 4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
				</svg>
				{/* Battery */}
				<div className={styles.battery}>
					<div className={styles.batteryBody}>
						<div className={styles.batteryFill} />
					</div>
					<div className={styles.batteryNub} />
				</div>
			</div>
		</div>
	);
}
