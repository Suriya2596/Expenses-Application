import React, { useState,useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import BudgetForm from "./BudgetForm"
import "../../../asstes/css/budget.css"
import { startBudgetList } from "../../../reduxStore/actions/budgetsAction"

const BudgetAmount = (props) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(startBudgetList())
    },[])
    const budget = useSelector((state) => {
        return state.budgets
    })
    const [isBudgetToggle, setIsBudgetToggle] = useState(false)
    const handleIsBudgetToggle = () => {
        setIsBudgetToggle(!isBudgetToggle)
    }

    return (
        <div className="budget-main-container">
            <div className="budget-container">
                <h6>Total Budget</h6>
                <div className="budget-toggle-body">
                    {
                        isBudgetToggle ? (
                            <>
                                <BudgetForm handleIsBudgetToggle={handleIsBudgetToggle} {...budget} />
                            </>
                        ) : (
                            <div className="budget-amount">
                                {!isBudgetToggle && <h5>Budget : </h5>}
                                <h5>{budget.amount}</h5>
                                <Button variant="dark" onClick={handleIsBudgetToggle}>Update</Button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default BudgetAmount