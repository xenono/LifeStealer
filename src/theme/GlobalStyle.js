import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,*&{
        box-sizing: border-box;
    }
    html{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat',sans-serif;
        font-size: 62.5%;
    }
    body {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;