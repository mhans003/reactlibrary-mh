import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Wrap the app in the provider for global state. This provides the entire app the global state (with user authentication).
import AuthProvider from "./Context/AuthContext";
import BookProvider from "./Context/BookContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BookProvider>
        <App />
      </BookProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
