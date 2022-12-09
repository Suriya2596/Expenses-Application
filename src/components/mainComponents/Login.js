import React, { useState } from "react"
import { Form } from "react-bootstrap"
import {useDispatch} from "react-redux"
import { startUserLogin } from "../../reduxStore/actions/usersAction"
import "../../asstes/css/userRegister.css"
import { withRouter } from "react-router-dom"

const Login = (props) => {
    const { handleIsLoggedIn } = props
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formErrors, setFormErrors] = useState({})
    const formErr = {}

    const handleFormErrors = () => {
        if (email.trim().length === 0) {
            formErr.emailError = "Email is Invalidate"
        }
        if (password.trim().length === 0 || password.trim().length < 0 || password.trim().length > 128) {
            formErr.passwordError = "Password shoul be 8 to 128 characters"
        }
    }
    const handleInputChange = (e) => {
        const inputName = e.target.name
        if (inputName === "email") {
            setEmail(e.target.value)
        } else if (inputName === "password") {
            setPassword(e.target.value)
        }
        setFormErrors({})
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleFormErrors()
        if (Object.keys(formErr).length > 0) {
            setFormErrors(formErr)
        } else {
            const data = {
                email, password
            }
            const resolve = () => {
                setEmail("")
                setPassword("")
                setFormErrors({})
                props.history.push("/dashboard")
                window.alert("Successfully logged in")
                handleIsLoggedIn()
            }
            dispatch(startUserLogin(data, resolve))
        }
    }
    return (
        <>
            <h5>User Login</h5>
            <Form onSubmit={handleFormSubmit} className="form-register">
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={email} 
                        name="email" 
                        onChange={handleInputChange} 
                        placeholder="Enter your email"
                    />
                    {
                        formErrors.emailError && <Form.Text>{formErrors.emailError}</Form.Text>
                    }
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        value={password} 
                        name="password" 
                        onChange={handleInputChange} 
                        placeholder="Enter your password"
                    />
                    {
                        formErrors.passwordError && <Form.Text>{formErrors.passwordError}</Form.Text>
                    }
                </Form.Group>
                <input type="submit" value={"Submit"} className="btn btn-primary mt-3" />
            </Form>
        </>
    )
}

export default withRouter(Login)