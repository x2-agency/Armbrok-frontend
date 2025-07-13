/* eslint-disable import-x/no-named-as-default */
import cx from 'clsx';
import parser from 'html-react-parser';
import ReCAPTCHA from 'react-google-recaptcha';

import css from './index.module.css';

type CaptchaProps = {
	onChange?: () => void;
	className?: string;
	subtitle?: string;
};

const Captcha = ({ onChange, className, subtitle }: CaptchaProps) => {
	const siteKey = process.env.NEXT_PUBLIC_CAPTCHA_KEY ?? '';

	if (!siteKey) {
		return null;
	}

	return (
		<article className={cx(css.root, className)}>
			<ReCAPTCHA sitekey={siteKey} onChange={onChange} />
			{subtitle && <p className={css.subtitle}>{parser(subtitle)}</p>}
		</article>
	);
};

export default Captcha;
