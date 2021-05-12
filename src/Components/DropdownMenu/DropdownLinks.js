import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Emphasis } from '../StyledComponents';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const DropdownLinks = () => {
	return (
		<Wrapper>
			<DropdownList>
				<DropdownLink>
					<Link to="about">
						.<Emphasis>about</Emphasis>()
					</Link>
				</DropdownLink>
				{/* BLOG WILL BE ADDED LATER */}
				{/* <DropdownLink> */}
				{/* .<Emphasis>blog</Emphasis>() */}
				{/* </DropdownLink> */}
				<DropdownLink>
					<Link to="projects">
						.<Emphasis>projects</Emphasis>()
					</Link>
				</DropdownLink>
				<DropdownLink>
					<Link to="contact">
						.<Emphasis>contact</Emphasis>()
					</Link>
				</DropdownLink>
				<ExternalLink
					target="_blank"
					href="https://github.com/niroshian-b"
				>
					<DropdownLink>
						<FaGithub />
					</DropdownLink>
				</ExternalLink>
				<ExternalLink
					target="_blank"
					href="https://www.linkedin.com/in/niro-b/"
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

const DropdownList = styled.ul``;

const DropdownLink = styled.li`
	padding: 0.75em 0.75em;
	color: var(--text-color);
	border-bottom: 1px solid transparent;
`;

const ExternalLink = styled.a`
	color: var(emphasis-color);
	text-decoration: none;
`;

export default DropdownLinks;
