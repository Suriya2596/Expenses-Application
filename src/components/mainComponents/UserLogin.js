import React from "react"
import Login from "./Login"
import regisetPhoto from "../../asstes/images/register-img.png"


const UserLogin = (props) => {
    const {handleIsLoggedIn} = props
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <div className="form-container">
                        <div className="img-container">
                            <img src={regisetPhoto} alt="regisetPhoto" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="form-container">
                        <Login handleIsLoggedIn={handleIsLoggedIn} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin