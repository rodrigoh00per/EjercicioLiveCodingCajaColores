import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
        margin:0;
        padding:0;
        font-family: 'Montserrat', sans-serif;
	}
	
    *, *::after, *::before {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
        padding: 0;
    }
`;
