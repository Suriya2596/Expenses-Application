import React from "react"
import {Row} from "react-bootstrap"
import BudgetCalulation from "./BudgetCalulation"
import ExpenseChart from "./ExpenseChart"


const Charts = (props)=>{
    return (
        <Row>
            <div className="col-md-6">
                <BudgetCalulation />
            </div>
            <div className="col-md-6">
                <ExpenseChart />
            </div>
        </Row>
    )
}
export default Charts