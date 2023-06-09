import { useState } from "react";
import styled from "styled-components";
import Captcha from "./Captcha";
import { CiDark } from "react-icons/ci";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	background-color: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.foreground};
`;

const Header = styled.header`
	display: flex;
	align-items: center;
`;

const SignupForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 400px;
`;

const FormInput = styled.input`
	width: 100%;
	padding: 10px;
	margin: 10px 0;
	border: none;
	border-bottom: ${(props) => props.theme.colors.inputBorder};
	background-color: ${(props) => props.theme.colors.inputBackground};
	color: ${(props) => props.theme.colors.foreground};
	font-size: 16px;
	&:focus {
		outline: none;
		border-bottom: ${(props) => props.theme.colors.inputFocusBorder};
	}
`;

const SubmitButton = styled.button`
	width: 100%;
	padding: 10px;
	margin: 10px 0;
	border: none;
	border-radius: 5px;
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.foreground};
	font-size: 16px;
	cursor: pointer;
`;
function Signup({ onSubmit, toggleTheme }) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [captchaValue, setCaptchaValue] = useState(false);

	function handleInputChange(event) {
		const { name, value } = event.target;

		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (captchaValue) {
			if (formData.confirmPassword === formData.password) onSubmit(formData);
			else alert("Passwords do not match !!");
		} else alert("Captcha entered wrong!!!");
	}

	function handleCaptchaChange(value) {
		setCaptchaValue(value);
	}

	return (
		<Container>
			<Header>
				<h2>Sign Up</h2>
				<CiDark
					style={{ fontSize: "1.5rem", marginLeft: "1rem" }}
					onClick={() => toggleTheme()}
				/>
			</Header>
			<SignupForm onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='name'
					placeholder='Full Name'
					value={formData.name}
					onChange={handleInputChange}
					required
				/>
				<FormInput
					type='email'
					name='email'
					placeholder='Email'
					value={formData.email}
					onChange={handleInputChange}
					required
				/>
				<FormInput
					type='password'
					name='password'
					placeholder='Password'
					value={formData.password}
					onChange={handleInputChange}
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					placeholder='Confirm Password'
					value={formData.confirmPassword}
					onChange={handleInputChange}
					required
				/>
				<Captcha onChange={handleCaptchaChange} />

				<SubmitButton type='submit'>Sign Up</SubmitButton>
			</SignupForm>
		</Container>
	);
}

export default Signup;
