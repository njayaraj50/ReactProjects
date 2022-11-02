import styled from "styled-components";
import { mobile } from "../responsive";
import { useForm } from "react-hook-form"; 
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

 
  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem(data.email, JSON.stringify({ 
        name: data.username, password: data.password 
    }));
    console.log(JSON.parse(localStorage.getItem(data.email)));
  };
  return (
    <>
    <Announcement />
    <Navbar />
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form className="App" onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Username" type="text" {...register("username", { required: true })}/>
          {errors.username && <span style={{ color: "red" }}>
        *Username* is mandatory </span>}
         
          <Input placeholder="Email" type="email" {...register("email", { required: true })} />
        {errors.email && <span style={{ color: "red" }}>
        *Email* is mandatory </span>}
          <Input placeholder="Password" type="password" {...register("password", { required: true })} />
        {errors.password && <span style={{ color: "red" }}>
        *Password* is mandatory </span>}
 
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
