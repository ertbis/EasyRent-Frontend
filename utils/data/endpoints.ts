import { logInDetailsType } from "@/types/types"
import http from "../../utils/http"
import { signUpDetailsType } from "../../utils/types"




export const createUser = async (param : signUpDetailsType)  => {
    const resp = await http.post("/apis/user/create", param )
    return resp
}


export const logInUser = async (param : logInDetailsType)  => {
    const resp = await http.post("/apis/user/login",  param )
    return resp
}

export const VerifyOTPCode = async (param : any)  => {
    const resp = await http.post("/apis/user/validate_mail",  param )
    return resp
}
  
export const ForgetPassword = async (param : any)  => {
    const resp = await http.post("/apis/user/forgot_password",  param )
    return resp
}

export const UploadDP = async (param : any)  => {
    const b64_dp = param
    console.log(typeof(b64_dp) )
    const resp = await http.post("/apis/user/upload_dp",  {b64_dp}  )
    return resp
}

export const updateLandlordPaymentAcct = async (param : any)  => {
    
    const resp = await http.post("/apis/user/update_account",  param  )
    return resp
}
export const getMyDetails = async (param : any)  => {
    
    const resp = await http.post("/apis/user/fetch",  param  )
    return resp
} 

export const postLandlordProperty = async (param : any)  => {
    console.log(param)
    const resp = await http.post("/apis/product/create",  param  )
    return resp
} 

export const getMyProperty = async ()  => {
    
    const resp = await http.get("/apis/product/me")
    return resp
} 