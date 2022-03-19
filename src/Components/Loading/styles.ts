import styled from "styled-components";

export const LoadThree = styled.div`
  animation-delay: 0.8s;
`;

export const LoadTwo = styled.div`
  animation-delay: 0.4s;
`;

export const LoadOne = styled.div`
  animation-delay: 0.1s;
`;

export const Load = styled.div`
  @keyframes loading {
    to {
      opacity: 0.3;
      transform: translateY(-25px);
      -webkit-transform: translateY(-25px);
      -moz-transform: translateY(-25px);
      -ms-transform: translateY(-25px);
      -o-transform: translateY(-25px);
    }
  }

  width: 100%;
  height: 100vh;
  background-color: #383737;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 25px;
    height: 25px;
    background-color: orchid;
    margin-left: 5px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    margin-top: calc(50px - 12.5px);
    animation-name: loading;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`;
