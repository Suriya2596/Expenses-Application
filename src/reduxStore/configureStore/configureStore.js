import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import usersReducer from "../reducers/usersReducer"
import budgetsReducer from "../reducers/budgetsReducer"
import categoriesReducer from "../reducers/categoriesReducer"
import expenseReducer from "../reducers/expenseReducer"


const configureStore = () => {
    const store = createStore(combineReducers({
        users: usersReducer,
        budgets: budgetsReducer,
        categories: categoriesReducer,
        expenses: expenseReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore