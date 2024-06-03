import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1087494509533-2l54is02p0fgk6p312bpei6i7g7s4ae4.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

