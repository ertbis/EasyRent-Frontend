import { logInDetailsType } from "@/types/types"
import http from "../../utils/http"
import { signUpDetailsType } from "../../utils/types"



// create user requst function

export const createUser = async (param : signUpDetailsType)  => {
    const resp = await http.post("/apis/users", param )
    return resp
}


// General API endpoints
export const createAdmin = async (param : any)  => {
    const resp = await http.post("/apis/users/admin", param )
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
export const getAllUsers = async ()  => {
    const resp = await http.get("/apis/users")
    return resp
} 

export const deleteUser = async (param : any)  => {
    console.log(param)
    const resp = await http.delete(`/apis/users/${param}`,)
    return resp
}








//Landlord API endpoints
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

export const getAllPropertyForAdmin = async ()  => {
    const resp = await http.get(`/apis/properties/getall`)
    return resp
} 

export const getAllPendingPropertyForAdmin = async ()  => {
    const resp = await http.get(`/apis/properties/getpending`)
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
export const getSingleTour = async (param : any)  => {
    const resp = await http.get(`/apis/tours/${param}`)
    return resp
} 

export const getFilterProperty = async (param : any)  => {
    const resp = await http.post(`/apis/properties/filter`, param)
    return resp
} 





//notification API endpoint 

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


export const deleteTour = async (param : any)  => {
    console.log(param)
    const resp = await http.delete(`/apis/tours/${param}`,)
    return resp
}


/// Payment apI end point 

export const makePayment = async( param: any ) => {
  const resp = await http.post("/apis/payments/", param);
  return resp
}



//chat API end point 
export const createChats = async(  ) => {
    const resp = await http.post("/apis/chats/"  );
    return resp
}
export const regenerateNewChat = async(param: any  ) => {
    const resp = await http.put(`/apis/chats/regenerate/${param}` );
    return resp
}

export const getMyChats = async() => {
    const resp = await http.get(`/apis/chats/`);
    return resp
}
export const getChat = async( param: any ) => {
    const resp = await http.get(`/apis/chats/find/${param}`);
    return resp
}
export const updateChatCount = async( param: any ) => {
    const resp = await http.put(`/apis/chats/updateUnreadMessage/${param.id}`, {unreadMessageCount : param.unreadMsgCount} );
    return resp
}
export const closeChat = async( param: any ) => {
    const resp = await http.put(`/apis/chats/close/${param}` );
    return resp
}
export const deleteChatEndPoint = async( param: any ) => {
    const resp = await http.delete(`/apis/chats/${param}`);
    return resp
}

export const createMessage = async( param: any ) => {
    const resp = await http.post("/apis/messages/", param);
    return resp
}

export const getChatMessages = async( param: string ) => {
    const resp = await http.get(`/apis/messages/${param}`);
    return resp
}

export const getAnalytics = async(  ) => {
    const resp = await http.get(`/apis/analytics`);
    return resp
}