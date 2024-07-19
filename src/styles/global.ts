import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${props => props.theme.white};
        color: ${props => props.theme['gray-700']};
    }

    body, input, textarea, button {
        font-family: 'Roboto', 'Baloo 2';
        font-weight: 400;
        font-size: 1rem;
    }

`;