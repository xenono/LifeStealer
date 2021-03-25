import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,*&{
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;

    }
    html{
        margin: 0;
        padding: 0;
        font-size: 62.5%;
    }
    body {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;