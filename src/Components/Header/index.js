import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Content from './Content';
import NavLinks from './NavLinks';

const Header = () => {
	return (
		<Wrapper>
			<NavBar>
				<h1>
					<Logo />
				</h1>
				<NavLinks />
			</NavBar>
			<Content />
		</Wrapper>
	);
};

const Wrapper = styled.header`
	height: 100vh;

	position: relative;
`;

const NavBar = styled.div`
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

export default Header;
