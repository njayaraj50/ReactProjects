import styled from "styled-components";
import { mobile } from "../responsive";
import { useForm } from "react-hook-form"; 
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const {register, handleSubmit, formState: { errors } } = useForm();

 const navigate =useNavigate();
  const onSubmit = async(data) => {
 
     const response = await axios
      .post('http://localhost:8080/api/login/register',data)
      .then(res => res.json())
      .catch((err) => {
        console.log("Err: ", err);
      });
      
      console.log(response);
 
    navigate('/login');
  
 
  } 
  
    

  return (
    <>
    <Announcement />
    <Navbar />
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form className="App" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Firstname" type="text" {...register("firstname", { required: true })}/>
          {errors.firstname && <span style={{ color: "red" }}>
           *Firstname* is mandatory </span>}
        <Input placeholder="Lastname" type="text" {...register("lastname", { required: true })}/>
          {errors.lastname && <span style={{ color: "red" }}>
           *Lastname* is mandatory </span>}
          <Input placeholder="Username" type="text" {...register("username", { required: true })}/>
          {errors.username && <span style={{ color: "red" }}>
           *Username* is mandatory </span>}
         
          <Input placeholder="Email" type="email" {...register("email", { required: true })} />
        {errors.email && <span style={{ color: "red" }}>
        *Email* is mandatory </span>}
          <Input placeholder="Password" type="password" {...register("password", { required: true })} />
        {errors.password && <span style={{ color: "red" }}>
        *Password* is mandatory </span>}
        <Input placeholder="Mobilenumber" type="text" {...register("mobilenumber", { required: true })} />
        {errors.password && <span style={{ color: "red" }}>
        *Mobilenumber* is mandatory </span>}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type={"submit"}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
    <Footer/>
    </>
    
    
  );
};

export default Register;
