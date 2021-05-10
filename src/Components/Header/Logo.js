import React from 'react';
import styled from 'styled-components';

import { FiHardDrive } from 'react-icons/fi';
import { Emphasis } from '../StyledComponents';

const Logo = () => {
	return (
		<Wrapper>
			<Icon />
			Devs.<Emphasis>Niro</Emphasis>
		</Wrapper>
	);
};

export default Logo;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Icon = styled(FiHardDrive)`
	color: var(--emphasis-color);

	margin: 0 0.25em;
`;
