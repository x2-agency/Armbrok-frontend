import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';
import { NAVIGATION_TABLE_DATA } from '@/widgets/app-layout/ui/footer/model/footer.constants';

import css from './index.module.css';

export const NavigationColumn = () => {
	return (
		<nav className={css.root}>
			{NAVIGATION_TABLE_DATA.map(item => (
				<div key={item.id} className={css.column}>
					<h6 className={css.title}>{parser(item.title)}</h6>

					{item.column && (
						<ul className={css.list}>
							{item.column.map(subItem => (
								<li key={subItem.id}>
									<Button
										variant="subtle"
										href={subItem.href ?? ''}
										className={css.listItem}
									>
										{parser(subItem.text)}
									</Button>
								</li>
							))}
						</ul>
					)}
				</div>
			))}
		</nav>
	);
};
