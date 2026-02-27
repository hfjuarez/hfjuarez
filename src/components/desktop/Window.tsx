import React from 'react';
import { Rnd } from 'react-rnd';
import type { WindowState } from '@/hooks/useWindowManager';
import TrafficLights from './TrafficLights';
import styles from './Window.module.scss';

interface WindowProps {
	state: WindowState;
	title: string;
	icon?: string;
	hideTitlebar?: boolean;
	dragHandleClass?: string;
	onClose: () => void;
	onMinimize: () => void;
	onFocus: () => void;
	onToggleMaximize: () => void;
	onPositionChange: (pos: { x: number; y: number }) => void;
	onSizeChange: (size: { width: number; height: number }) => void;
	children: React.ReactNode;
}

export default function Window({
	state,
	title,
	icon,
	hideTitlebar = false,
	dragHandleClass,
	onClose,
	onMinimize,
	onFocus,
	onToggleMaximize,
	onPositionChange,
	onSizeChange,
	children,
}: WindowProps) {
	const { isOpen, isMinimized, isMaximized, zIndex, position, size } = state;

	if (!isOpen || isMinimized) return null;

	const rndProps = isMaximized
		? {
				position: { x: 0, y: 28 },
				size: {
					width: typeof window !== 'undefined' ? window.innerWidth : 1200,
					height: typeof window !== 'undefined' ? window.innerHeight - 28 - 80 : 700,
				},
				disableDragging: true,
				enableResizing: false,
			}
		: {
				position,
				size,
				disableDragging: false,
				enableResizing: true,
			};

	return (
		<Rnd
			{...rndProps}
			style={{ zIndex }}
			minWidth={320}
			minHeight={240}
			bounds="parent"
			dragHandleClassName={dragHandleClass ?? styles.titlebar}
			onMouseDown={onFocus}
			onDragStop={(_e, d) => onPositionChange({ x: d.x, y: d.y })}
			onResizeStop={(_e, _dir, ref, _delta, pos) => {
				onSizeChange({
					width: parseInt(ref.style.width),
					height: parseInt(ref.style.height),
				});
				onPositionChange(pos);
			}}
		>
			<div className={styles.window}>
				{!hideTitlebar && (
					<div className={styles.titlebar}>
						<TrafficLights
							onClose={onClose}
							onMinimize={onMinimize}
							onToggleMaximize={onToggleMaximize}
						/>
						<div className={styles.titleText}>
							{icon && <img src={icon} alt="" className={styles.titleIcon} />}
							<span>{title}</span>
						</div>
					</div>
				)}
				<div className={styles.content}>{children}</div>
			</div>
		</Rnd>
	);
}
