//import { Badge } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link} from "react-router-dom";
/*import Register from "./Register";
//import Login from "./Login";
import Home from "./Home";
import LoginJson from "./LoginJson";
//import LoginAuth from "./LoginAuth";
import ProductList from "./ProductList";
//import Index from "./Index";*/


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
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

const Navbar = () => {
  return (
   
      <Container>
    <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="Search" />
          <Search style={{ color: "gray", fontSize: 16 }} />
        </SearchContainer>
        <MenuItem><Link to="/">Home</Link></MenuItem>
      </Left>
      <Center>
        <Logo>Shopping Cart.</Logo>
      </Center>
      <Right>
        <MenuItem><Link to="/register">REGISTER</Link></MenuItem>
        <MenuItem><Link to="/login">SIGN IN</Link></MenuItem>
      </Right>
    </Wrapper>
  </Container>
 
  );
};

export default Navbar;