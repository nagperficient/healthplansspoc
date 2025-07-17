import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DropdownItem } from 'reactstrap';

// adjust the URL if your backend is elsewhere
// const socket = io('http://10.99.34.198:9092'); 



export default function EventsNotification() {
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
    const socket = new WebSocket('ws://10.99.34.105:8080/ws/customer-events');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // show toast or do whatever with data
      setMessages(prevMessages => ({ ...prevMessages, data }))
    };

    // Clean up on unmount
    return () => {
      // socket.off('kafka-notification');
    };
  }, []);



  return (<div>{messages.map((note) => (
    <DropdownItem key={note.id}>
      <div>
        <span className='text-success'>{note.message}</span>
        <div className="text-info small">{note.time}</div>
      </div>
      <div>

      </div>
      <DropdownItem divider />
    </DropdownItem>
  ))}</div>);
}
