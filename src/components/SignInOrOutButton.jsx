import Router from "next/router";
import { getAuth, signOut } from "firebase/auth";

import "../utils/firebase/init"; // Initialize FirebaseApp
import { useAuthState } from "../hooks/useAuthState";

export const SignInOrOutButton = () => {
  const { isSignedIn } = useAuthState();

  if (isSignedIn) {
    return <button onClick={() => signOut(getAuth())}>Sign-out</button>;
  } else {
    return <button onClick={() => Router.push("/signIn")}>Sign-in</button>;
  }
};
