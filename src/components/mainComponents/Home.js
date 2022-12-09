import React from "react"
import { Container, Row } from "react-bootstrap"
import regisetImage from "../../asstes/images/register-img.png"
import Login from "./Login"
import "../../asstes/css/home.css"


const Home = (props) => {
    const { handleIsLoggedIn } = props
    return (
        <div className="container-fluid home-bg">
            <Container style={{ marginTop: "60px" }}>
                <Row>
                    <div className="col-md-6">
                        <div className="heading-home">
                            <h2>Take the pain out of creating expense reports</h2>
                            <p>
                                Manage your expense reporting process easier with Expense's convenient features.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {
                            localStorage.getItem("tokenExp") ? (
                                
                                <div className="heading-img">
                                    <img src={regisetImage} alt="Register" />
                                </div>
                            ) : (
                                <div className="login-user heading-home">
                                    <Login handleIsLoggedIn={handleIsLoggedIn} />
                                </div>
                            )
                        }
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Home