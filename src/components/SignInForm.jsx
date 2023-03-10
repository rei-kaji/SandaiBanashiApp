import {
  getAuth,
  EmailAuthProvider,
  // FacebookAuthProvider,
  GoogleAuthProvider,
  // TwitterAuthProvider,
} from "firebase/auth";
// import { auth } from "firebaseui";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import "../utils/firebase/init"; // Initialize FirebaseApp

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    // FacebookAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
    // TwitterAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "/",
};

export const SignInForm = () => {
  return <StyledFirebaseAuth firebaseAuth={getAuth()} uiConfig={uiConfig} />;
};
