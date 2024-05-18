// src/components/GoogleSignInButton.js
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

const GoogleSignInButton = ({ onSuccess, onFailure }) => {
  useEffect(() => {
    const handleCredentialResponse = (response) => {
      if (response.credential) {
        const userObject = jwt_decode(response.credential);
        onSuccess(userObject);
      } else {
        onFailure("No credential response");
      }
    };

    window.google.accounts.id.initialize({
      client_id:
        "1090762780766-ghlqb1re0lt9o0utupvlk24be4k2hfn3.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      { theme: "outline", size: "large" }
    );

    window.google.accounts.id.prompt();
  }, [onSuccess, onFailure]);

  return <div id="googleSignInButton"></div>;
};

export default GoogleSignInButton;
