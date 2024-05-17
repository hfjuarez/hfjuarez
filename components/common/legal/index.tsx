import React from 'react';

import Text from '@/components/common/layout/text';
import Link from '@/components/common/layout/link';

import styles from './legal.module.scss';

const Legal = () => {
	return (
		<div className={styles.wrapper}>
			<Text>Font: Mona Sans</Text>
			<Text>
				Copyright © 2023, GitHub Repository&nbsp;
				<Link href="https://github.com/github/mona-sans" target="_blank">
					https://github.com/github/mona-sans
				</Link>
				, with Reserved Font Name &quot;Mona Sans&quot;
			</Text>
			<Text>License: SIL Open Font License, Version 1.1</Text>

			<hr />

			<Text>Font: Playfair Display</Text>
			<Text>
				Copyright © 2005-2023 The Playfair Project Authors, GitHub
				Repository&nbsp;
				<Link href="https://github.com/clauseggers/Playfair" target="_blank">
					https://github.com/clauseggers/Playfair
				</Link>
				.
			</Text>
			<Text>License: SIL Open Font License, Version 1.1</Text>
			<hr />
			<Text>
				This website uses the &quot;Mona Sans&quot; and &quot;Playfair
				Display&quot; fonts, which are licensed under the SIL Open Font License,
				Version 1.1. You are free to use, study, modify, and redistribute the
				font in accordance with the terms of this license. For more information
				about the license, please visit&nbsp;
				<Link href="http://scripts.sil.org/OFL" target="_blank">
					http://scripts.sil.org/OFL
				</Link>
				.
			</Text>
			<Text>
				Please note that the &quot;Mona Sans&quot; and &quot;Playfair
				Display&quot; fonts are subject to the conditions and limitations
				outlined in the SIL Open Font License, and any use of the font must
				comply with those terms.
			</Text>
			<hr />
			<Text>
				LinkedIn, the LinkedIn logo, the IN logo and InMail are registered
				trademarks or trademarks of LinkedIn Corporation and its affiliates in
				the United States and/or other countries.
			</Text>

			<Text>
				This website may use the LinkedIn logo as a reference or link to my
				LinkedIn profile. The use of the LinkedIn logo is in accordance with
				LinkedIn&apos;s &quot;Brand Guidelines&quot; and does not imply any
				endorsement, sponsorship, or affiliation with LinkedIn Corporation. For
				more information about the use of the LinkedIn logo, please refer to
				LinkedIn&apos;s &quot;Brand Guidelines.&quot;.
			</Text>
			<hr />
			<Text>
				GITHUB®, the GITHUB® logo design, the INVERTOCAT logo design, OCTOCAT®,
				and the OCTOCAT® logo design are trademarks of GitHub, Inc., registered
				in the United States and other countries.
			</Text>
			<Text>
				This website may use the GitHub logo as a reference or link to my GitHub
				profile. The use of the GitHub logo is in accordance with GitHub&apos;s
				&quot;GitHub Logos and Usage&quot; and does not imply any endorsement,
				sponsorship, or affiliation with GitHub, Inc. For more information about
				the use of the GitHub logo, please refer to GitHub&apos;s &quot;GitHub
				Logos and Usage.&quot;.
			</Text>
		</div>
	);
};

export default Legal;
