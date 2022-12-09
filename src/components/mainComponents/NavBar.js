import React, { useEffect, useState } from "react"
import { Route, Switch, Link, withRouter } from "react-router-dom"
import { useDispatch } from "react-redux"
import { startUserLogout } from "../../reduxStore/actions/usersAction"
import { startBudgetLogout } from "../../reduxStore/actions/budgetsAction"
import { startCategoryLogout } from "../../reduxStore/actions/categoriesAction"
import { startExpenseLogout } from "../../reduxStore/actions/expensesAction"

import PrivateRouter from "./PrivateRouter"
import Home from "./Home"
import UserRegister from "./UserRegister"
import UserLogin from "./UserLogin"
import DashBoard from "../dashboardComponents/DashBoard"
import Setting from "../settingComponents/Setting"
import Profile from "../profileComponents/Profile"
import "../../asstes/css/navBar.css"

const NavBar = (props) => {
    const dispatch = useDispatch()
    const [isLoggedIn, setIsloggedIn] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("tokenExp")) {
            handleIsLoggedIn()
        }
    }, [])
    const handleIsLoggedIn = () => {
        setIsloggedIn(!isLoggedIn)
    }
    return (
        <div className="container-fluid">
            <div className="expense-nav-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-sm-12">
                            <span>Expense App</span>
                        </div>
                        <div className="col-md-6 col-lg-5 col-sm-12">
                            <ul className="expense-nav-bar ">
                                <li><Link to={"/"}>Home</Link></li>
                                {
                                    isLoggedIn ? (
                                        <>
                                            <li className="expense-nav-link"><Link to={"/dashboard"}>DashBoard</Link></li>
                                            <li><Link to={"/setting"}>Setting</Link></li>
                                            <li><Link to={"/profile"}>Profile</Link></li>
                                            <li><Link to={""} onClick={() => {
                                                localStorage.clear()
                                                handleIsLoggedIn()
                                                dispatch(startUserLogout())
                                                dispatch(startBudgetLogout())
                                                dispatch(startCategoryLogout())
                                                dispatch(startExpenseLogout())
                                                props.history.push("/")
                                            }}>Logout</Link></li>
                                        </>
                                    ) : (
                                        <>
                                            <li><Link to={"/register"}>Register</Link></li>
                                            <li><Link to={"/login"}>Login</Link></li>
                                        </>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path={"/"} render={(props) => {
                    return <Home {...props} handleIsLoggedIn={handleIsLoggedIn} />
                }} exact/>
                <Route path={"/register"} component={UserRegister} exact />
                <Route path={"/login"} render={(props) => {
                    return <UserLogin {...props} handleIsLoggedIn={handleIsLoggedIn} />
                }} exact />
                <PrivateRouter path={"/dashboard"} component={DashBoard} exact />
                <PrivateRouter path={"/setting"} component={Setting} exact />
                <PrivateRouter path={"/profile"} component={Profile} exact />
            </Switch>
        </div>
    )
}


export default withRouter(NavBar)