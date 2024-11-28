import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./component/homepage";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import ChatBot from "./chatbot/chatbot";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/chatbot" element={<ChatBot/>} />

        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
