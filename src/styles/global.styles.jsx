import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box  ;
        padding: 0;
        margin: 0  ;
        font-family: 'Montserrat', sans-serif;
    }

    body{
        min-height:100hv;
    }
`;

export default GlobalStyle;
