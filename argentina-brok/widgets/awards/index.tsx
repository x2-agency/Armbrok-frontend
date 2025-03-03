'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useEffect, useRef, useState } from 'react';

import { getAwards } from '@/shared/api/get-awards';
import type { Award } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';

import type { AwardSectionProps } from './awards.types';
import css from './index.module.css';
import { AwardItem } from './ui/award-item';

export const AwardsSection = ({
	title,
	awards,
	className,
	buttonText,
}: AwardSectionProps) => {
	const [isOpen, toggleOpen] = useState<boolean>(false);
	const [isFetched, toggleFetched] = useState<boolean>(false);
	const [allAwards, setAllAwards] = useState<Array<Award> | undefined>(
		undefined
	);
	const [contentHeight, setContentHeight] = useState<number>(0);
	const contentRef = useRef<HTMLUListElement>(null);

	const getAllAwards = async () => {
		const response = await getAwards({});

		return response;
	};

	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(contentRef.current.scrollHeight);
		}
	}, [allAwards, isOpen]);

	useEffect(() => {
		if (isOpen && !isFetched) {
			const fetchData = async () => {
				try {
					const response: { data: Array<Award> } = await getAllAwards();
					const filteredAwards = response.data.filter(
						award => !awards?.some(a => a.id === award.id)
					);
					setAllAwards(filteredAwards);
					toggleFetched(true);
				} catch (error) {
					console.error(error);
				}
			};

			fetchData();
		}
	}, [isFetched, isOpen, allAwards]);

	if (!awards || awards.length === 0) {
		return null;
	}

	const chunkArray = (size: number, arr: AwardSectionProps['awards']) => {
		if (!arr || !arr.length) {
			return null;
		}

		return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
			arr?.slice(i * size, i * size + size)
		);
	};

	const groupedAwards = chunkArray(4, awards);

	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title ?? '')}</h2>}
			<ul className={cx(css.awardWrap)}>
				{groupedAwards?.map((row, rowIndex) => (
					<li
						className={cx(css.row, { [css.centered]: row.length < 4 })}
						key={rowIndex}
					>
						{row.map((award, index) => (
							<AwardItem {...award} key={index} />
						))}
					</li>
				))}
			</ul>
			<ul
				className={cx(cx(css.awardWrap, css.allAwards, { [css.open]: isOpen }))}
				ref={contentRef}
				style={{
					maxHeight: isOpen ? `${contentHeight}px` : '0',
				}}
			>
				{chunkArray(4, allAwards)?.map((row, rowIndex) => (
					<li
						className={cx(css.row, { [css.centered]: row.length < 4 })}
						key={rowIndex}
					>
						{row.map((award, index) => (
							<AwardItem {...award} key={index} />
						))}
					</li>
				))}
			</ul>
			{isOpen ? (
				<Button
					variant="next"
					iconRotate={180}
					className={cx(css.button, css.close)}
					onClick={() => toggleOpen(false)}
				>
					Сlose awards
				</Button>
			) : (
				<Button
					variant="next"
					iconRotate={180}
					className={css.button}
					onClick={() => toggleOpen(true)}
				>
					{buttonText ? parser(buttonText) : 'View all awards'}
				</Button>
			)}
		</Container>
	);
};
