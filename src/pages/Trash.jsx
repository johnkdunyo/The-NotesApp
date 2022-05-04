import React from 'react';

import MobileNavbar from '../components/MobileNavbar';
import PageHeader from '../components/PageHeader';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import ReminderComponent from '../components/ReminderComponent';
import NoteComponent from '../components/NoteComponent';

const Trash = () => {
  return (
    <React.Fragment>
        <div className='wrapper sidebar-main'>
            <MobileNavbar />
            <SideBar />
            <div className='content-page'>
            <PageHeader pageTitle='Trash' />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    <div className='row'>

                    <ReminderComponent noteColor='danger'/>
                    <NoteComponent noteColor='dark' />


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

export default Trash