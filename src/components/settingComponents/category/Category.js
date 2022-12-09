import React, { useState } from "react"
import { Button } from 'react-bootstrap'
import CategoryList from "./CategoryList"
import CategoryDeleted from "./CategoryDeleted"

const Category = (props) => {
    const [isDeletedToggle, setIsDeletedToggle] = useState(false)

    const handleIsDeletedToggle = () => {
        setIsDeletedToggle(!isDeletedToggle)
    }

    return (
        <div>
            <Button onClick={handleIsDeletedToggle} variant={isDeletedToggle ? "success" : "danger"}>{
                isDeletedToggle ? "Show UnDeleted Categories" : "Show Deleted Categories"}
            </Button>
            {
                isDeletedToggle ? (
                    <>
                        <h6 className="mt-4 mb-3">Deleted Categories</h6>
                        <CategoryDeleted />
                    </>
                ) : (
                    <>
                        <h6 className="mt-4 mb-3">Un-Deleted Categories</h6>
                        <CategoryList />
                    </>
                )
            }
        </div>
    )
}
export default Category