'use client';

import cx from 'clsx';
import parser from 'html-react-parser';

import type { SecurityPaperItem } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import { Document } from '@/shared/ui/document';
import { usePlacementFiles } from '@/widgets/placements-section/hooks/use-placement-files';

import css from './index.module.css';

export type PlacementFilesProps = {
	files?: SecurityPaperItem['files'];
	columns?: number;
	fileDirection?: string;
	lineClamp?: number;
	showMoreButton?: string;
	showLessButton?: string;
	initialCount?: number;
};

export const PlacementFiles = ({
	files,
	columns = 2,
	fileDirection = '',
	lineClamp = 2,
	showMoreButton,
	showLessButton,
	initialCount = 2,
}: PlacementFilesProps) => {
	const {
		shouldRender,
		isOpen,
		handleToggle,
		contentHeight,
		contentRef,
		initialFiles,
		additionalFiles,
		shouldShowButton,
	} = usePlacementFiles(files, initialCount);

	if (!shouldRender) {
		return null;
	}

	const moreLabel = showMoreButton ? parser(showMoreButton) : 'Show more';
	const lessLabel = showLessButton ? parser(showLessButton) : 'Show less';
	const buttonLabel = isOpen ? lessLabel : moreLabel;

	return (
		<>
			<ul className={css.filesWrap}>
				{initialFiles?.map((file, key) => (
					<li key={key}>
						<Document
							columns={columns}
							name={file.name}
							file={file.file}
							label={file.label}
							alternativeText={file.alternativeText}
							direction={fileDirection}
							lineClamp={lineClamp}
						/>
					</li>
				))}
			</ul>

			{shouldShowButton && (
				<ul
					className={cx(css.filesWrap, css.additionalFiles, {
						[css.open]: isOpen,
					})}
					ref={contentRef}
					style={{
						maxHeight: isOpen ? `${contentHeight}px` : '0',
					}}
				>
					{additionalFiles.map((file, key) => (
						<li key={key}>
							<Document
								columns={columns}
								name={file.name}
								file={file.file}
								label={file.label}
								alternativeText={file.alternativeText}
								direction={fileDirection}
								lineClamp={lineClamp}
							/>
						</li>
					))}
				</ul>
			)}

			{shouldShowButton && (
				<Button
					variant="subtle"
					className={css.button}
					onClick={handleToggle}
					aria-expanded={isOpen}
				>
					{buttonLabel}
				</Button>
			)}
		</>
	);
};
