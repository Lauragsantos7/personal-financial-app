
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import UserProvider from "./context/UserProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
    <BrowserRouter>
    <UserProvider> 
      <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
