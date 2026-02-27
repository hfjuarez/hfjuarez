import chromeIcon from './chrome.png';
import finderIcon from './finder.png';
import mailIcon from './mail.png';
import vscodeIcon from './vscode.webp';
import githubIcon from './github.webp';
import linkedinIcon from './linkedin.webp';

export const ICON_SRCS: Record<string, { src: string }> = {
	chrome: chromeIcon,
	finder: finderIcon,
	mail: mailIcon,
	vscode: vscodeIcon,
	github: githubIcon,
	linkedin: linkedinIcon,
};

export const PADDED_ICONS = new Set(['github', 'linkedin']);
