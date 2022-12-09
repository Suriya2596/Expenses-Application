import React,{useEffect} from "react";
import NavBar from "./components/mainComponents/NavBar";

import {useDispatch}  from "react-redux"
import { startUserAccount } from "./reduxStore/actions/usersAction";
import { startBudgetList } from "./reduxStore/actions/budgetsAction";
import { startCategoriesList } from "./reduxStore/actions/categoriesAction";
import { startExpenseList } from "./reduxStore/actions/expensesAction";

const App =(props)=>{
  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem("tokenExp")){
      dispatch(startUserAccount())
      dispatch(startBudgetList())
      dispatch(startCategoriesList())
      dispatch(startExpenseList())
    }
  },[])

  return (
    <div>
      <NavBar />
    </div>
  )
}

export default App