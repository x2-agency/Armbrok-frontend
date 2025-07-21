'use client';

import parser from 'html-react-parser';

import { useDottedLinePosition } from '@/shared/hooks/use-dotted-line-position';
import { formatNumbersInText } from '@/shared/lib/format-utils';
import type { CompanyDetailProps } from '@/widgets/company-details-section/company-details.types';

import css from './index.module.css';

export const Detail = ({ title, description }: CompanyDetailProps) => {
	const { titleRef, descRef, dottedStyle } = useDottedLinePosition(description);

	const formattedDescription = description
		? formatNumbersInText(description)
		: '';

	return (
		<>
			<p ref={titleRef} className={css.text}>
				{parser(title ?? "")}
			</p>
			<span
				className={css.dotted}
				style={{ left: dottedStyle.left, width: dottedStyle.width }}
			/>
			{description && (
				<p ref={descRef} className={css.description}>
					{parser(formattedDescription)}
				</p>
			)}
		</>
	);
};
