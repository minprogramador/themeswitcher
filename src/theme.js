import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    primary: "#7159c1",
    fontColor: "#fff"
};

export const darkTheme = {
    primary: "#cecece",
    fontColor: "black"
};


export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${props => props.theme.primary};
    }

`;
