import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { FiHardDrive } from 'react-icons/fi';
import { Emphasis } from '../StyledComponents';

const Logo = () => {
	return (
		<NavLink to="/">
			<Icon />
			Devs.<Emphasis>Niro</Emphasis>
		</NavLink>
	);
};

export default Logo;

const NavLink = styled(Link)`
	display: flex;
	align-items: center;
	cursor: pointer;
	color: var(--text-color);
	text-decoration: none;
`;

const Icon = styled(FiHardDrive)`
	color: var(--emphasis-color);

	margin: 0 0.25em;
`;
