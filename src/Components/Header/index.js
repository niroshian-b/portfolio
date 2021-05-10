import React from 'react';
import styled from 'styled-components';

import { FiHardDrive } from 'react-icons/fi';

const Header = () => {
	return (
		<Wrapper>
			<Logo>
				<FiHardDrive />
				Niro<span>.data()</span>
			</Logo>

			<NavLinks>
				<nav>
					<NavBar>
						<NavLink>.about()</NavLink>
						<NavLink>.blog()</NavLink>
						<NavLink>.projects()</NavLink>
						<NavLink>.contact()</NavLink>
					</NavBar>
				</nav>
			</NavLinks>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.875em 1em;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
`;

const NavLinks = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NavBar = styled.ul`
	list-style-type: none;
`;

const NavLink = styled.li`
	display: inline;
	padding: 0.5em 0.625em;
	margin: 0.125em;
`;

export default Header;
