import { logInDetailsType } from "@/types/types"
import http from "../../utils/http"
import { signUpDetailsType } from "../../utils/types"




export const createUser = async (param : signUpDetailsType)  => {
    const resp = await http.post("/apis/users", param )
    return resp
}


export const logInUser = async (param : logInDetailsType)  => {
    const resp = await http.post("/apis/users/login",  param )
    return resp
}

export const VerifyOTPCode = async (param : any)  => {
    const resp = await http.post("/apis/users/verifyotp",  param )
    return resp
}
  
export const ForgetPassword = async (param : any)  => {
    const resp = await http.post("/apis/user/forgot_password",  param )
    return resp
}

export const UploadDP = async (param : any)  => {
    const profilePicture = param
    const resp = await http.put("/apis/users/",   {profilePicture} )
    return resp
}


export const UpdateUser = async (param : any)  => {
    const resp = await http.put("/apis/users/",   param )
    return resp
}


export const getMyDetails = async ()  => {
    const resp = await http.get("/apis/users/mydetails")
    return resp
} 











//landlord enpoint
export const updateLandlordPaymentAcct = async (param : any)  => {
    
    const resp = await http.post("/apis/user/update_account",  param  )
    return resp
}
export const postLandlordProperty = async (param : any)  => {
    
    const resp = await http.post("/apis/product/create",  param  )
    return resp
} 

export const getMyProperty = async ()  => {
    
    const resp = await http.get("/apis/product/me")
    return resp
} 