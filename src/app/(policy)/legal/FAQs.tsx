"use client"
import { AiOutlineLeft } from "react-icons/ai";
import { FC } from "react";


interface Pageprops {
    setPage :React.Dispatch<React.SetStateAction<string>>
}

const FAQs :FC<Pageprops> = ({setPage}) => {
    return ( 
        <div className="" >
              <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-12  '>
                <a href="/">
                <AiOutlineLeft  size={30} className='text-green-700'/>
                </a>
                <p className='flex-1 text-center text-[1.2rem] font-[500] text-blue-800'> FAQs</p>
            </div> 
            <p className="text-grey-light m-4 ">{"Legal > FAQs"} </p>
            <p className="text-grey-light mx-4"><span className="font-medium">1.  Q: What is ERT? </span>  
            A: ERT is a real estate application that connects students and landlords for the purpose of finding and renting houses. Students can view available houses, send messages, make calls, and even make payments for houses through the application. Landlords can upload pictures of their houses and add amenities to their property listings.
<br/> <span className="font-medium">2.  Q: How can I create an account on ERT? </span> 
<br/> A: To create an account on ERT, simply download the application from the App Store or Google Play Store, and follow the registration process. You will be asked to provide relevant information such as your name, email address, and password to create your account.
<br/> <span className="font-medium">3.  Q: How can I view houses on ERT?</span>  
<br/> A: Once you have created an account on ERT, you can search for houses based on your preferred location, budget, and other criteria. The application will display available houses that match your search criteria. You can view pictures, amenities, and other details of the houses on the application.
<br/> <span className="font-medium">4.  Q: How can I contact landlords on ERT? </span>  
<br/> A: You can send messages or make calls to landlords through the ERT application. When you find a house you are interested in, you can send a message to the landlord to inquire about the property or schedule a viewing. You can also make calls to landlords directly from the application.
<br/> <span className="font-medium">5.  Q: Can I make payments for houses on ERT?</span>  
<br/> A: Yes, ERT facilitates payments for houses through the application. Once you have selected a house and reached an agreement with the landlord, you can make payments for the rent or deposit directly through the application. ERT provides a secure and convenient way to make payments.
<br/> <span className="font-medium">6.  Q: What can landlords do on ERT?</span>  
<br/> A: Landlords can upload pictures of their houses, add amenities, and provide details about their properties on the ERT application. They can also communicate with students through messages or calls, schedule viewings, and manage their property listings.
<br/> <span className="font-medium">7.  Q: How can I edit or update my property listings on ERT?</span>  
<br/> A: Landlords can easily edit or update their property listings on ERT through their account dashboard. They can add or modify pictures, amenities, and other details of their properties. It is important to keep your property listings accurate and up-to-date to attract potential tenants.
<br/> <span className="font-medium">8.  Q: Is my information safe on ERT?</span>  
<br/> A: ERT takes the privacy and security of user information seriously. The application uses industry-standard encryption and security measures to protect user data. However, it is important to exercise caution and not share any sensitive information with unknown users on the application.
<br/> <span className="font-medium">9.  Q: What should I do if I encounter a problem or have a question about ERT?</span>  
<br/> A: If you encounter any issues or have questions about ERT, you can contact our customer support team through the application or visit our website for contact information. Our team will be happy to assist you with any inquiries or concerns you may have.
<br/> <span className="font-medium">10.  Q: Are there any fees or charges to use ERT?</span>  
<br/> A: ERT is free to download and use for both students and landlords. However, there may be charges associated with payments made through the application, such as transaction fees or processing fees. These fees will be clearly communicated to you before making any payments.
<br/> <span className="font-medium">11.  Q: Can I terminate my account on ERT?</span>  
<br/> A: Yes, you can terminate your account on ERT at any time by following the account closure procedures provided in the application. Please note that terminating your account will result in the deletion of your account information and any data associated with it.
</p>
        </div>
     );
}
 
export default FAQs;