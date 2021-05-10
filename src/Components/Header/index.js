import React from 'react';
import styled from 'styled-components';

import { FiHardDrive } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
	return (
		<Wrapper>
			<NavBar>
				<h1>
					<Logo>
						<LogoIcon />
						Devs.<Emphasis>Niro</Emphasis>
					</Logo>
				</h1>
				<NavLinks>
					<NavList>
						<NavLink>
							.<Emphasis>about</Emphasis>()
						</NavLink>
						{/* BLOG WILL BE ADDED LATER */}
						{/* <NavLink> */}
						{/* .<Emphasis>blog</Emphasis>() */}
						{/* </NavLink> */}
						<NavLink>
							.<Emphasis>projects</Emphasis>()
						</NavLink>
						<NavLink>
							.<Emphasis>contact</Emphasis>()
						</NavLink>
						<NavLink>
							<FaGithub />
						</NavLink>
						<NavLink>
							<FaLinkedin />
						</NavLink>
					</NavList>
				</NavLinks>
			</NavBar>
			<Content>
				<Text>
					<p>&#123;</p>
					<p>
						<Emphasis>"Header"</Emphasis>: "Hello! I am
						<Emphasis> Niroshian Balasubramaniam</Emphasis>.",
					</p>
					<p>
						<Emphasis>"Location"</Emphasis>: Toronto, ON
					</p>
					<p>
						<Emphasis>"Summary"</Emphasis>: "Full-Stack Web
						Developer, Gamer, Puzzle Enthusiast",
					</p>
					See More...
					<p>&#125;</p>
				</Text>
			</Content>
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
const LogoIcon = styled(FiHardDrive)`
	color: var(--emphasis-color);

	margin: 0 0.25em;
`;

const Emphasis = styled.span`
	color: var(--emphasis-color);
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
`;

const NavLinks = styled.nav`
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

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	height: 100%;
`;

const Text = styled.div`
	margin: 20px;
`;
export default Header;
