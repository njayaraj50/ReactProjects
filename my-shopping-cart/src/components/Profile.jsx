import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Authentication from "../storage/Authentication";
import { getTotals } from "../slices/cartSlice";

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


function Profile() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getTotals());
    }, [cart, dispatch]);
    console.log(cart);
    const id = Authentication.isLoggedInUserId();
    console.log(id);
    useEffect(() => {
        fetch("http://localhost:8080/api/login/profile?userid=" + id,
          { "method": "GET", })
          .then(res => res.json())
          .then(json => setProfile(json))
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      const [profile, setProfile] = useState([]);
    
    
  return (
    <div>
        <Header/>
        <Container>
    <Wrapper>
    <div className="ui container">
        <h2 className="ui header green">My Profile</h2>
      <table className="ui celled table">
        <tbody>
           <tr className="positive">
            <td>FirstName</td>
            <td>{profile.firstname}</td>
           </tr>
           <tr className="positive">
            <td>LastName</td>
            <td>{profile.lastname}</td>
           </tr>
           <tr className="positive">
            <td>UserName</td>
            <td>{profile.username}</td>
           </tr>
           <tr className="positive">
            <td>Email</td>
            <td>{profile.email}</td>
           </tr>
           <tr className="positive">
            <td >MobileNumber</td>
            <td>{profile.mobilenumber}</td>
           </tr>
           </tbody>   
      </table>
      </div>
    </Wrapper>
  </Container>
  <Footer/>
  </div>
  )
}

export default Profile