import React from 'react';

import macosActionsStyles from './macosActions.module.scss';

const MacosActions = () => {
	return (
		<div className={macosActionsStyles.actions}>
			<div className={macosActionsStyles.close}>
				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3.75 3.75L8.25 8.25M8.25 3.75L3.75 8.25"
						stroke="#921D16"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<div className={macosActionsStyles.minimize}>
				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.75 6H9.25"
						stroke="#8F591D"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<div className={macosActionsStyles.maximize}>
				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.08578 3.85355C7.40076 3.53857 7.17768 3 6.73223 3H3.5C3.22386 3 3 3.22386 3 3.5V6.73223C3 7.17768 3.53857 7.40077 3.85355 7.08578L7.08578 3.85355Z"
						fill="#285F18"
					/>
					<path
						d="M4.91422 8.14645C4.59924 8.46143 4.82232 9 5.26777 9H8.5C8.77614 9 9 8.77614 9 8.5V5.26777C9 4.82232 8.46143 4.59923 8.14645 4.91422L4.91422 8.14645Z"
						fill="#285F18"
					/>
				</svg>
			</div>
		</div>
	);
};

export default MacosActions;
