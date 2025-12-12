import parser from 'html-react-parser';

import type { RegulationInternalsType } from '@/shared/types/regulations';
import { Container } from '@/shared/ui/container';
import { Document } from '@/shared/ui/document';

import css from './index.module.css';

export type RegulationInternalsProps = {
	data: RegulationInternalsType;
};

export const RegulationInternals = ({ data }: RegulationInternalsProps) => {
	const { title, content, file } = data;

	return (
		<Container className={css.root}>
			<div className={css.wrap}>
				<h2 className={css.title}>{parser(title ?? '')}</h2>
				<Document
					className={css.regulationFile}
					file={
						file?.url
							? {
									url: file.url,
								}
							: undefined
					}
				/>
			</div>
			{content && (
				<div className={css.titleBlock}>{content && parser(content)}</div>
			)}
		</Container>
	);
};
