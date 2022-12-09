import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useSelector } from "react-redux"

const ExpenseForm = (props) => {
    const { 
        formSubmit, 
        handleClose,
        title:expenseTitle,
        amount:expenseAmount,
        category:expenseCategory,
        expenseData:expenseExpenseData
    } = props

    const [title, setTiltle] = useState(expenseTitle?expenseTitle:"")
    const [category, setCategory] = useState(expenseCategory?expenseCategory:"")
    const [amount, setAmount] = useState(expenseAmount?expenseAmount:0)
    const [expenseData, setExpenseData] = useState(expenseExpenseData?expenseExpenseData.slice(0,10):"")
    const [formEorrs, setFormError] = useState({})
    const formErr = {}
    console.log(expenseTitle,expenseCategory,expenseAmount,expenseExpenseData)
    const categories = useSelector((state) => {
        return state.categories.filter((category) => {
            return category.isDeleted === false
        })
    })

    const handleFormError = () => {
        if (title.trim().length === 0) {
            formErr.titleError = "Title is Empty"
        }
        if (category.trim().length === 0) {
            formErr.categoryError = "Select Category"
        }
        if (amount.length === 0) {
            formErr.amountError = "Amount is Empty"
        }
        if (expenseData.trim().length === 0) {
            formErr.expenseDataError = "Select the Data"
        }
    }
    const handleInputChange = (e) => {
        const inputName = e.target.name
        if (inputName === "title") {
            setTiltle(e.target.value)
        } else if (inputName === "category") {
            setCategory(e.target.value)
        } else if (inputName === "amount") {
            setAmount(e.target.value)
        } else if (inputName === "expenseData") {
            setExpenseData(e.target.value)
        }
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleFormError()
        if (Object.keys(formErr).length > 0) {
            setFormError(formErr)
        } else {
            const data = {
                title, amount, category, expenseData
            }
            const resolve = () => {
                setTiltle("")
                setCategory("")
                setAmount("")
                setExpenseData("")
                handleClose()
            }
            formSubmit(data, resolve)
        }
    }
    return (
        <>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mt-2">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        name="title"
                        onChange={handleInputChange}
                        placeholder="Enter Title"
                    />
                    {
                        formEorrs.titleError && <Form.Text>{formEorrs.titleError}</Form.Text>
                    }
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label>Select category</Form.Label>
                    <Form.Select value={category} name="category" onChange={handleInputChange} >
                        <option value="">Select Category</option>
                        {
                            categories.map((category) => {
                                return <option key={category._id} value={category._id}>{category.title}</option>
                            })
                        }
                    </Form.Select>
                </Form.Group>
                {
                    formEorrs.categoryError && <Form.Text>{formEorrs.categoryError}</Form.Text>
                }
                <Form.Group className="mt-2">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" value={amount} name="amount" onChange={handleInputChange} />
                    {
                        formEorrs.amountError && <Form.Text>{formEorrs.amountError}</Form.Text>
                    }
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label>Expense Data</Form.Label>
                    <Form.Control type="Date" value={expenseData} name="expenseData" onChange={handleInputChange} />
                    {
                        formEorrs.expenseDataError && <Form.Text>{formEorrs.expenseDataError}</Form.Text>
                    }
                </Form.Group>
                <div className="form-btns my-3">
                    <input type="submit" value={"Submit"} className="btn btn-primary me-3"/>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default ExpenseForm