export type MemberProps = {
	name: string;
	image: string;
	position: string;
};

export type CompanyMembersSectionProps = {
	members: Array<MemberProps>;
};

export type CompanyMembersProps = CompanyMembersSectionProps;
