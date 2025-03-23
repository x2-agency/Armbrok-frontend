export const downloadFile = async (url: string, fileName: string) => {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error();
		}

		const blob = await response.blob();

		const downloadUrl = window.URL.createObjectURL(blob);

		const link = document.createElement('a');
		link.href = downloadUrl;
		link.download = fileName;
		document.body.appendChild(link);

		link.click();

		document.body.removeChild(link);
		window.URL.revokeObjectURL(downloadUrl);
	} catch (error) {
		console.error('Download file:', error);
	}
};
