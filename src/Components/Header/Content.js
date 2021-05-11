import React from 'react';
import styled from 'styled-components';
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
								<Primary>province</Primary>: "ON"
							</div>{' '}
						</ObjectInterior>
						&#125;,
					</div>
					<div>
						<Emphasis>summary</Emphasis>: ["Full-Stack Web
						Developer", "Gamer", "Puzzle Enthusiast"],
					</div>
					See More...
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

	height: 100%;
`;
const Text = styled.div`
	margin: 20px;
`;

const ObjectInterior = styled.div`
	margin-left: 1em;
`;
export default Content;
