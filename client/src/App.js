import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => (
  <Router forceRefresh={!supportsHistory}>
    <Header />
      <Main />
    <Footer />
  </Router>
);

const supportsHistory = 'pushState' in window.history;

export default App;
