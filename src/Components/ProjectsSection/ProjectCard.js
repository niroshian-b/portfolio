import React from 'react';
import styled from 'styled-components';

const ProjectCard = () => {
	return (
		<CardWrapper>
			<CardContent>
				<ProjectTitle>Pass The Dishes</ProjectTitle>
				<ProjectDescription>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					feugiat dolor nulla, sed suscipit lacus viverra sit amet.
					Mauris.
				</ProjectDescription>
				<ProjectLink href="#">Read More</ProjectLink>
			</CardContent>
		</CardWrapper>
	);
};

export default ProjectCard;

const CardWrapper = styled.div`
	color: var(--text-color);
	background-image: url('/assets/PassTheDishes-Capture.jpg');
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

	&:hover {
		transform: scale(1.05);
	}
`;

const CardContent = styled.div`
	--padding: 1.5rem;
	padding: var(--padding);
	background: linear-gradient(
		hsl(0 0% 0% / 0),
		hsl(20 0% 0% / 0.2) 10%,
		hsl(0 0% 0% / 1)
	);
`;

const ProjectTitle = styled.h2`
	position: relative;
	margin-bottom: 10px;
	max-width: max-content;
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

	${CardWrapper}:hover &:after {
		transform: scaleX(1);
	}
`;

const ProjectDescription = styled.p``;

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

	transition: background-color 500ms ease;

	&:hover {
		background-color: var(--accent-background-color);
		color: var(--primary-color);
	}

	&:focus {
	}
`;
