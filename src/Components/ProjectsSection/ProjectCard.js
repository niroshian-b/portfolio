import React from 'react';
import styled from 'styled-components';

const ProjectCard = () => {
	return (
		<CardWrapper>
			<ProjectTitle>Pass The Dishes</ProjectTitle>
			<ProjectDescription>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				feugiat dolor nulla, sed suscipit lacus viverra sit amet.
				Mauris.
			</ProjectDescription>
			<ProjectLink href="#"></ProjectLink>
		</CardWrapper>
	);
};

export default ProjectCard;

const CardWrapper = styled.div`
	color: white;
	background-image: url('');
`;

const ProjectTitle = styled.h2``;

const ProjectDescription = styled.p``;

const ProjectLink = styled.a``;
