import React from "react"
import { Container } from "react-bootstrap"
import BudgetAmount from "./budget/BudgetAmount"
import Category from "./category/Category"
import AddCategoryForm from "./category/AddCategoryForm"

const Setting = (props) => {
    return (
        <Container style={{marginTop:"90px"}}>
            <h5>Setting</h5>
            <div className="row my-4">
                <div className="col-md-6 col-sm-12">
                    <BudgetAmount />
                </div>
                <div className="col-md-6 col-sm-12">
                    <AddCategoryForm />
                </div>
            </div>
            <Category/>
        </Container>
    )
}

export default Setting