import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Emphasis } from '../StyledComponents';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NavLinks = () => {
	return (
		<Wrapper>
			<NavList>
				<NavLink>
					<Link to="about">
						.<Emphasis>about</Emphasis>()
					</Link>
				</NavLink>
				{/* BLOG WILL BE ADDED LATER */}
				{/* <NavLink> */}
				{/* .<Emphasis>blog</Emphasis>() */}
				{/* </NavLink> */}
				<NavLink>
					<Link to="projects">
						.<Emphasis>projects</Emphasis>()
					</Link>
				</NavLink>
				<NavLink>
					<Link to="contact">
						.<Emphasis>contact</Emphasis>()
					</Link>
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

const Wrapper = styled.div`
	display: none;

	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const NavList = styled.ul`
	list-style-type: none;
`;

const NavLink = styled.li`
	display: inline-block;

	padding: 0.75em 0.75em;
	color: var(--text-color);
	border-bottom: 1px solid transparent;

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

	&:active {
		color: var(--primary-color);
	}
`;

const ExternalLink = styled.a`
	color: var(emphasis-color);
	text-decoration: none;
`;

export default NavLinks;
