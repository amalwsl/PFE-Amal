import React,{ useState } from "react";
import Notifications from "react-notifications-menu";

const DEFAULT_NOTIFICATION = {
  image:
    "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
  message: "Notification one.",
  detailPage: "/events",
  receivedTime: "12h ago"
};
 const Notification=()=> {
  const [data, setData] = useState([DEFAULT_NOTIFICATION]);

  
  return (
    
      
        <Notifications
          data={data}
          header={{
            title: "Notifications",
            option: { text: "View All", onClick: () => console.log("Clicked") }
          }}
          markAsRead={(data) => {
            console.log(data);
          }}
        />
      
      
    
  );
}

export default Notification;
