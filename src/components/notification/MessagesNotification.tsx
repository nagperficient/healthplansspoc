import { use, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { DropdownItem } from 'reactstrap';
import { StoreContext } from '../../hooks/contexts/GlobalContext';
import { UserDataContext } from '../../hooks/contexts/UserContext';


export default function MessagesNotification() {
  const { unreadMessages, markAsRead } = use(StoreContext)

  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    if (!currentId) return;
    markAsRead(currentId)
    return () => {
      // socket.off('kafka-notification');
    };
  }, [currentId]);

  return (<div>

    {unreadMessages?.map((note, index) => (
      <DropdownItem
        key={note.id}
        onClick={() => setCurrentId(note.id)}
        style={{
          position: "relative",
          backgroundColor: note.read ? 'white' : '#e6f7ff', // highlight unread
          cursor: 'pointer'
        }}
      ><span className={note.read ? 'text-muted' : 'text-dark'}>
          {note.message}
        </span></DropdownItem>
    ))}</div>);
}
