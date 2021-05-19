import React from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';
import ProjectData from './ProjectData';

const ProjectsSection = () => {
	return (
		<ProjectsContainer id="projects">
			<ProjectsWrapper>
				{ProjectData.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</ProjectsWrapper>
		</ProjectsContainer>
	);
};

export default ProjectsSection;

const ProjectsContainer = styled.section`
	background: var(--accent-background-color);

	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;

const ProjectsWrapper = styled.div`
	display: grid;
	column-gap: 2rem;
	row-gap: 3rem;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	z-index: 1;
	min-height: 900px;
	place-items: center;
`;
