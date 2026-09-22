import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
    authority:
        "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_F7SREFccO",

    client_id: "1oncqn9ke80cbq41f3irnqtsk4",

    redirect_uri: "http://localhost:5173",

    response_type: "code",

    scope:
        "openid email profile https://api.peluchin.local/read https://api.peluchin.local/write",

    extraQueryParams: {
        resource: "https://api.peluchin.local"
    }
};

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider
            {...cognitoAuthConfig}
            onSigninCallback={() => {
                window.history.replaceState(
                    {},
                    document.title,
                    window.location.pathname
                );
            }}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AuthProvider>
    </StrictMode>
);