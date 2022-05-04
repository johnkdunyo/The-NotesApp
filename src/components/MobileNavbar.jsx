import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { NoteIcon, SettingsIcon } from '../Icons';
import BellIcon from '../Icons/BellIcon';
import ProfileIcon from '../Icons/ProfileIcon';
import TrashIcon from '../Icons/TrashIcon';
import LogoutIcon from '../Icons/LogoutIcon'
import { useDispatch } from 'react-redux';
import { logOutCurrentUser } from '../redux/reducers/userSlice';

const MobileNavbar = () => {
  const dispatch = useDispatch();

  const [userDropDown, setUserDropDown ] = useState('');
  const [hamburgerContent, setHamburgerContent] = useState('');

  const onClickUserHandler=()=>{
    setUserDropDown(prev=>!prev);
  }

  const onclickHamburgerHandler=()=>{
    setHamburgerContent(prev=>!prev)
  }


  const [notesDropDown, setNotesDropDown] = useState('');
  const [reminderDropDown, setReminderDropDown] = useState('');

  const onClickReminderDropDownHandler =() => {
    setReminderDropDown(prev=>!prev)
  }

  const onClickNotesDropDownHandler =() => {
    setNotesDropDown(prev=>!prev)
  }


  return (
    <React.Fragment>
        <div className="iq-top-navbar">
          <div className="iq-navbar-custom">
              <nav className="navbar navbar-expand-lg navbar-light p- d-flex">
                  <div className="d-flex justify-content-between">
                    <div className={`caption-content show-data ${hamburgerContent && 'show'}`}>
                        <button className='navbar-toggler' onClick={onclickHamburgerHandler}>
                            <i className="fi fi-rr-menu-burger wrapper-menu open"></i>
                        </button>
                          <div className={`dropdown-menu dropdown-menu-right w-100 border-0 py-2 px-0 ${hamburgerContent &&  'show'}`} aria-labelledby="h-dropdownMenuButton001">
                            <div className="dropdown-item mb-3">
                                <div className={`caption-content show-data ${notesDropDown && 'show'}`}>
                                <div onClick={onClickNotesDropDownHandler}>
                                <NoteIcon />
                                <span className="mt-2"> My Notes</span>
                                </div>
                                <div className={`dropdown-menu dropdown-menu-right w-100 border-0 py-2 px-3 ${notesDropDown &&  'show'}`} aria-labelledby="h-dropdownMenuButton001">
                                  <Link to="/home" className="dropdown-item mb-3">
                                      <NoteIcon /> {' '}
                                      <span className="mt-2"> All Notes</span>
                                  </Link>
                                  <Link to="/newnote" className="dropdown-item mb-3">
                                      <BellIcon /><span></span>
                                      <span> Add New Note</span>
                                  </Link>
                                </div>
                                </div>
                            </div>

                            <div className="dropdown-item mb-3">
                                <div className={`caption-content show-data ${reminderDropDown && 'show'}`}>
                                <div onClick={onClickReminderDropDownHandler}>
                                <BellIcon />
                                <span className="mt-2"> My Reminders</span>
                                </div>
                                <div className={`dropdown-menu dropdown-menu-right w-100 border-0 py-2 px-3 ${reminderDropDown &&  'show'}`} aria-labelledby="h-dropdownMenuButton001">
                                  <Link to="/reminder" className="dropdown-item mb-3">
                                      <BellIcon /> {' '}
                                      <span className="mt-2"> All Reminders</span>
                                  </Link>
                                  <Link to="/newreminder" className="dropdown-item mb-3">
                                      <BellIcon /><span></span>
                                      <span> Add New Reminder</span>
                                  </Link>
                                </div>
                                </div>
                            </div>

                            <Link to="/trash" className="dropdown-item mb-3">
                                <TrashIcon />
                                <span> Trashes</span>
                            </Link>
                          </div>
                      </div>
                  </div>
                  <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                      <Link to="/home" className="header-logo">
                              <img src="assets/images/notes_icon.png" className="img-fluid rounded-normal light-logo" alt="logo" />
                      </Link>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className={`caption-content show-data ${userDropDown && 'show'}`}>
                    <div className="iq-avatar" onClick={onClickUserHandler}>
                           <img className="avatar-40 rounded" src="assets/images/notes_user.png" alt="user log" />
                    </div>
                    <div className={`dropdown-menu dropdown-menu-right w-100 border-0 py-2 ${userDropDown &&  'show'}`} aria-labelledby="h-dropdownMenuButton001">
                        <Link to="/home" className="dropdown-item mb-2">
                            <ProfileIcon />
                            <span className="mt-2"> My Profile</span>
                        </Link>
                        <Link to="/home" className="dropdown-item mb-2">
                            <SettingsIcon />
                            <span> Settings</span>
                        </Link>
                        <hr className="my-1" />
                        <button className="dropdown-item" onClick={()=>dispatch(logOutCurrentUser())}>
                            <LogoutIcon />
                            <span> Logout</span>
                        </button>
                      </div>
                    </div>
                    
                  </div>
              </nav>
          </div>
      </div> 
    </React.Fragment>
  )
}

export default MobileNavbar