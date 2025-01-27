import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"; // Caminho do componente de Login
import ForgetPassword from "./pages/ForgetPassword";  // Caminho do componente de Recuperação de Senha
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rota para a página de Login */}
          <Route path="/" element={<Login />} />

          {/* Rota para a página de Recuperação de Senha */}
          <Route path="/esqueceu-sua-senha" element={<ForgetPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
