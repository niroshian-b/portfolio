import React from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
	return (
		<ProjectsContainer id="projects">
			<ProjectsWrapper>
				<ProjectCard />
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
	z-index: 1;
	min-height: 900px;
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 1.5rem;
	place-items: center;
`;
