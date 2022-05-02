import React from 'react';

import MobileNavbar from '../components/MobileNavbar';
import PageHeader from '../components/PageHeader';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import NoteComponent from '../components/NoteComponent';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
        <div className='wrapper sidebar-main'>
            <MobileNavbar />
            <SideBar />
            <div className='content-page'>
            <PageHeader pageTitle='All Notes' />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    <div className='row'>
                    
                    <div className='col-lg-4 col-md-6'>
                      <div className='card card-block card-stretch card-height'>
                        <div className='card-body rounded text-center'>
                          <Link to='/newnote'><button className='btn btn-dark btn-block'>New Note</button></Link>
                        </div>
                      </div>
                    </div>
                    <NoteComponent compColor='danger'/>
                    <NoteComponent />
                    <NoteComponent compColor='warning'/>
                    <NoteComponent compColor='info'/>
                    <NoteComponent compColor='success'/>
                    {/* <NoteComponent compColor='light'/> */}
                    <NoteComponent compColor='dark'/>
                    <NoteComponent compColor='purple'/>
                    <NoteComponent compColor='white' />


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

export default Home