import cx from 'clsx';

import CrossSVG from '@/public/assets/icons/cross.svg';
import type { PropsWithClassname } from '@/shared/types/global.types';

import css from './index.module.css';

type FileListProps = PropsWithClassname & {
	removeFile: (arg: number) => void;
	files?: Array<File>;
};

export const FileList = ({ files, className, removeFile }: FileListProps) => {
	if (!files?.length) return null;

	return (
		<ul className={cx(css.root, className)}>
			{files.map((file, index) => (
				<li key={index} className={css.paragraph}>
					<span className={css.name}>{file.name}</span>
					<button
						type="button"
						onClick={() => removeFile(index)}
						className={css.removeButton}
					>
						<CrossSVG className={css.crossIcon} />
					</button>
				</li>
			))}
		</ul>
	);
};
