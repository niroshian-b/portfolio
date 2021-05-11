import React from 'react';
import styled from 'styled-components';
import { Emphasis } from '../StyledComponents';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NavLinks = () => {
	return (
		<Wrapper>
			<NavList>
				<NavLink>
					.<Emphasis>about</Emphasis>()
				</NavLink>
				{/* BLOG WILL BE ADDED LATER */}
				{/* <NavLink> */}
				{/* .<Emphasis>blog</Emphasis>() */}
				{/* </NavLink> */}
				<NavLink>
					<a>
						.<Emphasis>projects</Emphasis>()
					</a>
				</NavLink>
				<NavLink>
					.<Emphasis>contact</Emphasis>()
				</NavLink>
				<ExternalLink
					target="_blank"
					href="https://github.com/niroshian-b"
				>
					<NavLink>
						<FaGithub />
					</NavLink>
				</ExternalLink>
				<ExternalLink
					target="_blank"
					href="https://www.linkedin.com/in/niro-b/"
				>
					<NavLink>
						<FaLinkedin />
					</NavLink>
				</ExternalLink>
			</NavList>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NavList = styled.ul`
	list-style-type: none;
`;

const NavLink = styled.li`
	display: inline-block;

	padding: 0.75em 0.75em;
	color: var(--text-color);

	&:hover {
		cursor: pointer;
		color: var(--primary-color);
	}

	/* animation for NavLink */
	position: relative;

	&:before {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: var(--primary-color);
		visibility: hidden;
		transition: all 0.3s ease-in-out;
	}

	&:hover:before {
		visibility: visible;
		width: 100%;
	}
`;

const ExternalLink = styled.a`
	color: var(emphasis-color);
	text-decoration: none;
`;

export default NavLinks;
