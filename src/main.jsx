import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import './index.css'
const theme = extendTheme({
  fonts: {
    heading: "'Alice', serif",
    body: "'Alice', serif",
  },
  colors: {
    bg: "#ffffff",
    text: "#38a169",
    primary: "#007BFF",
    secondary: "#6C757D",
    hover: "#0056b3",
    white: "#FFFFFF",
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <App/>
    </ChakraProvider>
  </React.StrictMode>
);
