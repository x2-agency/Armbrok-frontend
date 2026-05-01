import cx from 'clsx';

import type { MediaData } from '@/shared/types/global.types';
import { Document } from '@/shared/ui/document';

import css from './index.module.css';

type FilesProps = {
	files: Array<MediaData>;
};

export const Files = ({
	files,
	className,
}: FilesProps & { className?: string }) => {
	const validFiles = files?.filter(f => f.file || f.link) ?? [];

	if (validFiles.length === 0) {
		return null;
	}

	return (
		<ul className={cx(css.root, className)}>
			{validFiles.map((file, index) => (
				<li key={index}>
					<Document
						columns={2}
						name={file.name}
						file={file.file}
						alternativeText={file.alternativeText}
						direction="row"
						lineClamp={2}
					/>
				</li>
			))}
		</ul>
	);
};
