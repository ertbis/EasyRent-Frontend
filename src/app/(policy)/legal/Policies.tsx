"use client"
import { FC } from "react";
import { AiOutlineLeft } from "react-icons/ai";

interface Pageprops {
    setPage : React.Dispatch<React.SetStateAction<string>>
} 

const Policies:FC<Pageprops> = ({setPage}) => {
    return ( 
        <div className="" >
              <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-12  '>
                <a href="/">
                <AiOutlineLeft  size={30} className='text-green-700'/>
                </a>
                <p className='flex-1 text-center text-[1.2rem] font-[500] text-blue-800'> Policies</p>
            </div> 
            <p className="text-grey-light m-4 ">{"Legal > Policies"} </p>
            <p className="text-grey-light mx-4"> <span className="font-medium">1. User Conduct:</span> All users of the ERT application, including students and landlords, are expected to conduct themselves in a respectful and professional manner. Users are prohibited from engaging in any activities that may be harmful, disruptive, or offensive to others, including but not limited to harassing, threatening, or discriminatory behaviour. ERT reserves the right to take appropriate action, including suspension or termination of user accounts, for violations of this policy.
<br/> <span className="font-medium">2. Content Guidelines:</span> Users are responsible for the content they upload, post, or transmit through the ERT application. Content, including pictures and amenities, must be accurate, relevant, and comply with all applicable laws and regulations. Users are prohibited from uploading any content that is misleading, false, offensive, discriminatory, or violates the rights of others. ERT reserves the right to remove or modify any content that does not comply with these guidelines.
<br/> <span className="font-medium">3. Payment Policies:</span> ERT may facilitate payments for houses through the application. Users are required to provide accurate and complete payment information and to comply with all payment policies and guidelines set by ERT. Users are solely responsible for any payments made or received through the application and for resolving any payment-related issues directly with the other party involved. ERT does not guarantee the accuracy, reliability, or legality of any payment transactions.
<br/> <span className="font-medium">4. Privacy and Data Security:</span> ERT is committed to protecting the privacy and security of user information. Users are required to provide accurate and complete information during registration and to keep their account information updated. ERT collects and uses user information in accordance with its Privacy Policy, which outlines how information is collected, used, and protected. Users are responsible for maintaining the confidentiality of their account information and for any activities that occur under their account.
<br/> <span className="font-medium">5. Property Listings and Amenities:</span> Landlords are solely responsible for the accuracy and completeness of their property listings on the ERT application. Pictures and amenities added to property listings must be truthful, accurate, and representative of the actual property. Landlords are prohibited from misrepresenting or omitting any important information about their properties. ERT does not guarantee the availability, quality, or legality of any properties listed on the application, and users are encouraged to verify all information independently.
<br/> <span className="font-medium">6. Intellectual Property:</span> The ERT application and its content, including logos, trademarks, and copyrighted materials, are the property of ERT and its licensors. Users are prohibited from copying, modifying, distributing, or using any part of the application without prior written consent from ERT.
<br/> <span className="font-medium">7. Termination and Suspension: </span>ERT reserves the right to suspend or terminate user accounts or access to the application at any time, for any reason, without prior notice. Users may also terminate their account with ERT at any time by following the application's account closure procedures.
<br/> <span className="font-medium">8. Changes to Policies:</span> ERT reserves the right to modify or update these policies at any time without prior notice. Users are encouraged to review the most current version of the policies periodically. Continued use of the application after any changes constitutes acceptance of the updated policies.
<br/> <span className="font-medium">9. Disclaimer of Warranties and Limitation of Liability:</span> ERT provides the application "as is" and does not warrant the accuracy, completeness, or reliability of any information or content on the application. ERT disclaims all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. ERT shall not be liable for any damages, losses, or expenses arising from the use or inability to use the application, including but not limited to direct, indirect, incidental, consequential, or punitive damages.
</p>
        </div>
     );
}
 
export default Policies;