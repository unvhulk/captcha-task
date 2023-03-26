// import React from "react";
// import SignupForm from "./components/Signup";
// import "./App.css";

// function App() {
// 	return <SignupForm />;
// }

// export default App;
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/Style";
import Signup from "./components/Signup";
import Captcha from "./components/Captcha";

function App() {
	const [theme, setTheme] = useState("light");
	const [captchaValue, setCaptchaValue] = useState("");

	function toggleTheme() {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	}

	function handleCaptchaChange(value) {
		setCaptchaValue(value);
	}

	function handleSignup(formData) {
		console.log(formData);
	}

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<div className='App'>
				<header>
					<button onClick={toggleTheme}>Toggle Theme</button>
				</header>
				<Signup onSubmit={handleSignup} />
			</div>
		</ThemeProvider>
	);
}

export default App;
