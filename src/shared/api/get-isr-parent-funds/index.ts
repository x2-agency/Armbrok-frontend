import axios from 'axios';

export const getIsrParentFunds = async () => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/fund-profixes?type=card&sort=rank:asc`
		);

		return response.data;
	} catch (error) {
		console.error(error);

		return { data: [] };
	}
};
