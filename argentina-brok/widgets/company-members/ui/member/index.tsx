'use client';

/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';
import { useState } from 'react';

import type { MemberProps } from '@/widgets/company-members/company-members.types';
import { MemberModal } from '@/widgets/company-members/ui/member-modal';

import css from './index.module.css';

export const Member = ({ name, image, position, content }: MemberProps) => {
	const [isModalOpen, toggleModalOpen] = useState<boolean>(false);

	return (
		<>
			<button className={css.root} onClick={() => toggleModalOpen(true)}>
				<img src={image} alt={name} className={css.image} />
				<header>
					<h3 className={css.name}>{parser(name)}</h3>
					<p className={css.position}>{parser(position)}</p>
				</header>
			</button>
			<MemberModal
				name={name}
				image={image}
				position={position}
				content={content}
				isModalOpen={isModalOpen}
				toggleModalOpen={toggleModalOpen}
			/>
		</>
	);
};
