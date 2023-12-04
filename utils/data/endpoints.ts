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

export const logOutUser = async ()  => {
    const resp = await http.get("/apis/users/logout" )
    return resp
}
export const ResendOTPCode = async ()  => {
    const resp = await http.get("/apis/users/resendotp" )
    return resp
}
export const VerifyOTPCode = async (param : any)  => {
    const resp = await http.post("/apis/users/verifyotp",  param )
    return resp
}
  
export const ForgetPassword = async (param : any)  => {
    const resp = await http.post("/apis/forgetpassword",  param )
    return resp
}

export const ChangePassword = async (param : any)  => {
    console.log(param)
    const resp = await http.post(`/apis/forgetpassword/update/${param.userId}`,  {password : param.password} )
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







//landlord endpoint
export const uploadProperty = async (param : any)  => {
    
    const resp = await http.post("/apis/properties",  param  )
    return resp
}

export const getMyProperty = async ()  => {    
    const resp = await http.get("/apis/properties/me")
    return resp
} 

export const getAllProperty = async (param : string)  => {
    const resp = await http.get(`/apis/properties?search=${param}`)
    return resp
} 

export const deleteProperty = async (param: string)  => {    
    const resp = await http.delete(`/apis/properties/${param}`)
    return resp
} 
export const updateProperty = async (param: any)  => {    
    const resp = await http.put(`/apis/properties/${param._id}`, param.houseData)
    return resp
} 

export const getSingleProperty = async (param : any)  => {
    const resp = await http.get(`/apis/properties/${param}`)
    return resp
} 

export const getFilterProperty = async (param : any)  => {
    const resp = await http.post(`/apis/properties/filter`, param)
    return resp
} 





//notification

export const deleteNotification = async (param : any)  => {
    const resp = await http.delete(`/apis/notifications/${param}`)
    return resp
} 

export const getMyNotification = async ()  => {
    const resp = await http.get("/apis/notifications/me")
    return resp
} 





///Verify Edit Otp Code

export const getEditOTPVerification = async () => {
    const resp = await http.get("/apis/otps/")
    return resp
}


export const verifyEditOTPVerification = async (param : any)  => { 
    const resp = await http.post("/apis/otps/verify",  param  )
    return resp
}


/// tour 
export const scheduleTourEP = async (param : any) => {
    const resp = await http.post("/apis/tours/",  param  )
    return resp 
}

/// Payment routes

export const makePayment = async( param: any ) => {
  const resp = await http.post("/apis/payments/", param);
  return resp
}
