export const splitDescriptionByLi = (html: string, visibleCount = 3) => {
	if (!html) {
		return { firstPart: '', restPart: '' };
	}

	if (typeof window === 'undefined') {
		return { firstPart: html, restPart: '' };
	}

	const domParser = new DOMParser();
	const doc = domParser.parseFromString(html, 'text/html');

	const p = doc.querySelector('p');
	const ul = doc.querySelector('ul');

	if (!ul) {
		return { firstPart: html, restPart: '' };
	}

	const lis = Array.from(ul.querySelectorAll('li'));

	const firstLis = lis.slice(0, visibleCount);
	const restLis = lis.slice(visibleCount);

	const firstUl = ul.cloneNode(false) as HTMLUListElement;
	firstLis.forEach(li => firstUl.appendChild(li.cloneNode(true)));

	const restUl = ul.cloneNode(false) as HTMLUListElement;
	restLis.forEach(li => restUl.appendChild(li.cloneNode(true)));

	const firstPart =
		(p ? p.outerHTML : '') + (firstLis.length ? firstUl.outerHTML : '');
	const restPart = restLis.length ? restUl.outerHTML : '';

	return { firstPart, restPart };
};
