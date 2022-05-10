import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import MobileNavbar from '../components/MobileNavbar'
import PageHeader from '../components/PageHeader'
import SideBar from '../components/SideBar'

const Profile = () => {
    const user = useSelector(state=>state.user.user)

  return (
    <React.Fragment>
        <div className='wrapper sidebar-main'>
            <MobileNavbar />
            <SideBar />
            <div className='content-page'>
                <PageHeader pageTitle='My Profile' />

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='card'>
                                <div className='card-body p-0 pb-3'>
                                    <div className='row card-transparent'>
                                    <div className='col-lg-12 profile-image position-relative'>
                                        <img src='assets/images/notes_profile-banner.jpg' className='image-fluid w-100'  alt='user profile banner'/>
                                    </div>
                                    <div className='col'>
                                    <div className='my-profile-overly'>
                                        <img  src='assets/images/notes_user.png' className='image-fluid' alt='user profile avatar'/>
                                    </div>
                                    </div>
                                    <div className='col'>
                                        <div className='my-profile-edit-button'> 
                                        <button type='button' className='bt btn-outline-primary rounded mt-2'>Edit Profile</button>
                                        </div>
                                    </div>
                                    </div>

                                    <div className='my-profile-details'>
                                        <h3>{user.firstName.concat(" ", user.lastName)}</h3>
                                        <p className='text-muted'>{user.email}</p>
                                    </div>

                                    <div className='row d-flex justify-content-between px-4 pt-4'>
                                        <div className='my-profile-details-item'>
                                            <p>
                                                <span className='emoji'>🎈 </span>
                                                Born: <span className='text-muted'>January 30, 2022</span>
                                            </p>
                                        </div>

                                        <div className='my-profile-details-item'>
                                            <p>
                                                <span className='emoji'>🗓️ </span>
                                                Joined: <span className='text-muted'>May 02, 2022</span>
                                            </p>
                                        </div>

                                        <div className='my-profile-details-item'>
                                            <p>
                                                <span className='emoji'>📚 </span>
                                                56 <span className='text-muted'>Active Notes</span>
                                            </p>
                                        </div>

                                        

                                    </div>
                                </div>
                            
                            

                           

                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer /> 
    </React.Fragment>
  )
}

export default Profile