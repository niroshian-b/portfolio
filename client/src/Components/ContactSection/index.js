import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const ContactSection = () => {
	return (
		<ContactContainer id="contact">
			<Form />
		</ContactContainer>
	);
};

export default ContactSection;

const ContactContainer = styled.section`
	padding: 40px;
	z-index: 1;
	min-height: 900px;
	width: 100%;
	background-color: var(--background-color);
`;
