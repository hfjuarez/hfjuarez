import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './AboutWindow.module.scss';

interface AboutWindowProps {
	content: string;
}

export default function AboutWindow({ content }: AboutWindowProps) {
	return (
		<div className={styles.container}>
			<div className={styles.markdown}>
				<ReactMarkdown>{content}</ReactMarkdown>
			</div>
		</div>
	);
}
