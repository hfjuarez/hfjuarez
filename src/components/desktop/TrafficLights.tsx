import React from 'react';
import styles from './TrafficLights.module.scss';

interface TrafficLightsProps {
	onClose: () => void;
	onMinimize: () => void;
	onToggleMaximize: () => void;
}

export default function TrafficLights({ onClose, onMinimize, onToggleMaximize }: TrafficLightsProps) {
	return (
		<div className={styles.trafficLights}>
			<button
				className={`${styles.light} ${styles.close}`}
				onClick={(e) => { e.stopPropagation(); onClose(); }}
				aria-label="Close"
			/>
			<button
				className={`${styles.light} ${styles.minimize}`}
				onClick={(e) => { e.stopPropagation(); onMinimize(); }}
				aria-label="Minimize"
			/>
			<button
				className={`${styles.light} ${styles.maximize}`}
				onClick={(e) => { e.stopPropagation(); onToggleMaximize(); }}
				aria-label="Maximize"
			/>
		</div>
	);
}
