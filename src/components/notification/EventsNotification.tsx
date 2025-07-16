import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// adjust the URL if your backend is elsewhere
const socket = io('http://localhost:4000');

export default function EventsNotification() {
  useEffect(() => {
    // Listen for events from the server
    socket.on('kafka-notification', (data) => {
      // Customize your toast — here we assume data has a `message` field
      toast.info(data.message || JSON.stringify(data), {
        position: 'top-right',
        autoClose: 5000,
        pauseOnHover: true,
      });
    });

    // Clean up on unmount
    return () => {
      socket.off('kafka-notification');
    };
  }, []);

  return <ToastContainer />;
}
