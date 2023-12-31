import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
  html, body, #root {
    height: 100%;
    background-color: #FFFFFF;
    color: #000000;
    font-weight: 600;
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
    height: .7rem;
    width: .7rem;
  }

  ::-webkit-scrollbar-track {
    background: #FF97AE;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #FFDF8A;
    border: transparent;
    border-radius: 0.5rem;
  }
  
`;
