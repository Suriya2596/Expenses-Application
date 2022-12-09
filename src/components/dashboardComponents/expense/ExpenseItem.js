import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"


import { useDispatch } from 'react-redux';
import { startExpenseUpdate } from '../../../reduxStore/actions/expensesAction';
import { startCategoriesShow } from "../../../reduxStore/actions/categoriesAction";
import EditExpense from "./EditExpense"

const ExpenseItem = (props) => {
    const { _id, title, amount, category, expenseData, expenseToggle } = props
    const dispatch = useDispatch()
    const [categoryData, setCategoryData] = useState("")

    useEffect(() => {
        const categoryDataReq = (data) => {
            setCategoryData(data)
        }
        dispatch(startCategoriesShow(category, categoryDataReq))
    }, [])

    const resolve = () => {
        window.alert(`${title} is successfully ${expenseToggle?"Un-deleted":"Deleted"}`)
    }

    return (
        <tr>
            <td>{title}</td>
            <td>{amount}</td>
            <td>
                {
                    categoryData.isDeleted ? <strike>{categoryData.title}</strike> : <span>{categoryData.title}</span>
                }
            </td>
            <td>{expenseData.slice(8, 10)}-{expenseData.slice(5, 7)}-{expenseData.slice(0, 4)}</td>

            {
                !expenseToggle && (
                    <td>
                        <EditExpense
                            _id={_id}
                            title={title}
                            amount={amount}
                            category={category}
                            expenseData={expenseData}
                        />
                    </td>
                )
            }
            <td> <Button variant="danger" onClick={() => {
                dispatch(startExpenseUpdate( { isDeleted:expenseToggle?false:true , _id } , resolve))
            }}>Delete</Button> </td>
        </tr>
    )
}

export default ExpenseItem