import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Emphasis } from '../StyledComponents';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const DropdownLinks = ({ toggleIsOpen }) => {
	return (
		<Wrapper>
			<DropdownList>
				<DropdownLink>
					<Link to="about" onClick={toggleIsOpen}>
						.<Emphasis>about</Emphasis>()
					</Link>
				</DropdownLink>
				{/* BLOG WILL BE ADDED LATER */}
				{/* <DropdownLink> */}
				{/* .<Emphasis>blog</Emphasis>() */}
				{/* </DropdownLink> */}
				<DropdownLink>
					<Link to="projects" onClick={toggleIsOpen}>
						.<Emphasis>projects</Emphasis>()
					</Link>
				</DropdownLink>
				<DropdownLink>
					<Link to="contact" onClick={toggleIsOpen}>
						.<Emphasis>contact</Emphasis>()
					</Link>
				</DropdownLink>
				<ExternalLink
					target="_blank"
					href="https://github.com/niroshian-b"
					onClick={toggleIsOpen}
				>
					<DropdownLink>
						<FaGithub />
					</DropdownLink>
				</ExternalLink>
				<ExternalLink
					target="_blank"
					href="https://www.linkedin.com/in/niro-b/"
					onClick={toggleIsOpen}
				>
					<DropdownLink>
						<FaLinkedin />
					</DropdownLink>
				</ExternalLink>
			</DropdownList>
		</Wrapper>
	);
};

const Wrapper = styled.div``;

const DropdownList = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(5, 7em);
	text-align: center;
`;

const DropdownLink = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	padding: 60px;

	color: var(--text-color);
	border-bottom: 1px solid transparent;
	font-size: 1.75rem;

	cursor: pointer;

	&:hover {
		color: var(--primary-color);
		transition: 0.2 ease-in-out;
	}
`;

const ExternalLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;

	color: var(--text-color);
	text-decoration: none;
`;

export default DropdownLinks;
