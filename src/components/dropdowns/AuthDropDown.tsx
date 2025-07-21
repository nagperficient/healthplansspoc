import { LogOut, User, User2 } from 'lucide-react';
import { useState } from 'react'
import { Button, List } from 'reactstrap'
import "./AuthDropDown.css";
import NotificationDropdown from './NotificationDropdown';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
type Props = {}

const AuthDropDown = (props: Props) => {
    const navigate = useNavigate()
    const {isLoggedInUser} = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <div className='d-flex' style={{ position: "relative" }}>
            
            <NotificationDropdown />
            <div className="user-logout-status-dropdown">
                 <Button className='nav-link btn btn-info d-flex align-items-center justify-content-center gap-2' onClick={toggle}>
                <User size={20} /><span>{isLoggedInUser?.first_name}({isLoggedInUser?.role})</span>
            </Button>
            <div className='user-logout-status-dropdown-box'>
                 <List type="unstyled" className="d-flex flex-column listitem align-items-center justify-content-start px-1 py-2">
                   
                    <li onClick={()=>navigate("/profile")}><User2 size={20} /> Profile</li>
                </List>
                <List type="unstyled" className="d-flex flex-column listitem align-items-center justify-content-start px-1 py-2">
                    <li onClick={()=>{
                        localStorage.clear();
                        window.location.href="/"
                    }}><LogOut size={20} /> Logout</li>
                </List>
               
            </div>
            </div>
           
            
        </div>
    )
}

export default AuthDropDown