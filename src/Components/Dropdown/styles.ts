import styled from "styled-components";

interface ContainerProps {
  active: boolean;
}

export const Button = styled.a`
  align-items: baseline;
  display: flex;
  justify-content: center;
  background: #4883fa;
  color: white;
  padding: 12px;
  text-decoration: none;
  border-radius: 3px;
  font-size: 16px;
  margin: 25px 0 0 0;
  cursor: pointer;

  :hover {
    background: #729ef9;
  }

  .icon-checkout {
    margin-right: 10px;
  }
`;

export const Container = styled.div<ContainerProps>`
  margin: 23% 0;
  width: 90%;
  position: absolute;
  z-index: 9999;
  display: ${($props) => ($props.active ? "" : "none")};
`;

export const ImageContainer = styled.div`
  float: left;
  width: 35%;
`;

export const ItemName = styled.span`
  display: block;
  padding-top: 10px;
  font-size: 16px;
`;

export const ItemPrice = styled.span`
  color: #171011;
  margin-right: 8px;
  font-weight: bold;
`;

export const ItemQuantity = styled.span`
  color: #3d3939;
`;

export const ItemQuantityValue = styled.span`
  color: #0f0f0f;
  font-weight: bold;
`;

export const Item = styled.li`
  margin-bottom: 18px;
  border-bottom: 1px solid #c4c4c4;
  display: flex;

  :after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const TotalLabel = styled.span`
  color: #424652;
`;

export const TotalPrice = styled.span`
  color: #00030a;
  font-weight: bold;
  margin-left: 5px;
`;

export const ShoppingCart = styled.div`
  float: right;
  background: #f2f2f2;
  width: 400px;
  position: relative;
  border-radius: 3px;
  padding: 20px;

  :after {
    bottom: 100%;
    left: 89%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: white;
    border-width: 8px;
    margin-left: -8px;
  }
`;

export const ShoppingCartHeader = styled.div`
  border-bottom: 1px solid #545454;
  padding-bottom: 30px;
`;

export const ShoppingCartTotal = styled.div`
  float: right;
`;

export const Items = styled.ul`
  padding-top: 20px;
  list-style: none;
  padding: 0;
`;

export const DeleteCart = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  background: #bf0010;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  border-radius: 3px;
  font-size: 16px;
  margin: 25px 0 15px 0;
  cursor: pointer;

  :hover {
    background: #e82a3a;
  }

  .icon-delete {
    margin-right: 10px;
  }
`;

export const DeleteItemCart = styled.div`
  float: right;
  display: grid;
  align-items: center;
  cursor: pointer;
`;

export const CartItem = styled.div`
  width: 85%;
`;
