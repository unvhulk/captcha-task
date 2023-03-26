import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.foreground};
    font-family: sans-serif;
  }
`;

export const lightTheme = {
	colors: {
		background: "#f0f0f0",
		foreground: "#333",
		inputBackground: "#fff",
		inputBorder: "1px solid #ccc",
		inputFocusBorder: "2px solid #0077cc",
		captchaBackground: "#fff",
		captchaForeground: "#333",
		primary: "#0077cc",
	},
};

export const darkTheme = {
	colors: {
		background: "#333",
		foreground: "#f0f0f0",
		inputBackground: "#555",
		inputBorder: "1px solid #222",
		inputFocusBorder: "2px solid #0077cc",
		captchaBackground: "#444",
		captchaForeground: "#fff",
		primary: "#0077cc",
	},
};
