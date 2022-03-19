import React, { useContext } from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";

import { Message, ImageContainer, Toast } from "./styles";

import ToastContext from "../../hooks/useToast";

const Dropdown = () => {
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
