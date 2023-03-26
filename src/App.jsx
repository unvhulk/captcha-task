import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/Style";
import Signup from "./components/Signup";
import { CiDark } from "react-icons/ci";

function App() {
	const [theme, setTheme] = useState("light");

	function toggleTheme() {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	}

	function handleSignup(formData) {
		console.log(formData);
		alert("Form Submitted!!!");
	}

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<div className='App'>
				<Signup onSubmit={handleSignup} toggleTheme={toggleTheme} />
			</div>
		</ThemeProvider>
	);
}

export default App;
