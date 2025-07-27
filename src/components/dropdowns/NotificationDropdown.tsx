import React, { use, useState } from 'react';
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
import { StoreContext } from '../../hooks/contexts/GlobalContext';
import { UserDataContext } from '../../hooks/contexts/UserContext';
import MessagesNotification from '../notification/MessagesNotification';

const NotificationDropdown = () => {
  const {unreadMessages} = use(StoreContext);
  const {plans,profile} = use(UserDataContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);



  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret={false} color="light" className='nav-link btn btn-info'>
        <Bell size={20} />
        <Badge color="danger" pill className="me-1">
          {unreadMessages.length||0}
        </Badge>
      </DropdownToggle>
      <DropdownMenu className="notification-dropdown-menu shadow-lg">
        <DropdownItem header>Notifications</DropdownItem>
        <MessagesNotification />
        
        {/* <DropdownItem divider />
        <DropdownItem>View All</DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
};

export default NotificationDropdown;
