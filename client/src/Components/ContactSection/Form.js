import React from 'react';
import styled from 'styled-components';

const Form = () => {
	return (
		<FormWrapper>
			<ContactForm>
				<FormHeading>Contact Niro</FormHeading>
				<SubText>
					If you have any inquiries or requests feel free to contact
					Niro
				</SubText>

				<FormGroup>
					<Input type="text" id="fullName" name="fullName" required />
					<Label htmlFor="fullName">
						<ContentName>Name</ContentName>
					</Label>
				</FormGroup>
				<FormGroup>
					<Input type="email" id="email" name="email" required />
					<Label htmlFor="email">
						<ContentName>Email Address</ContentName>
					</Label>
				</FormGroup>
				<FormGroup>
					<Input name="message" type="text" required />
					<Label htmlFor="message">
						<ContentName>Message</ContentName>
					</Label>
				</FormGroup>
				<Button type="submit">Submit</Button>
			</ContactForm>
		</FormWrapper>
	);
};

export default Form;

const FormWrapper = styled.div`
	max-width: 758px;
	margin: auto;
	border: 10px solid var(--emphasis-color);
	background-color: var(--accent-background-color);
	padding: 80px 100px;
`;
const ContactForm = styled.form``;

const FormHeading = styled.h3`
	text-transform: uppercase;
	font-size: 45px;
	text-align: center;
	margin-bottom: 0.75rem;
`;

const SubText = styled.p`
	text-align: center;
	margin-bottom: 3.375rem;
	padding: 0 0.625rem;
`;

const FormGroup = styled.div`
	position: relative;
	height: 75px;
	margin-bottom: 1rem;
	overflow: hidden;
`;

const Input = styled.input`
	width: 100%;
	height: 100%;
	font-size: 15px;
	padding-top: 40px;
	border: none;
	outline: none;
	background-color: var(--accent-background-color);
	color: var(--emphasis-color);
`;

const Label = styled.label`
	color: var(--primary-color);
	position: absolute;
	bottom: 0px;
	left: 0%;
	width: 100%;
	height: 100%;
	pointer-events: none;
	border-bottom: 2px solid var(--primary-color);

	&:after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;

		height: 100%;
		width: 100%;
		border-bottom: 3px solid var(--emphasis-color);
		transform: translateX(-100%);
		transition: all 500ms ease;

		${Input}:focus + &,
        ${Input}:valid + & {
			transform: translateX(0%);
		}
	}
`;

const ContentName = styled.span`
	position: absolute;
	bottom: 5px;
	left: 0px;
	transition: all 500ms ease;
	transform: translateY(-150%);

	${Input}:focus + ${Label} &, 
    ${Input}:valid  + ${Label} & {
		color: var(--emphasis-color);
	}
`;

const Button = styled.button`
	text-transform: uppercase;
	font-weight: 600;
	background-color: var(--primary-color);
	color: var(--accent-background-color);
	padding: 0.5em 1.25em;
	margin: 1em 0;
	border: 2px solid var(--primary-color);
	border-radius: 0.25rem;

	transition: all 500ms ease;

	&:hover {
		border-color: var(--emphasis-color);
		background-color: var(--accent-background-color);
		color: var(--emphasis-color);
	}
`;
