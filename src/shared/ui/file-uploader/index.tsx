/* eslint-disable @typescript-eslint/no-explicit-any */

import cx from 'clsx';
import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';

import AttachmentSVG from '@/public/assets/icons/attachment.svg';
import type { PropsWithClassname } from '@/shared/types/global.types';

import { FileList } from './file-list';
import {
	ACCEPTED_FILES,
	LABEL_MAX_SIZE,
	MAX_FILES_TOTAL_SIZE,
} from './file-uploader.constants';
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
	const [isError, setError] = useState<boolean>(false);
	const t = useTranslations('fileUploader');

	const {
		field: { value = [], onChange },
	} = useController({ name, control });

	const handleFiles = (files: FileList | null) => {
		if (!files) return;

		const newFiles = Array.from(files);
		const combinedFiles = multiplyFile
			? [...value, ...newFiles]
			: [newFiles[0]];

		const newTotalSize = combinedFiles.reduce(
			(acc, file) => acc + file.size,
			0
		);

		if (newTotalSize > MAX_FILES_TOTAL_SIZE) {
			setError(true);
			return;
		}

		onChange(combinedFiles);
		setError(false);
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
				accept={ACCEPTED_FILES}
			/>
			{isError && (
				<span className={css.error}>
					{parser(t('sizeError') + ` ${LABEL_MAX_SIZE}MB`)}
				</span>
			)}
			<FileList files={value} removeFile={removeFile} />
		</div>
	);
};
