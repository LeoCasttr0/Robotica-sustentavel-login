import React from "react";
import { FaUser } from "react-icons/fa";
import MaskedInput from "react-text-mask"; // Mascara do CPF

const MaskedInputCpf = ({ cpf, setCpf }) => {
  return (
    <>
      <MaskedInput
        mask={[
          /\d/,
          /\d/,
          /\d/,
          ".",
          /\d/,
          /\d/,
          /\d/,
          ".",
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
        ]}
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="Digite seu CPF"
      />
      <FaUser className="icon" />
    </>
  );
};

export default MaskedInputCpf;
