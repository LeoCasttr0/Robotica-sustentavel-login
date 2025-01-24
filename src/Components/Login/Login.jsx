import React, { useState } from "react";
import InputMask from "react-input-mask"; // Mascara do cpf
import { FaUser, FaLock } from "react-icons/fa"; // Icones
import Alert from "@mui/material/Alert"; // Alerta do Material-UI
import "./Login.css"; // Estilização

const Login = () => {
  // O useState deve estar dentro do componente
  const [cpf, setCpf] = useState(""); // cpf
  const [password, setPassword] = useState(""); //senha
  const [showAlert, setShowAlert] = useState(false); // Alerta

  const handleChange = (event) => {
    setCpf(event.target.value);
  };

  // Função de enviar o formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // se os campos estão vazios
    if (!cpf.trim() || !password.trim()) {
      setShowAlert(true); // Mostra o alerta
      return; // Impede o envio do formulário
    }

    //quando os campos estiverem preenchidos
    setShowAlert(false);
    // retirar este alerta
    alert("Enviando os dados: " + cpf + " - " + password);
  };

  return (
    <div className="container">
      {/* formulario */}
      <form onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>

        {/* input de cpf */}
        {/* conferir com o gabriel se esta ok */}
        <div className="input-field">
          <InputMask mask="999.999.999-99" value={cpf} onChange={handleChange}>
            {(inputProps) => (
              <input {...inputProps} placeholder="Digite seu CPF" />
            )}
          </InputMask>
          <FaUser className="icon" />
        </div>

        {/* input senha */}
        <div className="input-field">
          <input
            type="password"
            placeholder="Digite sua Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        {/* esqueceu a senha e lembrar */}
        <div className="recall-forget">
          <label htmlFor="">
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a Senha?</a>
        </div>

        {/* Mostra o alerta se os campos estiverem vazios */}
        {showAlert && (
          <Alert severity="error" style={{ marginBottom: "20px" }}>
            Preencha todos os campos antes de continuar!
          </Alert>
        )}
        {/* botao de entrar */}
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
