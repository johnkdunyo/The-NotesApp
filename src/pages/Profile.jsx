import React from 'react'
import MobileNavbar from '../components/MobileNavbar'
import PageHeader from '../components/PageHeader'
import SideBar from '../components/SideBar'

const Profile = () => {
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
                                        <img src='assets/images/notes_profile-banner.jpg' className='image-fluid rounded w-100'  alt='user profile banner'/>
                                    </div>
                                    <div className='col'>
                                    <div className='profile-overly'>
                                        <img  src='assets/images/notes_user.png' className='image-fluid' alt='user profile avatar'/>
                                    </div>
                                    </div>
                                    <div className='col'>
                                        <div className='profile-edit-button'> 
                                        <button type='button' className='bt btn-outline-primary rounded mt-2'>Edit Profile</button>
                                        </div>
                                    </div>
                                    </div>

                                    <div className='profile-details'>
                                        <h3>Jon Dexter</h3>
                                        <p className='text-muted'>johnkdunyo@gmail.com</p>
                                    </div>
                                </div>
                            
                            

                           

                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </React.Fragment>
  )
}

export default Profile