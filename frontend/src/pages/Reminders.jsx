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

                    <ReminderComponent compColor='danger'/>
                    <ReminderComponent />
                    <ReminderComponent compColor='warning'/>
                    <ReminderComponent compColor='info'/>
                    <ReminderComponent compColor='success'/>
                    {/* <ReminderComponent compColor='light'/> */}
                    <ReminderComponent compColor='dark'/>
                    <ReminderComponent compColor='purple'/>


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