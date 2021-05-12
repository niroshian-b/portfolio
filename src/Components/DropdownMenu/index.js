import React from 'react';
import styled from 'styled-components';
import { FaMinus } from 'react-icons/fa';
import DropdownLinks from './DropdownLinks';

const DropdownMenu = ({ isOpen, toggleIsOpen }) => {
	return (
		<DropdownContainer isOpen={isOpen}>
			<CloseIcon onClick={toggleIsOpen}>
				<FaMinus />
			</CloseIcon>
			<DropdownLinks />
		</DropdownContainer>
	);
};

const DropdownContainer = styled.aside`
	position: fixed;
	width: 100%;
	height: 100%;
	background: var(--accent-background-color);
	z-index: 999;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const CloseIcon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;

	&:hover {
		color: var(--primary-color);
	}
`;

export default DropdownMenu;
