import { Component } from "react"

class Authentication extends Component {
    setRegister(User) {
        sessionStorage.setItem('register', User);
    }
    getRegister(){
        let userData = sessionStorage.getItem('register');
        if (userData === null) {
            return false
        }
return userData
    }
    registerSuccessfulLogin(id) {

        console.log("register successful")

        sessionStorage.setItem("authenticatedUser", id)

    }
    isLoggedInUserId() {
        let id = sessionStorage.getItem('authenticatedUser')
        if (id === null) {
            return false
        }
        return id;
    }
    setOrderId(orderid) {
        sessionStorage.setItem('authenticatedOrder', orderid)

    }
    getOrderId() {
        let id = sessionStorage.getItem('authenticatedOrder')
        if (id === null) {
            return false
        }
        return id;
    }

}
export default new Authentication();