// Importação das bibliotecas do react
import React, { useContext } from "react";
// Importação das bibliotecas do react-icons
import { BsFillExclamationCircleFill } from "react-icons/bs";

// Importação dos meus componentes estilizados usando o styled components
import { Message, ImageContainer, Toast } from "./styles";

// Importação do hook de toast
import ToastContext from "../../hooks/useToast";

const Dropdown = () => {
  // Variável definida e comentada no hook de toast <src\hooks\useToast.tsx>
  const { msg } = useContext(ToastContext);

  return (
    <>
      <Toast id="toast">
        <ImageContainer>
          <BsFillExclamationCircleFill size={16} />
        </ImageContainer>
        <Message>{msg}</Message>
      </Toast>
    </>
  );
};

export default Dropdown;
