import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import LoginForm from './components/LoginForm';
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/loginForm" element={<LoginForm />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
