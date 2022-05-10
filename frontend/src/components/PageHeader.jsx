import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutCurrentUser } from '../redux/reducers/userSlice';

const PageHeader = ({pageTitle}) => {
    const dispatch = useDispatch();


  const [userDropDown, setUserDropdown ] = useState('');

  const onClickUserHandler =(e) => {
    setUserDropdown((prev)=>!prev);
  }


  return (
    <React.Fragment>
        <div className="container-fluid">
          <div className="desktop-header">
              <div className="card card-block">
                  <div className="card-body d-flex">
                      <div className="col-lg-8 d-flex justify-content-between">
                          <h4 className="text-capitalize">{pageTitle? pageTitle : 'New Page'}</h4>
                      </div>
                      <div className='col-lg-4 topnav-right'>
                          <ul className="list-inline m-0 p-0 d-flex align-items-center justify-content-around">
                              <li className='nav-item nav-icon dropdown'>Messages</li>
                              <li className='nav-item nav-icon dropdown pl-3'>
                                <div className={`caption-content show-data ${userDropDown && 'show'}`}>
                                <div className="iq-avatar " onClick={onClickUserHandler} data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                  <img className="avatar-40 rounded" src="assets/images/notes_user.png" alt="#" data-original-title="" title="" />
                                </div>
                                <div className={`dropdown-menu dropdown-menu-right w-100 border-0 py-2 ${userDropDown &&  'show'}`} aria-labelledby="h-dropdownMenuButton001">
                                  <Link to="/profile" className="dropdown-item mb-2">
                                      <i className="lar la-user-circle font-size-20 mr-1"></i>
                                      <span className="mt-2">My Profile</span>
                                  </Link>
                                  <Link to="/home" className="dropdown-item mb-2">
                                      <i className="las la-user-edit font-size-20 mr-1"></i>
                                      <span>Edit Profile</span>
                                  </Link>
                                  <hr className="my-1" />
                                  <button className="dropdown-item" onClick={()=>dispatch(logOutCurrentUser())}>
                                      <i className="las la-sign-out-alt font-size-20 mr-1"></i>
                                      <span>Logout</span>
                                  </button>
                                </div>
                                </div>
                              </li>
                          </ul>
                      </div>
                      {/* <div className='col-lg-4 topnav-right'>
                          <div className={`caption-content show-data ${userDropDown}`}>
                            <div  className="iq-user-toggle d-flex align-items-center justify-content-between" onClick={onClickUserHandler} id="h-dropdownMenuButton001" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <img src="assets/images/notes_user.png" className="img-fluid rounded avatar-50" alt="user" />
                            </div>
                            <div className={`dropdown-menu dropdown-menu-right w-100 border-0 py-2 ${userDropDown}`} aria-labelledby="h-dropdownMenuButton001">
                                <Link to="/home" className="dropdown-item mb-2">
                                    <i className="lar la-user-circle font-size-20 mr-1"></i>
                                    <span className="mt-2">My Profile</span>
                                </Link>
                                <Link to="/home" className="dropdown-item mb-2">
                                    <i className="las la-user-edit font-size-20 mr-1"></i>
                                    <span>Edit Profile</span>
                                </Link>
                                <hr className="my-1" />
                                <Link to="/" className="dropdown-item">
                                    <i className="las la-sign-out-alt font-size-20 mr-1"></i>
                                    <span>Logout</span>
                                </Link>
                            </div>
                        </div>
                      </div> */}
                  </div>
                  
              </div>
              {/* <div className="card topnav-right">
                  <div className="card-body card-content-right">
                      <ul className="list-inline m-0 p-0 d-flex align-items-center justify-content-around">
                          <li className='nav-item nav-icon dropdown'>Messages</li>
                          <li className='nav-item nav-icon dropdown pl-3'>Notification</li>
                          
                      </ul>
                  </div>
                </div> */}
          </div>        
        </div>
    </React.Fragment>
  )
}

export default PageHeader