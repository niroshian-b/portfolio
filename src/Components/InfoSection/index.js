import React from 'react';
import styled from 'styled-components';
import devImg from '../../images/app-dev.svg';

const InfoSection = () => {
	return (
		<InfoContainer id="about">
			<InfoWrapper>
				<InfoRow>
					<ImgCol>
						<ImgWrap>
							{/* WILL CHANGE TO IMAGES SHOWCASING MYSELF */}
							<Img src={devImg} alt="app-development"></Img>
						</ImgWrap>
					</ImgCol>
					<TextCol>
						<TextWrapper>
							<TopLine>Niro</TopLine>
							<Heading>.about()</Heading>
							<TextBody>
								Recent full-stack development graduate who has a
								love for programming and is known for being
								reliable. Started programming in 6th grade and
								has found it's changed the way he analyzes
								problems with a logical flow. Loves solving
								logical puzzles and shows passion for learning
								anything new. Changing careers from specializing
								in retail sales, helps him work well under
								pressure while continually learning about new
								products, technologies, and standards in the
								industry.
							</TextBody>
						</TextWrapper>
					</TextCol>
				</InfoRow>
			</InfoWrapper>
		</InfoContainer>
	);
};

export default InfoSection;

const InfoContainer = styled.section`
	background: var(--background-color);

	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;

const InfoWrapper = styled.div`
	display: grid;
	z-index: 1;
	min-height: 900px;
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 1.5rem;
	justify-content: center;
`;

export const InfoRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: 'col1 col2';

	@media screen and (max-width: 768px) {
		grid-template-areas: 'col1' 'col2';
	}
`;

export const ImgCol = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`;

export const TextCol = styled(ImgCol)`
	grid-area: col2;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
`;

export const TopLine = styled.h2`
	font-size: 1rem;
	line-height: 1rem;
	font-weight: 700;
	letter-spacing: 1.4px;
	margin-bottom: 1rem;
`;

export const Heading = styled.h3`
	margin-bottom: 1.5rem;
	font-size: 2rem;
	line-height: 1.1;
	font-weight: 600;
	color: var(--primary-color);

	@media screen and (max-width: 480px) {
		font-size: 1.5rem;
	}
`;

export const TextBody = styled.p`
	max-width: 440px;
	margin-bottom: 2rem;
	font-size: 1.125rem;
	line-height: 1.5rem;
	color: var(--secondary-color);
`;

export const ImgWrap = styled.div`
	max-width: 550px;
	min-height: 100%;
`;

export const Img = styled.img`
	width: 100%;
	margin-bottom: 0.625rem;
`;
