import cx from 'clsx';
import parser from 'html-react-parser';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Button } from '@/shared/ui/button';
import type { BannerBodyProps } from '@/widgets/banner-section/banner.types';
import { BannerAward } from '@/widgets/banner-section/ui/banner-award';
import { BannerPanel } from '@/widgets/banner-section/ui/banner-panel';

import css from './index.module.css';

export const BannerBody = ({ type, bodyData, className }: BannerBodyProps) => {
	const { toggleAccountModalOpen, setSubjectForm } = useLayoutContext();

	const handleClick = (subject: string) => {
		setSubjectForm(subject);
		toggleAccountModalOpen(true);
	};

	switch (type) {
		case 'profix':
			return (
				<div className={cx(css.root, className)}>
					<BannerPanel className={css.panel} {...bodyData.panel} />
				</div>
			);
		case 'about':
			return (
				<ul className={cx(css.root, className, css.awards)}>
					{bodyData.awards &&
						bodyData.awards.map((award, index) => (
							<li key={index}>
								<BannerAward
									itemIndex={award.itemIndex}
									title={award.title}
									description={award.description}
								/>
							</li>
						))}
				</ul>
			);
		case 'default':
			return (
				<div className={cx(css.root, className)}>
					<Button
						variant="filled"
						onClick={() => handleClick(bodyData.button.text ?? 'Open account')}
						category="big"
						className={css.button}
					>
						{parser(bodyData.button?.text ?? '')}
					</Button>
				</div>
			);

		default:
			return null;
	}
};
