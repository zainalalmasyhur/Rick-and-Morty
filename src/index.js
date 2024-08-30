import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Pastikan path ini sesuai dengan lokasi file apolloClient.js

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
