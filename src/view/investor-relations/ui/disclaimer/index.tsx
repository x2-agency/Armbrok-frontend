'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useState } from 'react';

import { splitDescriptionByLi } from '@/shared/helpers/split-description-by-li';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

type DisclaimerProps = {
	title?: string;
	description?: string;
};

export const Disclaimer = ({ title, description }: DisclaimerProps) => {
	const [isOpen, toggleOpen] = useState(false);

	if (!(title && description)) return null;

	const { firstPart, restPart } = splitDescriptionByLi(description, 3);

	return (
		<section className={css.root}>
			<h3 className={css.title}>{title}</h3>

			<details className={css.details} open={isOpen}>
				<summary className={css.summary} onClick={e => e.preventDefault()}>
					{parser(firstPart)}

					{isOpen ? (
						<Button
							variant="next"
							iconRotate={180}
							className={cx(css.button, css.close)}
							onClick={() => toggleOpen(false)}
						>
							Collapse
						</Button>
					) : (
						<Button
							variant="next"
							iconRotate={180}
							className={css.button}
							onClick={() => toggleOpen(true)}
						>
							Show more
						</Button>
					)}
				</summary>
			</details>

			<div className={css.accordionContent} role="definition">
				<div className={css.accordionContentBody}>
					<div className={css.accordionInnerContent}>
						{restPart && parser(restPart)}
					</div>
				</div>
			</div>
		</section>
	);
};
