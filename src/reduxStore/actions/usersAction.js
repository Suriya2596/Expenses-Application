import axios from "axios"
import omit from "lodash/omit"

export const startUserRegister = (requestData,resolve)=>{
    return (dispatch)=>{
        axios.post("http://localhost:4718/api/user/register",requestData)
            .then((response)=>{
                const userData = response.data
                if(userData.hasOwnProperty("errors")){
                    window.alert(`${userData.message}`)
                }else if(userData.hasOwnProperty("code")){
                    window.alert(`${Object.keys(userData.keyValue)[0]} ${Object.values(userData.keyValue)[0]} already registered`)
                }else{
                    dispatch(userRegister(userData))
                    resolve(userData._id)
                }
            })
            .catch((err)=>{
                window.alert(err.message)
            })
    }
}
const userRegister = (data)=>{
    return {
        type:"USER_REGISTER",
        payload:data
    }
}

export const startUserLogin = (requestData,resolve)=>{
    return (dispatch) =>{
        axios.post("http://localhost:4718/api/user/login",requestData)
            .then((response)=>{
                const userData = response.data
                if(userData.hasOwnProperty("errors")){
                    window.alert(userData.message)
                }else{
                    localStorage.setItem("tokenExp",userData.token)
                    resolve()
                }
            })
            .catch((err)=>{
                window.alert(`Login ${err.message}`)
            })
    }
}

export const startUserAccount = ()=>{
    return (dispatch)=>{
        axios.get("http://localhost:4718/api/user/account",{
            headers:{
                "Authorization":localStorage.getItem("tokenExp")
            }
        })
            .then((response)=>{
                const userData = response.data
                if(userData.hasOwnProperty("errors")){
                    window.alert(userData.message)
                }else{
                    dispatch(userAccount(userData))
                }
            })
            .catch((err)=>{
                window.alert(`Account ${err.message}`)
            })
    }
}

const userAccount = (data)=>{
    return {
        type:"USER_ACCOUNT",
        payload:data
    }
}

export const startUserUpdate = (requestData,resolve)=>{
    const data = omit(requestData,["_id","password"])   
    return (dispatch)=>{
        axios.put("http://localhost:4718/api/user/account", data,{
            headers:{
                "Authorization":localStorage.getItem("tokenExp")
            }
        })
            .then((response)=>{
                const userData = response.data
                if(userData.hasOwnProperty("errors")){
                    window.alert(userData.message)
                }else{
                    dispatch(userUpdate(userData))
                    resolve()
                }
            })
            .catch((err)=>{
                window.alert(`Account update ${err.message}`)
            })
    }
}
const userUpdate = (data)=>{
    return {
        type:"USER_UPDATE",
        payload:data
    }
}


export const  startUserLogout = ()=>{
    return {
        type:"USER_LOGOUT"
    }
}

