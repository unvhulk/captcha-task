import { useState } from "react";
import styled from "styled-components";
import { BiRefresh } from "react-icons/bi";

const CaptchaBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.captchaBackground};
	color: ${(props) => props.theme.colors.captchaForeground};
	padding: 10px;
	border-radius: 5px;
	font-size: 1.4rem;
	width: 100%;
	max-width: 400px;
`;

const CaptchaContainer = styled.div``;
const CaptchaInputContainer = styled.div`
	display: flex;
	align-items: center;
`;

const CaptchaInput = styled.input`
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

function Captcha() {
	const [captcha, setCaptcha] = useState(generateCaptcha());
	const [input, setInput] = useState("");

	function generateCaptcha() {
		const chars =
			"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let code = "";
		for (let i = 0; i < 6; i++) {
			code += chars[Math.floor(Math.random() * chars.length)];
		}
		return code;
	}

	function handleCaptchaChange(event) {
		setInput(event.target.value);
	}

	return (
		<CaptchaBox>
			<CaptchaContainer>{captcha}</CaptchaContainer>
			<CaptchaInputContainer>
				<CaptchaInput
					type='text'
					placeholder='Enter the code above'
					value={input}
					onChange={handleCaptchaChange}
					required
				/>
				<BiRefresh onClick={() => setCaptcha(generateCaptcha())} />
			</CaptchaInputContainer>
		</CaptchaBox>
	);
}

export default Captcha;
