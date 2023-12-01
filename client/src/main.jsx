import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    
    //  domain="dev-03ifqltxbr6nn0hn.us.auth0.com"
    //  clientId="RXlGXkr49Ev5MHpvAC6vKkZ4bVn11iwl"
    domain="dev-d3g607yop0b5788m.us.auth0.com"
    clientId="8tqv0qosr1bSgaHC30f4yB0lKVYmCduJ"
     authorizationParams={{
      // redirect_uri: "https://full-stack-real-estate-youtube-sooty.vercel.app"
      redirect_uri: "http://localhost:5173"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
