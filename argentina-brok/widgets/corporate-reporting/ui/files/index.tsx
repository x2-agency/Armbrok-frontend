import type { MediaData } from '@/shared/types/global.types';
import { Document } from '@/shared/ui/document';

import css from './index.module.css';

type FilesProps = {
	files: Array<MediaData>;
};

export const Files = ({ files }: FilesProps) => {
	return (
		<ul className={css.root}>
			{files.map((file, index) => (
				<li key={index}>
					<Document
						columns={2}
						name={file.name}
						file={file.file}
						alternativeText={file.alternativeText}
						direction="row"
						lineClamp={1}
					/>
				</li>
			))}
		</ul>
	);
};
