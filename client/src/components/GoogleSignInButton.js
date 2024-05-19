import { useEffect } from "react";
import jwt_decode from "jwt-decode";

const GoogleSignInButton = ({ onSuccess, onFailure }) => {
  useEffect(() => {
    const handleCredentialResponse = (response) => {
      console.log("response in google sign in", response);
      if (response.credential) {
        const userObject = jwt_decode(response.credential);
        userObject.credential = response.credential; // Attach the token to the user object
        onSuccess(userObject);
        localStorage.setItem(
          "profile",
          JSON.stringify({
            result: {
              name: userObject.name,
              email: userObject.email,
              picture: userObject.picture,
              givenName: userObject.given_name,
              familyName: userObject.family_name,
            },
            token: response.credential,
          })
        );
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
