export const formatFileExt = (file?: { name?: string; ext?: string }) => {
	if (!file) return '';
	const ext = file.ext ?? file.name?.split('.').pop();
	return ext ? ext.replace('.', '').toUpperCase() : '';
};
