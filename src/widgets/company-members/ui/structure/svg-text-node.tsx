const stripHtml = (html: string): string =>
	html
		.replace(/<[^>]*>/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&nbsp;/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();

const wrapWords = (text: string, maxChars: number): string[] => {
	const words = text.split(' ').filter(Boolean);
	const lines: string[] = [];
	let current = '';
	for (const word of words) {
		const test = current ? `${current} ${word}` : word;
		if (current && test.length > maxChars) {
			lines.push(current);
			current = word;
		} else {
			current = test;
		}
	}
	if (current) lines.push(current);
	return lines.length > 0 ? lines : [''];
};

type SvgTextNodeProps = {
	html: string;
	x: number;
	y: number;
	width: number;
	height: number;
	fontSize?: number;
	charWidthMultiplier?: number;
};

export const SvgTextNode = ({
	html,
	x,
	y,
	width,
	height,
	fontSize = 14,
	charWidthMultiplier = 0.55,
}: SvgTextNodeProps) => {
	const text = stripHtml(html);
	if (!text) return null;

	const maxChars = Math.max(1, Math.floor((width - 8) / (fontSize * charWidthMultiplier)));
	const lines = wrapWords(text, maxChars);
	const lineHeight = fontSize * 1.3;
	const totalTextHeight = lines.length * lineHeight;
	const baselineY = y + (height - totalTextHeight) / 2 + lineHeight * 0.8;
	const cx = x + width / 2;

	return (
		<text x={cx} y={baselineY} textAnchor="middle">
			{lines.map((line, i) => (
				<tspan
					key={i}
					x={cx}
					dy={i === 0 ? 0 : lineHeight}
					style={{
						fill: '#ffffff',
						fontSize: `${fontSize}px`,
						fontWeight: 500,
						fontFamily: 'inherit',
					}}
				>
					{line}
				</tspan>
			))}
		</text>
	);
};
