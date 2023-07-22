

const InboxPage = () => {
    return ( 
        <div className=" mx-4 flex flex-col items-center justify-center h-[70vh]">
        <div className=" flex items-center justify-center  h-32 w-32 rounded-full">
        <img src='inboxIcon.png' alt='Inbox Icon' className='w-full h-full  rounded-xl ' />

        </div>
          <p className="text-blue-800 text-center w-56 mt-4 text-xl">You have no messages at the moment</p>
      </div>
     );
}
 
export default InboxPage;