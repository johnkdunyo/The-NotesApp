import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { CalendarIcon, SettingsIcon } from '../Icons';
import TrashIcon from '../Icons/TrashIcon';
import BellIcon from '../Icons/BellIcon'
import { NoteIcon } from '../Icons';

const SideBar = () => {


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
        <div className="iq-sidebar sidebar-default ">
          <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
              <Link to="/home" className="header-logo">
                  <img src="assets/images/notes_icon.png" className="img-fluid rounded-normal light-logo" alt="logo" /> 
                    <h4 className="logo-title ml-3">
                      The NotesApp
                    </h4>
              </Link>
              <div className="iq-menu-bt-sidebar">
                  <i className="las la-times wrapper-menu"></i>
              </div>
          </div>
            <div className="sidebar-content" data-scroll="1">
                <div className="iq-search-bar device-search mb-3 mt-5">
                  <form action="#" className="searchbox">
                  <Link to="/home" className="search-link" href="#"><i className="ri-search-line"></i></Link>
                  <input type="text" className="text search-input" placeholder="Search" />
                  </form>
                </div>

                

                <nav className="iq-sidebar-menu">
                  <ul id="iq-sidebar-toggle" className="iq-menu mt-5">
                    <li className='mb-3'>
                      <div className={`caption-content show-data ${notesDropDown && 'show'}`}> 
                        <button className='btn btn-outline-link' onClick={onClickNotesDropDownHandler}>
                          <NoteIcon />{' '}
                          My Notes
                        </button>
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
                    </li>

                    <li className='mb-3'>
                      <div className={`caption-content show-data ${reminderDropDown && 'show'}`}> 
                        <button className='btn btn-outline-link' onClick={onClickReminderDropDownHandler}>
                          <BellIcon />{' '}
                          Reminders
                        </button>
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
                    </li>

                    <li>
                      <Link to="/trash" className='mb-0'> 
                        <button className='btn btn-outline'>
                          <TrashIcon />
                          {' '}
                          Trash
                        </button>
                      </Link>
                    </li>
                    
                  </ul>
                </nav>
            </div>    
          
          
      </div>      
    </React.Fragment>
  )
}

export default SideBar