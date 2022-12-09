import React from "react"
import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import CategoryDeletedList from "./CategoryDeletedList"

const CategoryDeleted = (props) => {
    const categories = useSelector((state) => {
        return state.categories
    })
    const categoriesDeleted = categories.filter((category) => {
        return category.isDeleted === true
    })
    return (
        <div>
            {
                categoriesDeleted.length ? (
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Title of the categories</th>
                                <th>Un Delete the categories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categoriesDeleted.map((category) => {
                                    return <CategoryDeletedList key={category._id} {...category} />
                                })
                            }
                        </tbody>
                    </Table>
                ) : (
                    <span style={{ color: "red" }}>No data found</span>
                )
            }
        </div>
    )
}

export default CategoryDeleted