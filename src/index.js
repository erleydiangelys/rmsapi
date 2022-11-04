import React from 'react';
import { Router } from './routes';
import { BrowserRouter} from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import Header from './Components/Header';
import ScrollPage from './Components/ScrollPage/index';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
    <BrowserRouter>
    <Header/>
    <Router/>
    <ScrollPage />
    </BrowserRouter>
    </ChakraProvider>
  </>
);
