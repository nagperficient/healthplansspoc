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

const NotificationDropdown = () => {
  const {eventMessages} = use(StoreContext)
  const {plans,profile} = use(UserDataContext)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const notifications = [
    { id: 1, message: 'New user registered', time: '2 mins ago' },
    { id: 2, message: 'Health plan updated', time: '10 mins ago' },
    { id: 3, message: 'Server backup completed', time: '1 hour ago' }
  ];
const filteredEvents = eventMessages && eventMessages?.filter(
    (event) =>plans?.includes(event.customer_health_plan?.plan_id)
  );
  console.log("filteredEvents",eventMessages)

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret={false} color="light" className='nav-link btn btn-info'>
        <Bell size={20} />
        <Badge color="danger" pill className="me-1">
          {profile?.role === "user" ? filteredEvents?.length||0 : eventMessages.length||0}
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
