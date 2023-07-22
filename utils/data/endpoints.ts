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
    const resp = await http.post("/apis/user/validate",  param )
    return resp
}
