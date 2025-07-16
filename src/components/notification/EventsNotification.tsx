import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Connect to your backend WebSocket server
const socket = io('http://localhost:4000'); // Replace with your actual backend URL

export default function EventsNotification() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    socket.on('kafka-notification', (data) => {
      // Show toast
      toast.info(data.message || JSON.stringify(data), {
        position: 'top-right',
        autoClose: 5000,
        pauseOnHover: true,
      });

      // Update live messages
      setMessages((prev) => [data, ...prev]);
    });

    return () => {
      socket.off('kafka-notification');
    };
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h4>Live Notifications</h4>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.title || 'Notification'}:</strong> {msg.message || JSON.stringify(msg)}
          </li>
        ))}
      </ul>

      <ToastContainer />
    </div>
  );
}
