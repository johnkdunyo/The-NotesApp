import React from 'react';

import MobileNavbar from '../components/MobileNavbar';
import PageHeader from '../components/PageHeader';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import ReminderComponent from '../components/ReminderComponent';

const Reminders = () => {
  return (
    <React.Fragment>
        <div className='wrapper sidebar-main'>
            <MobileNavbar />
            <SideBar />
            <div className='content-page'>
            <PageHeader pageTitle='Reminders' />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    <div className='row'>

                    <ReminderComponent noteColor='danger'/>
                    <ReminderComponent />
                    <ReminderComponent noteColor='warning'/>
                    <ReminderComponent noteColor='info'/>
                    <ReminderComponent noteColor='success'/>
                    {/* <ReminderComponent noteColor='light'/> */}
                    <ReminderComponent noteColor='dark'/>
                    <ReminderComponent noteColor='purple'/>


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

export default Reminders