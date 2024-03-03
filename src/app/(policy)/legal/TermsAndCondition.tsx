"use client"
import { PrevIcon } from "@/assets/icons1";
import React, { FC } from "react";
import { AiOutlineLeft } from "react-icons/ai";


interface Pageprops {
    setPage : React.Dispatch<React.SetStateAction<string>>
}

const TermsAndCondition :FC<Pageprops> = ({setPage}) => {
    return ( 
        <div className="" >
              <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-12  '>
                <a href="/">
                 <PrevIcon color="" width="" height=""/>
                </a>
                <p className='flex-1 text-center text-[1.2rem] font-[500] text-blue-800'> Terms And Condition</p>
            </div> 
            <p className="text-grey-light m-4 ">{"Legal > Terms & Conditions"} </p>
            <p className="text-grey-light mx-4"> <span className="font-medium">1.  Acceptance of Terms:</span> By accessing and using the ERT application, you acknowledge and agree to be bound by these terms and conditions.
<br/> <span className="font-medium">2.  User Account:</span> To use certain features of the ERT application, such as messaging, calling, and making payments, you may be required to create a user account. As a user, you are solely responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and complete information during the registration process and to promptly update any changes to your account information.
<br/> <span className="font-medium">3.  User Responsibilities: </span>  As a user of the ERT application, you agree to use the application in compliance with all applicable laws and regulations. You are solely responsible for the content you upload, post, or transmit through the application, including any pictures or amenities related to your properties. You agree not to engage in any activities that may harm, disrupt, or compromise the integrity of the application or its users.
<br/> <span className="font-medium">4.  Property Listings: </span> Landlords are solely responsible for the accuracy and completeness of their property listings on the ERT application. By uploading pictures and adding amenities, landlords represent and warrant that the information provided is true, accurate, and up-to-date. ERT does not guarantee the availability, quality, or legality of any properties listed on the application, and users are encouraged to verify all information independently.
<br/> <span className="font-medium">5.  Payments: </span>  ERT may facilitate payments for houses through the application. By using the payment feature, users agree to abide by ERT's payment policies and guidelines. ERT is not responsible for any disputes or issues that may arise from payments made or received through the application. Users are encouraged to communicate and resolve any payment-related matters directly with the other party involved.
<br/> <span className="font-medium">6.  Privacy and Data Security: </span> ERT takes the privacy and security of user information seriously. By using the application, you agree to ERT's Privacy Policy, which outlines how your information is collected, used, and protected. ERT may use your information to improve the application's functionality, provide customer support, and for other legitimate business purposes.
<br/> <span className="font-medium">7.  Termination and Suspension: </span> ERT reserves the right to suspend or terminate user accounts or access to the application at any time, for any reason, without prior notice. Users may also terminate their account with ERT at any time by following the application's account closure procedures.
<br/> <span className="font-medium">8.  Intellectual Property: </span> The ERT application and its content, including but not limited to logos, trademarks, and copyrighted materials, are the property of ERT and its licensors. Users are prohibited from copying, modifying, distributing, or using any part of the application without prior written consent from ERT.
<br/> <span className="font-medium">9.  Changes to Terms and Conditions: </span> ERT reserves the right to modify or update these terms and conditions at any time without prior notice. Users are encouraged to review the most current version of the terms and conditions periodically. Continued use of the application after any changes constitutes acceptance of the updated terms and conditions.
<br/> <span className="font-medium">10. Disclaimer of Warranties and Limitation of Liability: </span> ERT provides the application "as is" and does not warrant the accuracy, completeness, or reliability of any information or content on the application. ERT disclaims all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. ERT shall not be liable for any damages, losses, or expenses arising from the use or inability to use the application, including but not limited to direct, indirect, incidental, consequential, or punitive damages.</p>
        </div>
     );
}
 
export default TermsAndCondition;