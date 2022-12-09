import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { startUserRegister } from "../../reduxStore/actions/usersAction"
import { startBudgetCreate } from "../../reduxStore/actions/budgetsAction"

import "../../asstes/css/userRegister.css"
import regisetImage from "../../asstes/images/register-img.png"


const UserRegister = (props) => {
    const dispatch = useDispatch()
    
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [formErrors, setFormErrors] = useState({})
    const formErr = {}

    const handleError = () => {
        if (userName.trim().length === 0) {
            formErr.userNameError = "User name should not be empty"
        }
        if (email.trim().length === 0) {
            formErr.emailError = "email should not be empty"
        }
        if (mobile.trim().length === 0) {
            formErr.mobileError = "mobile should not be emapty"
        }
        if (password.trim().length===0 || password.trim().length<8 || password.trim().length>128) {
            formErr.passwordError = "Password should be 8 to 128 characters"
        }
    }
    const handleInputChange = (e) => {
        const inputName = e.target.name
        if (inputName === "userName") {
            setUserName(e.target.value)
        } else if (inputName === "email") {
            setEmail(e.target.value)
        } else if (inputName === "mobile") {
            setMobile(e.target.value)
        } else if (inputName === "password") {
            setPassword(e.target.value)
        }
        setFormErrors({})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleError()
        if (Object.keys(formErr).length > 0) {
            setFormErrors(formErr)
        } else {
            const requestData = {
                userName, email, mobile, password
            }
            console.log(requestData)
            const resolve = (id) => {
                setUserName("")
                setEmail("")
                setMobile("")
                setPassword("")
                setFormErrors({})
                dispatch(startBudgetCreate(id))
                window.alert(`"Successfully Registed`)
                props.history.push("/login")
            }
            dispatch(startUserRegister(requestData, resolve))
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <div className="form-container">
                        <div className="img-container">
                            <img src={regisetImage} alt="regisetImage"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="form-container">
                        <h5>User Register</h5>
                        <Form onSubmit={handleFormSubmit} className="form-register">
                            <Form.Group>
                                <Form.Label>User name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={userName} 
                                    name="userName" 
                                    onChange={handleInputChange} 
                                    placeholder="Enter user name"
                                />
                                {
                                    formErrors.userNameError && <Form.Text>{formErrors.userNameError}</Form.Text>
                                }
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={email} 
                                    name="email" 
                                    onChange={handleInputChange} 
                                    placeholder="Enter email"
                                />
                                {
                                    formErrors.emailError && <Form.Text>{formErrors.emailError}</Form.Text>
                                }
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control 
                                    type="type" 
                                    value={mobile} 
                                    name="mobile" 
                                    onChange={handleInputChange} 
                                    placeholder="Enter mobile"
                                />
                                {
                                    formErrors.mobileError && <Form.Text>{formErrors.mobileError}</Form.Text>
                                }
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    value={password} 
                                    name="password" 
                                    onChange={handleInputChange} 
                                    placeholder="Enter password"
                                />
                                {
                                    formErrors.passwordError && <Form.Text>{formErrors.passwordError}</Form.Text>
                                }
                            </Form.Group>
                            <input type="submit" value="Submit" className="btn btn-primary mt-3" />
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserRegister