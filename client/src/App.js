import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <Router forceRefresh={!supportsHistory}>
    <ScrollToTop>
      <Header />
        <Main />
      <Footer />
    </ScrollToTop>
  </Router>
);

const supportsHistory = 'pushState' in window.history;

export default App;
