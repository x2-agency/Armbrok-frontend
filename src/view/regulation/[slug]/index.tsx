import type { DOMNode, Element } from 'html-react-parser';
import type { HTMLReactParserOptions } from 'html-react-parser';
import parser, { domToReact } from 'html-react-parser';

import type { RegulationInternalsType } from '@/shared/types/regulations';
import { Container } from '@/shared/ui/container';
import { Document } from '@/shared/ui/document';

import css from './index.module.css';

export type RegulationInternalsProps = {
	data: RegulationInternalsType;
};

const options: HTMLReactParserOptions = {
	replace(node) {
		if (node.type === 'tag' && node.name === 'li') {
			const parent = node.parent as Element | undefined;
			const grandParent = parent?.parent as Element | undefined;

			const isNestedOl = parent?.name === 'ol' && grandParent?.name === 'li';

			if (isNestedOl) {
				return (
					<li>
						<div className="nested-li-content">
							{domToReact(node.children as Array<DOMNode>, options)}
						</div>
					</li>
				);
			}
		}
	},
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
				<div className={css.titleBlock}>{parser(content, options)}</div>
			)}
		</Container>
	);
};
