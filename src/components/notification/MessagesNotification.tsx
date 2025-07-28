import { use, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { DropdownItem } from 'reactstrap';
import { StoreContext } from '../../hooks/contexts/GlobalContext';
import { UserDataContext } from '../../hooks/contexts/UserContext';

export default function MessagesNotification({ onMarkAsRead }) {
  const { unreadMessages } = use(StoreContext);
  const [currentId, setCurrentId] = useState(null);

  // Function to mark a message as read
  const markAsRead = (id) => {
    console.log(id);
    setCurrentId(id);
    onMarkAsRead(id); // Call the parent function to update the count in NotificationDropdown
  };

  useEffect(() => {
    if (!currentId) return;
    // Mark the message as read when the currentId is set
    // This effect will run when a message is clicked
    // Optional: socket.off('kafka-notification');
  }, [currentId]);

  return (
    <div>
      {unreadMessages
        ?.filter(note => note.is_read === false) // Only show unread messages
        .map((note) => (
          <DropdownItem
            key={note.id}
            onClick={() => markAsRead(note.id)} // Mark message as read
            style={{
              position: 'relative',
              backgroundColor: '#e6f7ff', // Highlight unread messages
              cursor: 'pointer',
            }}
          >
            <span className="text-dark">
              {note.message}
            </span>
          </DropdownItem>
        ))}
    </div>
  );
}
