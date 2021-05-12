import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Content from './Content';
import NavLinks from './NavLinks';

import { FaBars } from 'react-icons/fa';

const Header = () => {
	return (
		<HeaderWrapper>
			<NavBar>
				<h1>
					<Logo />
				</h1>
				<MobileIcon>
					<FaBars />
				</MobileIcon>
				<NavLinks />
			</NavBar>
			<Content />
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.header`
	height: 100vh;

	position: relative;
`;

const NavBar = styled.nav`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;

	background: var(--accent-background-color);

	position: fixed;
	top: 0px;

	width: 100%;

	padding: 0.875em 1em;

	font-size: 1.25rem;
`;

const MobileIcon = styled.div`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 60%);
	font-size: 1.8rem;
	cursor: pointer;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export default Header;
