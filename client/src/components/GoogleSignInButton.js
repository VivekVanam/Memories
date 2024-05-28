import { useEffect } from "react";
import jwt_decode from "jwt-decode"; // Import the jwt-decode library to decode the token
// This component is a Google Sign-In button that uses the Google Identity Services API
const GoogleSignInButton = ({ onSuccess, onFailure }) => {
  useEffect(() => {
    // This useEffect hook will run once when the component is mounted
    const handleCredentialResponse = (response) => {
      if (response.credential) {
        // If the response contains a credential
        const userObject = jwt_decode(response.credential); // Decode the token to get the user object
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
          }) // Store the user object in local storage
        );
      } else {
        onFailure("No credential response");
      }
    };

    window.google.accounts.id.initialize({
      client_id:
        "1090762780766-ghlqb1re0lt9o0utupvlk24be4k2hfn3.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    }); // Initialize the Google Identity Services API

    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      { theme: "outline", size: "large" }
    ); // Render the Google Sign-In button

    window.google.accounts.id.prompt();
  }, [onSuccess, onFailure]);

  return <div id="googleSignInButton"></div>;
};

export default GoogleSignInButton;
