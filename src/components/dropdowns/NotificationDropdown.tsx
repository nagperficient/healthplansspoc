import React, { use, useState, useEffect } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from 'reactstrap';
import { Bell } from 'lucide-react'; // Lucide icon
import './NotificationDropdown.css';
import MessagesNotification from '../notification/MessagesNotification';
import { StoreContext } from '../../hooks/contexts/GlobalContext';
import { UserDataContext } from '../../hooks/contexts/UserContext';

const NotificationDropdown = () => {
  const { unreadMessages, markAsRead } = use(StoreContext); // Access unreadMessages and markAsRead
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0); // Local state for unread message count

  const toggle = () => setDropdownOpen(prevState => !prevState);

  // Effect to update the unreadCount when unreadMessages change
  useEffect(() => {
    setUnreadCount(unreadMessages?.filter(note => note.isRead === false).length || 0);
  }, [unreadMessages]); 


  const handleMarkAsRead = (id) => {
    markAsRead(id); 
    setUnreadCount(prevCount => prevCount - 1); 
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret={false} color="light" className="nav-link btn btn-info">
        <Bell size={20} />
        <Badge color="danger" pill className="me-1">
          {unreadCount}
        </Badge>
      </DropdownToggle>
      <DropdownMenu className="notification-dropdown-menu shadow-lg">
        <DropdownItem header>Notifications</DropdownItem>
        <MessagesNotification onMarkAsRead={handleMarkAsRead} />
      </DropdownMenu>
    </Dropdown>
  );
};

export default NotificationDropdown;
