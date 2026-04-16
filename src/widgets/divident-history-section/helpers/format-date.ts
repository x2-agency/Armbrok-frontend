export const formatDate = (timeStamp: number | string) => {
	const date = new Date(timeStamp);
	const day = String(date.getUTCDate()).padStart(2, '0');
	const month = String(date.getUTCMonth() + 1).padStart(2, '0');
	const year = date.getUTCFullYear();
	return `${day}/${month}/${year}`;
};
