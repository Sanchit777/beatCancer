import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import {PrivyProvider} from '@privy-io/react-auth';
import App from "./App";

import "./index.css";
import { StateContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <PrivyProvider
      appId="cm4fnlont02yh99espxssmphz"
      config={{
        
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'dark',
      
        },
        // Create embedded wallets for users who don't have a wallet
       
      }}
    >
    <Router>
    <StateContextProvider>
    <App />
    </StateContextProvider>
    </Router>
      
    </PrivyProvider>
)