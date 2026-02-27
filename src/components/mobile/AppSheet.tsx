import React, { useEffect, useRef } from 'react';
import styles from './AppSheet.module.scss';

interface AppSheetProps {
	isOpen: boolean;
	title: string;
	onClose: () => void;
	children: React.ReactNode;
}

export default function AppSheet({ isOpen, title, onClose, children }: AppSheetProps) {
	const sheetRef = useRef<HTMLDivElement>(null);

	// Close on backdrop click
	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) onClose();
	};

	// Close on escape
	useEffect(() => {
		if (!isOpen) return;
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handler);
		return () => document.removeEventListener('keydown', handler);
	}, [isOpen, onClose]);

	return (
		<div
			className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ''}`}
			onClick={handleBackdropClick}
		>
			<div
				ref={sheetRef}
				className={`${styles.sheet} ${isOpen ? styles.sheetOpen : ''}`}
			>
				<div className={styles.handle} />
				<div className={styles.header}>
					<div className={styles.headerSpacer} />
					<h2 className={styles.title}>{title}</h2>
					<button className={styles.closeBtn} onClick={onClose} aria-label="Close">
						Done
					</button>
				</div>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	);
}
