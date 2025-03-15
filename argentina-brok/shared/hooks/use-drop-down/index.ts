import { useEffect, useRef, useState } from 'react';

export const useDropdown = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			if (target.tagName === 'A' || target.closest('.close-menu-button')) {
				setIsOpen(false);
			}
		};

		const currentRef = dropdownRef.current;
		if (currentRef) {
			currentRef.addEventListener('click', handleClick);
		}

		return () => {
			if (currentRef) {
				currentRef.removeEventListener('click', handleClick);
			}
		};
	}, [dropdownRef, setIsOpen]);

	const toggleDropdown = () => {
		setIsOpen(prev => !prev);
	};

	const closeDropdown = () => {
		setIsOpen(false);
	};

	return {
		isOpen,
		dropdownRef,
		toggleDropdown,
		closeDropdown,
	};
};
