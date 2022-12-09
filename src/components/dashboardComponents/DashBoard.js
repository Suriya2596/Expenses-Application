import React, { useEffect } from "react"
import {useSelector,useDispatch} from "react-redux"
import { Container } from "react-bootstrap"

import { startUserAccount } from "../../reduxStore/actions/usersAction"
import Expense from "./expense/Expesnse"
import dashboardHand from "../../asstes/images/dashboard-hand.png"
import Charts from "./charts/Charts"

const DashBoard = (props)=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(startUserAccount())
    },[])
    const users = useSelector((state)=>{
        return state.users
    })

    return (
        <Container style={{marginTop:"90px"}}>
            <h5>Dash Board - <img src={dashboardHand} alt="dashboardHand" width={"20px"} height={"auto"}/> Hi, {users.userName}</h5>
            <Charts />
            <Expense />
        </Container>
    )
}

export default DashBoard