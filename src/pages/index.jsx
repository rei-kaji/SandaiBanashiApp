import App from "../components/App";
import { getApp } from "firebase/app";
// import { SignInForm } from "../components/SignInForm";

export default function Home() {
  const app = getApp();
  return (
    <App>
      <p>Index Page</p>
      <ul>
        <li>name = {app.name}</li>
        <li>appId = {app.options.appId}</li>
        <li>apiKey = {app.options.apiKey}</li>
      </ul>
    </App>
  );
}
