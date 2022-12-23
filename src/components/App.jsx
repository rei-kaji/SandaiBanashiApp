import React from "react";
import Header from "./Header";
import "../utils/firebase/init"; // Initialize FirebaseApp

const App = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
);

export default App;
