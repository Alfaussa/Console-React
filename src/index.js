import React from 'react';
 import ReactDOM from 'react-dom/client';
 import './index.css';
 import App from './App';
 import reportWebVitals from './reportWebVitals';
 import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';

 const Global = createGlobalStyle`
 * {
   margin:0;
   padding:0;
   box-sizing: border-box;
   font-family: Courier;
 }`

 const theme ={
   colors: {
     primary:"green",
     secondary:"red",
   },
   media: {
     phone: "max-width: 425px",
     tablet: "(max-width: 768px) and (min-width: 425px)",
   }
 }



 const container = document.getElementById('root');
 const root = ReactDOM.createRoot(container);
 root.render(
     <ThemeProvider theme={theme}>
     <Global />
     <App />
     </ThemeProvider>
      );

 reportWebVitals();
