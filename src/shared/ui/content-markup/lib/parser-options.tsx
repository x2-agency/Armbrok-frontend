import type { DOMNode, HTMLReactParserOptions } from 'html-react-parser';
import { Element } from 'html-react-parser';

const isEmptyImage = (node: DOMNode): boolean =>
	node instanceof Element && node.tagName === 'img' && !node.attribs.src;

export const parserOptions: HTMLReactParserOptions = {
	replace: (node) => {
		if (!(node instanceof Element)) return;

		if (isEmptyImage(node)) return <></>;

		const isFigure = node.tagName === 'figure';
		const allImgEmpty = 	node.children.every(
			(child) =>
				!(child instanceof Element) || isEmptyImage(child as DOMNode),
		);

		if (isFigure && allImgEmpty || isEmptyImage(node)) {
			return <></>;
		}
	},
};
