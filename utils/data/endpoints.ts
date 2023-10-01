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