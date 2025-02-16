export type MemberProps = {
	name: string;
	image: string;
	position: string;
	content: Array<{ title: string; content: string }>;
};

export type CompanyMembersSectionProps = {
	members: Array<MemberProps>;
};

export type CompanyMembersProps = CompanyMembersSectionProps;
