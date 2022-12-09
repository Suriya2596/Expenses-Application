import React from "react"
import { useDispatch } from "react-redux"
import { startCategoriesUpdate } from "../../../reduxStore/actions/categoriesAction"
import CategoryForm from "./CategoryForm"


const EditCategory = (props)=>{
    const {_id,title,isCategoryToggle,handleIsCategoryToggle} = props
    const dispatch = useDispatch()

    const formSubmission = (data,resolve)=>{
        data.id = _id
        data.resolve = resolve
        dispatch(startCategoriesUpdate(data))
    }

    return (
        <div>
            <CategoryForm 
                formSubmission={formSubmission} 
                title={title} 
                isCategoryToggle={isCategoryToggle} 
                handleIsCategoryToggle={handleIsCategoryToggle}
            />
        </div>
    )
}

export default EditCategory