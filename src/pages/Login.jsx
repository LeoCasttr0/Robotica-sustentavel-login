import React, { useState } from "react";
import { FaLock } from "react-icons/fa"; // Ícones
import AlertMessage from "../Components/AlertMessage"; // Alerta de mensagem
import { Link } from "react-router-dom"; // React Router para navegação
import "../styles/Login.css"; // Estilos
import MaskedInputCpf from "../Components/MaskedInputCpf";

const Login = () => {
  const [cpf, setCpf] = useState(""); // Estado para o CPF
  const [password, setPassword] = useState(""); // Estado para a senha
  const [showAlert, setShowAlert] = useState(false); // Alerta para campos vazios
  const [showCpfAlert, setShowCpfAlert] = useState(false); // Alerta para CPF inválido

  // Função de validação de CPF
  const validarCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, ""); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false; // Verifica se tem 11 dígitos e se não são todos iguais no cpf
    }

    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf[i - 1]) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf[i - 1]) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[10])) return false;

    return true;
  };

  // Função de envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!cpf.trim() || !password.trim()) {
      setShowAlert(true); // Exibe o alerta de aviso se os campos estiverem vazios
      setShowCpfAlert(false);
      return;
    }

    if (!validarCPF(cpf)) {
      setShowCpfAlert(true); // Exibe o alerta de CPF inválido caso nao cumpmra os requisitos
      setShowAlert(false);
      return;
    }

    setShowAlert(false);
    setShowCpfAlert(false);
    alert("Enviando os dados: " + cpf + " - " + password); //aqui o backend pode implementar
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o Eco Manager</h1>

        {/* Campo de CPF */}
        <div className="input-field">
          <MaskedInputCpf cpf={cpf} setCpf={setCpf} />
        </div>

        {/* Campo de Senha */}
        <div className="input-field">
          <input
            type="password"
            placeholder="Digite sua Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        {/* Lembre-se de mim e Esqueceu a Senha */}
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <Link to="/esqueceu-sua-senha">Esqueceu a Senha?</Link>
        </div>

        {/* Alerta para campos vazios */}
        {showAlert && (
          <AlertMessage
            message="Preencha todos os campos antes de continuar!"
            severity="error"
          />
        )}

        {/* Alerta para CPF inválido */}
        {showCpfAlert && (
          <AlertMessage
            message="CPF inválido. Por favor, insira um CPF válido."
            severity="error"
          />
        )}

        {/* Botão de Entrar */}
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
