import { useEffect, useState } from "react";

const TimeAgo = ({ timestamp }: any) => {
    const [timeAgo, setTimeAgo] = useState('');
  
    useEffect(() => {
      const updateAgo = () => {
        const currentDate : any = new Date();
        const messageDate : any = new Date(timestamp);
  
        const timeDifference = currentDate - messageDate;
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
  
        if (seconds < 60) {
          setTimeAgo(`${seconds} second${seconds === 1 ? '' : 's'} ago`);
        } else if (minutes < 60) {
          setTimeAgo(`${minutes} minute${minutes === 1 ? '' : 's'} ago`);
        } else if (hours < 24) {
          setTimeAgo(`${hours} hour${hours === 1 ? '' : 's'} ago`);
        } else {
          setTimeAgo('more than a day ago');
        }
      };
  
      updateAgo();
      const intervalId = setInterval(updateAgo, 60000);
  
      return () => clearInterval(intervalId);
    }, [timestamp]);
  
    return <span className="text-gray-400 text-xs">{timeAgo}</span>;
  };



  export default TimeAgo