import styled from "styled-components";
import { mobile } from "../responsive";
//import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import ProductList from "./ProductList";*/
import Authentication from "../storage/Authentication";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const LoginJson = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // ...
  const loginFunction = async (username, password) => {
    await fetch('http://localhost:8080/api/login/checklogin?username=' + username + "&password=" + password, {
      method: 'GET',
      /*body: JSON.stringify({
       /* username: username,
        password: password,

      }),*/
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.username);
        console.log(data.id);
        Authentication.registerSuccessfulLogin(data.id);
        setLogin((loginData) => [data, ...loginData]);
        setUsername('');
        setPassword('');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  /*const cart = useSelector((state) => state.cart);
  const getUserId = (data) => {
    console.log(data);
    localStorage.setItem(data, JSON.stringify({ 
        id: data.id, 
    }));
    console.log(JSON.parse(localStorage.getItem(data)));
  };
  */
  const navigate = useNavigate();
  const [login, setLogin] = useState([]);
  if ((login.some(user => user.username === username.valueOf())) && (login.some(pass => pass.password === password.valueOf()))) {
    navigate("/productlisting");
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    loginFunction(username, password);

  };
  return (
    <>

      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form className="App" onSubmit={handleSubmit}>
            <div className="input-container">
              <Input placeholder="username" type="text" name="uname" value={username}
                onChange={(e) => setUsername(e.target.value)} required />

            </div>
            <div className="input-container">
              <Input placeholder="password" type="password" name="pass" value={password}
                onChange={(e) => setPassword(e.target.value)} required />

            </div>
            <Button type={"submit"}>LOGIN</Button>

          </Form>

        </Wrapper>
      </Container>
      <Footer />
    </>




  );
}

export default LoginJson;