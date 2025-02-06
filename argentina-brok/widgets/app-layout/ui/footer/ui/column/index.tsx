import parser from 'html-react-parser';

import { NAVIGATION_TABLE_DATA } from '@/widgets/app-layout/ui/footer/model/footer.constants';

import css from './index.module.css';

export const Column = () => {
	return (
		<div className={css.root}>
			{NAVIGATION_TABLE_DATA.map(item => (
				<div key={item.id} className={css.column}>
					<h6 className={css.title}>{parser(item.title)}</h6>

					{item.column && (
						<div className={css.list}>
							{item.column.map(subItem => (
								<a
									href={subItem.href}
									key={subItem.id}
									className={css.listItem}
								>
									{parser(subItem.text)}
								</a>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};
