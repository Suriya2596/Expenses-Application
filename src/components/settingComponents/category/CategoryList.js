import React from "react"
import { useSelector } from "react-redux"
import CategoryItem from "./CategoryItem"
import { Table } from "react-bootstrap"

const CategoryList = (props) => {

    const categories = useSelector((state) => {
        return state.categories
    })

    const categoriesunDeleted = categories.filter((category) => {
        return !category.isDeleted
    })

    return (
        <div>
            {
                categories.length > 0 ? (
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Tilte</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categoriesunDeleted.map((category) => {
                                    return <CategoryItem key={category._id} {...category} />
                                })
                            }
                        </tbody>
                    </Table>
                ) : (
                    <span style={{ color: "red" }}>No data found , Please Create Category</span>
                )
            }
        </div>
    )
}

export default CategoryList