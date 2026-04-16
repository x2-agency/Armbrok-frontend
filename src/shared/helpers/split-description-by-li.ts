export const splitDescriptionByLi = (html: string, visibleCount = 3) => {
	if (!html) {
		return { firstPart: '', restPart: '' };
	}

	const ulMatch = html.match(/<ul\b[^>]*>([\s\S]*?)<\/ul>/i);

	if (!ulMatch || ulMatch.index === undefined) {
		return { firstPart: html, restPart: '' };
	}

	const ulOpenTag = ulMatch[0].match(/^<ul\b[^>]*>/i)?.[0] ?? '<ul>';
	const innerContent = ulMatch[1];
	const liMatches = innerContent.match(/<li\b[^>]*>[\s\S]*?<\/li>/gi) ?? [];

	const firstLis = liMatches.slice(0, visibleCount);
	const restLis = liMatches.slice(visibleCount);

	const beforeUl = html.slice(0, ulMatch.index);

	const firstPart =
		beforeUl +
		(firstLis.length ? `${ulOpenTag}${firstLis.join('')}</ul>` : '');
	const restPart = restLis.length
		? `${ulOpenTag}${restLis.join('')}</ul>`
		: '';

	return { firstPart, restPart };
};
