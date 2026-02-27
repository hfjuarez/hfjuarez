import React, { useState } from 'react';
import styles from './VSCodeWindow.module.scss';

interface Stack {
	frontend: string[];
	backend: string[];
	tools: string[];
}

interface VSCodeWindowProps {
	stack: Stack;
}

const FILE_ICONS: Record<string, string> = {
	frontend: '📄',
	backend: '⚙️',
	tools: '🔧',
};

export default function VSCodeWindow({ stack }: VSCodeWindowProps) {
	const categories = Object.keys(stack) as (keyof Stack)[];
	const [activeFile, setActiveFile] = useState<keyof Stack>('frontend');

	const renderJson = (items: string[]) => {
		return items.map((item, i) => (
			<div key={item} className={styles.line}>
				<span className={styles.lineNum}>{i + 1}</span>
				<span className={styles.indent}>{'  '}</span>
				<span className={styles.string}>&quot;{item}&quot;</span>
				{i < items.length - 1 && <span className={styles.punct}>,</span>}
			</div>
		));
	};

	return (
		<div className={styles.vscode}>
			{/* Activity bar */}
			<div className={styles.activityBar}>
				<button className={styles.activityIcon} title="Explorer">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
						<path d="M17.5 0H8.5L7 1.5v5H2L0 8.5v14.07L1.5 24h12.07L15 22.57v-5h5l1.5-1.43V4.5L17.5 0zm0 2.12L19.88 4.5H17.5V2.12zm-4 20.38H1.5V8.5H7v6.07L8.5 16h5v6.5zm5-7H8.5V4.5h-1V6H2V8.5h6v.5h1V6h1v10.5h.5v-1H14V6.5h-.5V6h5V15.5z"/>
					</svg>
				</button>
				<button className={styles.activityIcon} title="Search">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
						<path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1.12 8.06-8.06A8.25 8.25 0 1 0 15.25 0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z"/>
					</svg>
				</button>
			</div>

			{/* Sidebar */}
			<div className={styles.sidebar}>
				<div className={styles.sidebarHeader}>EXPLORER</div>
				<div className={styles.sidebarSection}>
					<div className={styles.sidebarFolder}>
						<span className={styles.folderIcon}>▼</span>
						<span>stack</span>
					</div>
					{categories.map((cat) => (
						<button
							key={cat}
							className={`${styles.sidebarFile} ${activeFile === cat ? styles.activeFile : ''}`}
							onClick={() => setActiveFile(cat)}
						>
							<span className={styles.fileIcon}>{FILE_ICONS[cat]}</span>
							<span>{cat}.json</span>
						</button>
					))}
				</div>
			</div>

			{/* Editor */}
			<div className={styles.editor}>
				{/* Tab bar */}
				<div className={styles.editorTabs}>
					{categories.map((cat) => (
						<button
							key={cat}
							className={`${styles.editorTab} ${activeFile === cat ? styles.activeEditorTab : ''}`}
							onClick={() => setActiveFile(cat)}
						>
							<span>{FILE_ICONS[cat]}</span>
							<span>{cat}.json</span>
						</button>
					))}
				</div>

				{/* Code */}
				<div className={styles.code}>
					<div className={styles.line}>
						<span className={styles.lineNum}>1</span>
						<span className={styles.bracket}>{'['}</span>
					</div>
					{renderJson(stack[activeFile])}
					<div className={styles.line}>
						<span className={styles.lineNum}>{stack[activeFile].length + 2}</span>
						<span className={styles.bracket}>{']'}</span>
					</div>
				</div>

				{/* Status bar */}
				<div className={styles.statusBar}>
					<span>⎇ main</span>
					<span>{activeFile}.json</span>
					<span>JSON</span>
					<span>UTF-8</span>
				</div>
			</div>
		</div>
	);
}
