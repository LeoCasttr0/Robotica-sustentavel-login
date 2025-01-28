import React, { useState } from "react";
import InputMask from "react-input-mask"; // Mascara CPF
import AlertMessage from "../Components/AlertMessage"; // Alerta
import "../styles/ForgetPassword.css"; // Estilos
import MaskedInputCpf from "../Components/MaskedInputCpf";

const ForgotPassword = () => {
  const [cpf, setCpf] = useState(""); // Estado para o CPF
  const [showAlert, setShowAlert] = useState(false); // Alerta de CPF vazio ou inválido

  // Função para validar o CPF
  const validarCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, ""); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false; // Verifica se tem 11 dígitos e se não são todos iguais
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

  // Função de envio do CPF para recuperação de senha
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!cpf.trim() || !validarCPF(cpf)) {
      setShowAlert(true); // Exibe alerta se o CPF não for válido ou estiver vazio
      return;
    }

    setShowAlert(false);
    alert(
      "Instruções para recuperação de senha foram enviadas para o e-mail associado ao CPF: " +
        cpf
    );
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Recuperação de Senha</h1>

        {/* Campo de CPF */}
        <div className="input-field">
          <MaskedInputCpf cpf={cpf} setCpf={setCpf} />
        </div>

        {/* Alerta se o CPF for inválido ou vazio */}
        {showAlert && (
          <AlertMessage
            message="CPF inválido ou vazio. Por favor, insira um CPF válido."
            severity="warning"
          />
        )}

        {/* Botão para enviar CPF */}
        <button>Recuperar Senha</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
