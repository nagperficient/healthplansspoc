import React, { Fragment, use, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DropdownItem } from 'reactstrap';
import { StoreContext } from '../../hooks/contexts/GlobalContext';
import { UserDataContext } from '../../hooks/contexts/UserContext';

// adjust the URL if your backend is elsewhere
// const socket = io('http://10.99.34.198:9092'); 

const renderObjectAsList = (obj) => {
  return Object.entries(obj).map(([key, value]) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return (
        <Fragment key={key}>
          {/* {JSON.stringify(value)} */}
          {key === "benefit_event_data" && <li className='text-success' style={{ wordBreak: "break-word", whiteSpace: "normal" }}>
            {/* <strong>{key}:</strong> */}

            {value.event_message}
          </li>}
        </Fragment>
      );
    }
    // else if (Array.isArray(value)) {
    //   return (
    //     <li key={key}>
    //       <strong>{key}:</strong>
    //       <ul>
    //         {value.map((item, index) => (
    //           <li key={index}>
    //             {typeof item === 'object' ? <ul>{renderObjectAsList(item)}</ul> : String(item)}
    //           </li>
    //         ))}
    //       </ul>
    //     </li>
    //   );
    // } 
    // else {
    //   return (
    //     <li key={key}>
    //       <strong>{key}:</strong> {String(value)}
    //     </li>
    //   );
    // }
  });
};

export default function EventsNotification() {
  const user = JSON.parse(localStorage.getItem("userData") || "{}")?.profile as any
  const { eventMessages } = use(StoreContext)
  const { plans } = use(UserDataContext)
  const [messages, setMessages] = useState([
    { id: 1, message: 'New user registered', time: '2 mins ago' },
    { id: 2, message: 'Health plan updated', time: '10 mins ago' },
    { id: 3, message: 'Server backup completed', time: '1 hour ago' }
  ])


  useEffect(() => {
    // Listen for events from the server
    // socket.on('benifit-events', (data) => {
    //   // Customize your toast — here we assume data has a `message` field
    //   toast.info(data.message || JSON.stringify(data), {
    //     position: 'top-right',
    //     autoClose: 5000,
    //     pauseOnHover: true,
    //   });
    // });
    // const socket = new WebSocket('ws://10.99.34.105:8080/ws/customer-events');

    // socket.onmessage = (event) => {
    //   const data = JSON.parse(event.data);
    //   // show toast or do whatever with data
    //   setMessages(prevMessages => ({ ...prevMessages, data }))
    //   console.log(messages)
    // };

    // Clean up on unmount
    return () => {
      // socket.off('kafka-notification');
    };
  }, []);

  const filteredEvents = eventMessages && eventMessages?.filter(
    (event) => plans?.includes(event.customer_health_plan?.plan_id)
  );
  console.log("filteredEvents", eventMessages)
  // const FilteredEventList = ({ events }) => {


  //   return (
  //     <ul>
  //       {filteredEvents.map((event, index) => (
  //         <li key={index}>
  //           <ul>{renderObjectAsList(event)}</ul>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };


  return (<div>

    {user?.role == "user" ? filteredEvents : eventMessages?.map((note, index) => (
      <DropdownItem key={note.id} style={{ position: "relative" }}>
        {/* <div>
          <span className='text-success'>{note.message}</span>
          <div className="text-info small">{note.time}</div>
        </div>
        <div> */}

        {/* </div> */}
        <ul style={{
          position: 'relative',
          borderRadius: '5px',
          padding: '10px 15px',
          display: 'block',
          maxWidth: '100%',
          paddingRight: "20px",
        }}>
          {renderObjectAsList(note)}
        </ul>
        <DropdownItem divider />
      </DropdownItem>
    ))}</div>);
}
