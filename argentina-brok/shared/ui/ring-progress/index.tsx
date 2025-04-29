type RingProgressProps = {
	size?: number;
	thickness?: number;
	value: number;
	color?: string;
	backgroundColor?: string;
	className?: string;
};

export const RingProgress = ({
	size = 100,
	thickness = 12,
	value,
	color = '#DF2C29',
	backgroundColor = '#ebebeb',
	className,
}: RingProgressProps) => {
	const radius = (size - thickness) / 2;
	const circumference = 2 * Math.PI * radius;
	const progress = Math.min(Math.max(value, 0), 100);
	const offset = circumference - (progress / 100) * circumference;

	return (
		<svg viewBox={`0 0 ${size} ${size}`} className={className}>
			<circle
				stroke={backgroundColor}
				fill="none"
				strokeWidth={thickness}
				r={radius}
				cx={size / 2}
				cy={size / 2}
			/>
			<circle
				stroke={color}
				fill="none"
				strokeWidth={thickness}
				strokeDasharray={circumference}
				strokeDashoffset={offset}
				r={radius}
				cx={size / 2}
				cy={size / 2}
				transform={`rotate(-90 ${size / 2} ${size / 2})`}
			/>
		</svg>
	);
};
