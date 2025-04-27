'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export const useDottedLinePosition = (description?: string) => {
	const titleRef = useRef<HTMLParagraphElement>(null);
	const descRef = useRef<HTMLParagraphElement>(null);
	const [dottedStyle, setDottedStyle] = useState({
		left: '0%',
		width: '0%',
	});

	const updateDottedPosition = useCallback(() => {
		if (!titleRef.current || !descRef.current) return;

		const titleEl = titleRef.current;
		const descEl = descRef.current;
		const parentEl = titleEl.parentElement;

		if (!parentEl) return;

		const titleRange = document.createRange();
		titleRange.selectNodeContents(titleEl);
		titleRange.setStart(titleEl, 0);

		const titleText = titleEl.textContent || '';
		if (titleText.length > 0) {
			const lastTextNode = [...titleEl.childNodes]
				.reverse()
				.find(
					n => n.nodeType === Node.TEXT_NODE && n.textContent?.trim()
				) as Text;

			if (lastTextNode) {
				titleRange.setStart(lastTextNode, lastTextNode.textContent!.length - 1);
				titleRange.setEnd(lastTextNode, lastTextNode.textContent!.length);
			}
		}

		const titleRect = titleRange.getBoundingClientRect();
		const parentRect = parentEl.getBoundingClientRect();
		const startPos =
			((titleRect.right - parentRect.left) / parentRect.width) * 100;

		let endPos = 100;

		if (description && descEl.textContent?.trim()) {
			const textNodes = [];
			const walker = document.createTreeWalker(descEl, NodeFilter.SHOW_TEXT);

			while (walker.nextNode()) {
				const node = walker.currentNode as Text;
				if (node.textContent?.trim()) {
					textNodes.push(node);
				}
			}

			if (textNodes.length > 0) {
				const range = document.createRange();
				range.selectNodeContents(descEl);
				const textRects = range.getClientRects();

				if (textRects.length > 1) {
					const secondLineRect = textRects[1];
					endPos =
						((secondLineRect.left - parentRect.left) / parentRect.width) * 100;
				} else {
					const firstCharRange = document.createRange();
					firstCharRange.setStart(textNodes[0], 0);
					firstCharRange.setEnd(textNodes[0], 1);
					const firstCharRect = firstCharRange.getBoundingClientRect();
					endPos =
						((firstCharRect.left - parentRect.left) / parentRect.width) * 100;
				}
			}
		}

		setDottedStyle({
			left: `${startPos}%`,
			width: `${Math.max(0, endPos - startPos)}%`,
		});
	}, [description]);

	useEffect(() => {
		updateDottedPosition();

		const resizeObserver = new ResizeObserver(updateDottedPosition);
		if (titleRef.current) resizeObserver.observe(titleRef.current);
		if (descRef.current) resizeObserver.observe(descRef.current);
		if (titleRef.current?.parentElement)
			resizeObserver.observe(titleRef.current.parentElement);

		window.addEventListener('resize', updateDottedPosition);
		window.addEventListener('orientationchange', updateDottedPosition);

		const mutationObserver = new MutationObserver(updateDottedPosition);
		if (titleRef.current) {
			mutationObserver.observe(titleRef.current, {
				characterData: true,
				subtree: true,
			});
		}
		if (descRef.current) {
			mutationObserver.observe(descRef.current, {
				characterData: true,
				subtree: true,
			});
		}

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('resize', updateDottedPosition);
			window.removeEventListener('orientationchange', updateDottedPosition);
			mutationObserver.disconnect();
		};
	}, [updateDottedPosition]);

	return { titleRef, descRef, dottedStyle };
};
