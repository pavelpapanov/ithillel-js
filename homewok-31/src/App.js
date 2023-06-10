import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from "./ui/containers/ErrorBoundary";
import Header from "./ui/components/Header";
import Main from "./ui/pages/Main";
import Contacts from "./ui/pages/Contacts";
import About from "./ui/pages/About";

function App() {
  return (
      <ErrorBoundary>
        <BrowserRouter>
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </main>
        </BrowserRouter>
      </ErrorBoundary>
  )
}

export default App;