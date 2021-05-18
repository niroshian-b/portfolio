import React from 'react';
import styled from 'styled-components';
// {
// title: 'Project Title',
// desc: 'Project Description',
// techUsed: ['List', 'of', 'Strings', 'of', 'Technology', 'Used'],
// img: require('path to img'),
// link: 'link to live project or github repo',
// }
const ProjectCard = ({ title, desc, techUsed, img, link }) => {
	return (
		<CardWrapper style={{ backgroundImage: `url(${img})` }}>
			<CardContent>
				<ProjectTitle className="project-title">{title}</ProjectTitle>
				<ProjectDescription>{desc}</ProjectDescription>
				<ProjectTech>
					Technology used: {techUsed.map((tech) => `${tech}, `)}
				</ProjectTech>
				<ProjectLink target="_blank" href={link}>
					See More
				</ProjectLink>
			</CardContent>
		</CardWrapper>
	);
};

export default ProjectCard;

const CardWrapper = styled.div`
	color: var(--text-color);
	background-color: var(--background-color);
	background-blend-mode: lighten;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	padding: 20rem 0 0;
	max-width: 35ch;
	border-radius: 0.5rem;
	overflow: hidden;

	transition: transform 500ms ease;

	&:hover,
	&:focus-within {
		transform: scale(1.05);
	}
`;

const CardContent = styled.div`
	--padding: 1.5rem;
	padding: var(--padding);
	background: linear-gradient(
		hsl(0 0% 0% / 0),
		hsl(20 0% 0% / 0.5) 5%,
		hsl(0 0% 0% / 1)
	);

	transform: translateY(75%);
	transition: transform 500ms ease;

	${CardWrapper}:hover &, ${CardWrapper}:focus-within & {
		transform: translateY(0);
		transition-delay: 500ms;
	}

	${CardWrapper}:focus-within & {
		transition-duration: 0ms;
	}

	& > *:not(.project-title) {
		opacity: 0;
		transition: opacity 500ms ease;
	}

	${CardWrapper}:hover & > *:not(.project-title),
	${CardWrapper}:focus-within & > *:not(.project-title) {
		opacity: 1;
		transition-delay: 750ms;
	}

	${CardWrapper}:focus-within & > *:not(.project-title) {
		transition-delay: 250ms;
	}
`;

const ProjectTitle = styled.h2`
	position: relative;
	margin-bottom: 10px;
	max-width: max-content;
	text-shadow: 4px 4px 8px black;
	text-transform: capitalize;

	&:after {
		content: '';
		position: absolute;
		height: 3px;
		width: calc(100% + var(--padding));
		left: calc(var(--padding) * -1);
		bottom: 0;
		background: var(--primary-color);
		transform: scaleX(0);
		transform-origin: left;

		transition: transform 500ms ease;
	}

	${CardWrapper}:hover &:after,
	${CardWrapper}:focus-within &:after {
		transform: scaleX(1);
	}
`;

const ProjectDescription = styled.p``;

const ProjectTech = styled.p`
	font-weight: bold;
	margin-top: 5px;
`;

const ProjectLink = styled.a`
	cursor: pointer;
	display: inline-block;
	text-decoration: none;
	text-transform: uppercase;
	font-weight: 600;
	background-color: var(--primary-color);
	color: var(--accent-background-color);
	padding: 0.5em 1.25em;
	margin: 1em 0;
	border-radius: 0.25rem;

	transition: all 500ms ease;

	&:hover {
		background-color: var(--accent-background-color);
		color: var(--primary-color);
	}
`;
