'use client';

/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';
import { useState } from 'react';

import type { Employee } from '@/shared/types/global.types';
import { MemberModal } from '@/widgets/company-members/ui/member-modal';

import css from './index.module.css';

export const Member = ({
	fullName,
	position,
	qualification,
	career,
	avatar,
}: Employee) => {
	const [isModalOpen, toggleModalOpen] = useState<boolean>(false);

	return (
		<>
			<button className={css.card} onClick={() => toggleModalOpen(true)}>
				<div className={css.imageWrapper}>
					<img src={avatar?.url} alt="company member" className={css.image} />
				</div>
				<div>
					{fullName && <h3 className={css.name}>{parser(fullName)}</h3>}
					{position && <p className={css.position}>{parser(position)}</p>}
				</div>
			</button>
			<MemberModal
				fullName={fullName}
				qualification={qualification}
				career={career}
				position={position}
				avatar={avatar}
				isModalOpen={isModalOpen}
				toggleModalOpen={toggleModalOpen}
			/>
		</>
	);
};
