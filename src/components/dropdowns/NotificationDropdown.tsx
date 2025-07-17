import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from 'reactstrap';
import { Bell, User } from 'lucide-react'; // Optional: Lucide icon
import "./NotificationDropdown.css"
import EventsNotification from '../notification/EventsNotification';

const NotificationDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const notifications = [
    { id: 1, message: 'New user registered', time: '2 mins ago' },
    { id: 2, message: 'Health plan updated', time: '10 mins ago' },
    { id: 3, message: 'Server backup completed', time: '1 hour ago' }
  ];


  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret={false} color="light" className='nav-link btn btn-info'>
        <Bell size={20} />
        <Badge color="danger" pill className="me-1">
          {notifications.length}
        </Badge>
      </DropdownToggle>
      <DropdownMenu className="notification-dropdown-menu shadow-lg">
        <DropdownItem header>Notifications</DropdownItem>
        <EventsNotification />
        
        {/* <DropdownItem divider />
        <DropdownItem>View All</DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
};

export default NotificationDropdown;
