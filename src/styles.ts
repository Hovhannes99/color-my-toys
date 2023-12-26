import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
  html, body, #root {

    background-color: #FFFFFF;
    color: #000000;
    font-weight: 400;
    letter-spacing: 0.016rem;
    font-family: 'Inter',serif;
  }


  *, *:before, *:after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: rgba(0,0,0,0.5) transparent;
  }

  :focus, :active {
    outline: none;
  }
  

  a, a:visited, a:hover {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    height: 1rem;
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.1);
    border: 0.1rem solid #29313E;
    border-radius: 0.5rem;
  }
  
`;
