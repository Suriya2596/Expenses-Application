import React, { useState } from "react"
import {useDispatch} from "react-redux"
import { Button } from "react-bootstrap"

import { startCategoriesUpdate } from "../../../reduxStore/actions/categoriesAction"
import EditCategory from "./EditCategory"


const CategoryItem = (props) => {
    const dispatch = useDispatch()
    const { _id,title } = props
    const [isCategoryToggle, setIsCategoryToggle] = useState(false)

    const handleIsCategoryToggle = () => {
        setIsCategoryToggle(!isCategoryToggle)
    }
    
    return (
        <tr>
            {
                isCategoryToggle ? (
                    <>
                        <td>
                            <EditCategory 
                                _id={_id} 
                                title={title} 
                                isCategoryToggle={isCategoryToggle} 
                                handleIsCategoryToggle={handleIsCategoryToggle}
                            />
                        </td>
                        <td></td>
                        <td><Button variant="danger" onClick={()=>{
                            dispatch(startCategoriesUpdate({isDeleted:true,id:_id}))
                        }}>Delete</Button></td>
                    </>
                ) : (
                    <>
                        <td>{title}</td>
                        <td><Button variant="warning" onClick={handleIsCategoryToggle}>Edit</Button></td>
                        <td><Button variant="danger" onClick={()=>{
                            dispatch(startCategoriesUpdate({isDeleted:true,id:_id}))
                        }}>Delete</Button></td>
                    </>
                )
            }
        </tr>
    )
}

export default CategoryItem