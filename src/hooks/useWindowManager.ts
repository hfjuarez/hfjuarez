import { useState, useCallback } from 'react';

export interface WindowState {
	id: string;
	isOpen: boolean;
	isMinimized: boolean;
	isMaximized: boolean;
	zIndex: number;
	position: { x: number; y: number };
	size: { width: number; height: number };
}

type WindowsMap = Record<string, WindowState>;

const DEFAULT_SIZES: Record<string, { width: number; height: number }> = {
	about: { width: 600, height: 480 },
	chrome: { width: 800, height: 560 },
	vscode: { width: 700, height: 520 },
	contact: { width: 480, height: 360 },
};

let zCounter = 100;

function getDefaultPosition(id: string): { x: number; y: number } {
	if (typeof window === 'undefined') return { x: 60, y: 60 };
	const size = DEFAULT_SIZES[id] ?? { width: 600, height: 480 };
	const offsets: Record<string, { x: number; y: number }> = {
		about: { x: 80, y: 60 },
		chrome: { x: 120, y: 80 },
		vscode: { x: 160, y: 70 },
		contact: { x: 200, y: 100 },
	};
	const offset = offsets[id] ?? { x: 80, y: 60 };
	return {
		x: Math.max(40, Math.min(offset.x, window.innerWidth - size.width - 40)),
		y: Math.max(36, Math.min(offset.y, window.innerHeight - size.height - 100)),
	};
}

export function useWindowManager(windowIds: string[]) {
	const [windows, setWindows] = useState<WindowsMap>(() => {
		const initial: WindowsMap = {};
		for (const id of windowIds) {
			initial[id] = {
				id,
				isOpen: false,
				isMinimized: false,
				isMaximized: false,
				zIndex: 100,
				position: { x: 80, y: 60 },
				size: DEFAULT_SIZES[id] ?? { width: 600, height: 480 },
			};
		}
		return initial;
	});

	const openWindow = useCallback((id: string) => {
		setWindows((prev) => {
			zCounter++;
			return {
				...prev,
				[id]: {
					...prev[id],
					isOpen: true,
					isMinimized: false,
					zIndex: zCounter,
					position: prev[id].isOpen ? prev[id].position : getDefaultPosition(id),
				},
			};
		});
	}, []);

	const closeWindow = useCallback((id: string) => {
		setWindows((prev) => ({
			...prev,
			[id]: { ...prev[id], isOpen: false, isMinimized: false, isMaximized: false },
		}));
	}, []);

	const focusWindow = useCallback((id: string) => {
		setWindows((prev) => {
			zCounter++;
			return {
				...prev,
				[id]: { ...prev[id], zIndex: zCounter },
			};
		});
	}, []);

	const minimizeWindow = useCallback((id: string) => {
		setWindows((prev) => ({
			...prev,
			[id]: { ...prev[id], isMinimized: true },
		}));
	}, []);

	const toggleMaximize = useCallback((id: string) => {
		setWindows((prev) => ({
			...prev,
			[id]: { ...prev[id], isMaximized: !prev[id].isMaximized },
		}));
	}, []);

	const updatePosition = useCallback((id: string, position: { x: number; y: number }) => {
		setWindows((prev) => ({
			...prev,
			[id]: { ...prev[id], position },
		}));
	}, []);

	const updateSize = useCallback((id: string, size: { width: number; height: number }) => {
		setWindows((prev) => ({
			...prev,
			[id]: { ...prev[id], size },
		}));
	}, []);

	return {
		windows,
		openWindow,
		closeWindow,
		focusWindow,
		minimizeWindow,
		toggleMaximize,
		updatePosition,
		updateSize,
	};
}
