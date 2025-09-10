/* eslint-disable @typescript-eslint/no-explicit-any */

import cx from 'clsx';
import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';

import AttachmentSVG from '@/public/assets/icons/attachment.svg';
import CrossSVG from '@/public/assets/icons/cross.svg';
import type { PropsWithClassname } from '@/shared/types/global.types';

import { MAX_FILES_TOTAL_SIZE } from './file-uploader.constants';
import css from './index.module.css';

type FileUploaderProps = PropsWithClassname & {
	name: string;
	control: Control<any>;
	multiplyFile?: boolean;
};

export const FileUploader = ({
	name,
	control,
	className,
	multiplyFile,
}: FileUploaderProps) => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const t = useTranslations('fileUploader');

	const {
		field: { value = [], onChange },
	} = useController({ name, control });

	const handleFiles = (files: FileList | null) => {
		if (!files) return;

		const newFiles = Array.from(files);

		if (multiplyFile) {
			const combinedFiles = [...value, ...newFiles];

			const newTotalSize = combinedFiles.reduce(
				(acc, file) => acc + file.size,
				0
			);

			if (newTotalSize > MAX_FILES_TOTAL_SIZE) {
				return;
			}

			onChange(combinedFiles);
		} else {
			const singleFileToAdd = newFiles[0];

			if (singleFileToAdd.size > MAX_FILES_TOTAL_SIZE) {
				return;
			}

			onChange([singleFileToAdd]);
		}
	};

	const removeFile = (index: number) => {
		const updated = value.filter((_: File, i: number) => i !== index);
		onChange(updated);
	};

	return (
		<div className={cx(css.root, className)}>
			<button
				type="button"
				onClick={() => inputRef.current?.click()}
				className={css.mainButton}
			>
				{parser(t('text'))}
				<AttachmentSVG className={css.iconAttachment} />
			</button>
			<input
				type="file"
				multiple={multiplyFile}
				ref={inputRef}
				aria-hidden="true"
				className={css.fileInput}
				onChange={e => handleFiles(e.target.files)}
				accept="image/*,application/pdf,.doc,.docx"
			/>

			{value.length > 0 && (
				<ul className={css.files}>
					{value.map((file: File, index: number) => (
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
			)}
		</div>
	);
};
