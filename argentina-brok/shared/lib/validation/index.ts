interface ValidationRule {
	first_name: {
		value: RegExp;
		message: string;
	};
	last_name: {
		value: RegExp;
		message: string;
	};
	email: {
		value: RegExp;
		message: string;
	};
}

export const getValidationRules = (
	type: 'email' | 'first_name' | 'last_name',
	required = true
) => {
	const validationRules = {
		email: {
			required,
			pattern: {
				value: VALID_DATA.email.value,
				message: VALID_DATA.email.message,
			},
		},
		first_name: {
			required,
			pattern: {
				value: VALID_DATA.first_name.value,
				message: VALID_DATA.first_name.message,
			},
		},
		last_name: {
			required,
			pattern: {
				value: VALID_DATA.last_name.value,
				message: VALID_DATA.last_name.message,
			},
		},
	};

	return validationRules[type] || { required: true };
};

export const VALID_DATA: ValidationRule = {
	first_name: {
		value: /^[а-яА-ЯёЁa-zA-Z'\s-]{2,}$/u,
		message: 'Неправильно заполнено поле',
	},
	last_name: {
		value: /^[а-яА-ЯёЁa-zA-Z'\s-]{2,}$/u,
		message: 'Неправильно заполнено поле',
	},
	email: {
		value: /^(?!\s)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
		message: 'Введите корректный email',
	},
};
