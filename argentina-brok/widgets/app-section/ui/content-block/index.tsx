import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';
import { STORE_LINKS } from '@/widgets/app-layout/models/social.constants';
import { Social } from '@/widgets/app-layout/ui/footer/social-links/social';

import css from './index.module.css';

export type ContentProp = {
	IconSvg?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	title?: string;
	description?: string;
	button?: string;
	preview?: string;
};

export const ContentBlock = ({
	IconSvg,
	title,
	description,
	button,
	preview,
}: ContentProp) => {
	return (
		<div className={css.root}>
			{IconSvg && <IconSvg className={css.icon} />}
			{title && <h2 className={css.title}>{title ?? ''}</h2>}
			{description && <p className={css.description}>{parser(description)}</p>}
			<div className={css.bottomWrap}>
				{button && (
					<Button
						className={css.button}
						category="big"
						variant="filled"
						href="/brokerage"
					>
						{button}
					</Button>
				)}
				<div className={css.app}>
					{preview && <p className={css.preview}>{parser(preview)}</p>}
					<Social className={css.store} items={STORE_LINKS} />
				</div>
			</div>
		</div>
	);
};
