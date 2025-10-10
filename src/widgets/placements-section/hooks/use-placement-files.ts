'use client';

import { useState, useRef, useEffect } from 'react';

import type { SecurityPaperItem } from '@/shared/types/global.types';

export const usePlacementFiles = (
	files?: SecurityPaperItem['files'],
	initialCount: number = 2
) => {
	const [isOpen, toggleOpen] = useState<boolean>(false);
	const [contentHeight, setContentHeight] = useState<number>(0);
	const contentRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (contentRef.current && files && files.length > initialCount) {
			setContentHeight(contentRef.current.scrollHeight);
		}
	}, [files, isOpen, initialCount]);

	const handleToggle = () => {
		toggleOpen(!isOpen);
	};

	if (!files || files.length === 0) {
		return {
			shouldRender: false,
		};
	}

	const initialFiles = files.slice(0, initialCount);
	const additionalFiles = files.slice(initialCount);
	const shouldShowButton = files.length > initialCount;

	return {
		shouldRender: true,
		isOpen,
		handleToggle,
		contentHeight,
		contentRef,
		initialFiles,
		additionalFiles,
		shouldShowButton,
	};
};
