import React from "react"
import { useDispatch } from "react-redux"
import { startCategoriesCreate } from "../../../reduxStore/actions/categoriesAction"
import CategoryForm from "./CategoryForm"
import "../../../asstes/css/categorySettings.css"

const AddCategoryForm = (props) => {
    const dispatch = useDispatch()

    const formSubmission = (data,resolve)=>{
        dispatch(startCategoriesCreate(data,resolve))
    }

    return (
        <div className="category-form">
            <CategoryForm formSubmission={formSubmission}/>
        </div>
    )
}

export default AddCategoryForm