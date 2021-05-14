import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Emphasis, Primary } from '../StyledComponents';

const Content = () => {
	return (
		<Wrapper>
			<Text>
				<div>&#123;</div>
				<ObjectInterior>
					<div>
						<Emphasis>name</Emphasis>:
						<Emphasis> "Niroshian Balasubramaniam"</Emphasis>,
					</div>
					<div>
						<Emphasis>location</Emphasis>: &#123;{' '}
						<ObjectInterior>
							<div>
								<Primary>city</Primary>: "Toronto",
							</div>
							<div>
								<Primary>province</Primary>: "ON",
							</div>
							<div>
								<Primary>country</Primary>: "Canada"
							</div>
						</ObjectInterior>
						&#125;,
					</div>
					<div>
						<Emphasis>summary</Emphasis>: ["Full-Stack Web
						Developer", "Gamer", "Puzzle Enthusiast"],
					</div>
					<ScrollLink
						to="about"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
					>
						See More...
					</ScrollLink>
				</ObjectInterior>
				<div>&#125;</div>
			</Text>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	min-height: 100%;
`;
const Text = styled.div`
	margin: 20px;
`;

const ObjectInterior = styled.div`
	margin-left: 1em;
`;

const ScrollLink = styled(Link)`
	color: var(--primary-color);
	cursor: pointer;
`;
export default Content;
