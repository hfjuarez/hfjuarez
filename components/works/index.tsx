import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import HeightWrapper from '@/components/common/layout/height';
import Work from '@/components/work';

import worksStyles from './works.module.scss';

import works from '@/data/contents/works';

const Works = () => {
	const [position, setPosition] = useState<number>(1);
	const [positionClasses, setPositionClasses] = useState<string | null>(
		worksStyles[`position${position}`],
	);
	const carrouselClasses = classNames(worksStyles.carrousel, positionClasses);
	const carrouselControlsClasses = classNames(
		worksStyles.carrouselControls,
		positionClasses,
	);
	const handleClick = (newPosition: number) => {
		setPosition(newPosition);
		setPositionClasses(worksStyles[`position${newPosition}`]);
	};
	return (
		<HeightWrapper
			as="section"
			id="work"
			className={worksStyles.customHeightWrapper}
		>
			<Container as="div" className={worksStyles.container}>
				<Heading as="h2">My Work</Heading>
				<div className={worksStyles.carrouselContainer}>
					<section className={carrouselClasses}>
						{works?.length &&
							works.map((work, idx) => <Work work={work} key={'work' + idx} />)}
					</section>
					{position !== 1 && (
						<button
							onClick={() => handleClick(position - 1)}
							className={worksStyles.back}
						>
							<Image
								width={12.5}
								height={21.25}
								src="/images/arrow.svg"
								alt="Arrow"
							/>
						</button>
					)}
					{position !== 3 && (
						<button
							onClick={() => handleClick(position + 1)}
							className={worksStyles.next}
						>
							<Image
								width={12.5}
								height={21.25}
								src="/images/arrow.svg"
								alt="Arrow"
							/>
						</button>
					)}
				</div>

				<div className={carrouselControlsClasses}>
					<button onClick={() => handleClick(1)}></button>
					<button onClick={() => handleClick(2)}></button>
					<button onClick={() => handleClick(3)}></button>
				</div>
			</Container>
		</HeightWrapper>
	);
};

export default Works;
