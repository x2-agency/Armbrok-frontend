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

	const toggleDropdown = () => {
		setIsOpen(prev => !prev);
	};

	const closeDropdown = () => {
		setIsOpen(false);
	};

	return {
		isOpen,
		toggleDropdown,
		closeDropdown,
		dropdownRef,
	};
};
