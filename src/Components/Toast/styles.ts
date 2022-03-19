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
`;
