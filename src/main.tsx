import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider as MuiThemeProvider, CssBaseline} from '@mui/material';
import {ThemeProvider as StyledThemeProvide} from 'styled-components';
import { theme } from "./theme";
import CSSStyles from './styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <StyledThemeProvide theme={theme}>
                <CssBaseline />
                <CSSStyles/>
                <App/>
            </StyledThemeProvide>
        </MuiThemeProvider>
    </React.StrictMode>,
)
