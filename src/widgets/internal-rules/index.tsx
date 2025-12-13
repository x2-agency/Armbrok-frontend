import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { ButtonPage } from './ui/button-page';

export type InternalLinkType = { text?: string; link?: string };

export type InternalRulesType = {
	title?: string;
	links?: Array<InternalLinkType>;
};

export type InternalRulesProps = {
	internalRules?: InternalRulesType;
};
export const InternalRules = ({ internalRules }: InternalRulesProps) => {
	const { title, links } = internalRules || {};
	return (
		<Container className={cx(css.root)}>
			<h3 className={css.title} id="internal-rules">{parser(title ?? '')}</h3>
			<ButtonPage links={links} />
		</Container>
	);
};
