import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Loader from "./Components/loader/Loader";
const Navbar = lazy(() => import("./Components/navbar/Navbar"));
const Editor = lazy(() => import("./pages/editor/Editor"));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div className='App' id={`${darkMode ? `dark` : `light`}-mode`}>
      <Suspense
        fallback={
          <Loader />
        }
      >
        <Router>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Route path='/editor' exact component={Editor} />
          <Editor/>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
