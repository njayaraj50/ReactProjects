import React from "react";
import styled from "styled-components";
import { mobile } from "./../responsive";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Header = () => {
  
    const cart = useSelector((state) => state.cart);
  
    
  console.log(cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Left>
          <Logo><Link to="/productlisting"><ShoppingCartOutlined />Shopping Cart.</Link></Logo>
        </Left>
        <Right>
          <MenuItem>
            <Link to="/addcart"><Badge badgeContent={cartTotalQuantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/order">My Order</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/profile">My Profile</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/logout">Logout</Link>
          </MenuItem>
        </Right>
      </div>
    </div>
  );
};

export default Header;