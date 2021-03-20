import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800,900&display=swap');
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