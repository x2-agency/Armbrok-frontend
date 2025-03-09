'use client';

import cx from 'clsx';
import { useRef } from 'react';

import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export type LoadNextProps = {
	className?: string;
	fetchNextPage: () => void;
	isFetching: boolean;
	hasNextPage?: boolean;
};

export const LoadNext = ({
	className,
	fetchNextPage,
	isFetching,
	hasNextPage,
}: LoadNextProps) => {
	const loadMoreRef = useRef(null);

	const handleClick = () => {
		if (!isFetching) {
			fetchNextPage();
		}
	};

	if (!hasNextPage) {
		return null;
	}

	return (
		<div ref={loadMoreRef} className={cx(css.root, className)}>
			<Button
				type="button"
				variant="next"
				iconRotate={180}
				onClick={handleClick}
				disabled={isFetching}
			>
				Show more
			</Button>
		</div>
	);
};
