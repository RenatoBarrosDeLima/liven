import styled from "styled-components";

export const Message = styled.div`
  color: #fff;
  padding: 16px;
  overflow: hidden;
  white-space: nowrap;
`;

export const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  float: left;
  padding-top: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;
  background-color: #111;
  color: #fff;
`;

export const Toast = styled.div`
  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes expand {
    from {
      min-width: 50px;
    }
    to {
      min-width: 350px;
    }
  }

  @keyframes expand {
    from {
      min-width: 50px;
    }
    to {
      min-width: 350px;
    }
  }
  @-webkit-keyframes stay {
    from {
      min-width: 350px;
    }
    to {
      min-width: 350px;
    }
  }

  @keyframes stay {
    from {
      min-width: 350px;
    }
    to {
      min-width: 350px;
    }
  }
  @-webkit-keyframes shrink {
    from {
      min-width: 350px;
    }
    to {
      min-width: 50px;
    }
  }

  @keyframes shrink {
    from {
      min-width: 350px;
    }
    to {
      min-width: 50px;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 60px;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 60px;
      opacity: 0;
    }
  }

  visibility: hidden;
  max-width: 50px;
  height: 50px;
  /*margin-left: -125px;*/
  margin: auto;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;

  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 30px;
  font-size: 17px;
  white-space: nowrap;

  .show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 2s,
      fadeout 0.5s 2.5s;
    animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s,
      fadeout 0.5s 4.5s;
  }
`;
