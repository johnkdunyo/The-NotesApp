import React from 'react';

import MobileNavbar from '../components/MobileNavbar';
import PageHeader from '../components/PageHeader';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import NoteComponent from '../components/NoteComponent';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const notes = useSelector(state=>state.note.allNotes)
  // console.log(notes)
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

                    {/* map and display all notes */}
                    {notes.map(note=>(
                      <NoteComponent 
                        key={note._id}
                        noteColor={note.color}
                        noteTitle={note.title}
                        noteDescription={note.description}
                        notePriority={note.priority}
                        noteDate={note.createdAt}
                      />
                    ))}
                    {/* <NoteComponent noteColor='danger'/>
                    <NoteComponent />
                    <NoteComponent noteColor='warning'/>
                    <NoteComponent noteColor='info'/>
                    <NoteComponent noteColor='success'/>
                    <NoteComponent noteColor='light'/> 
                    <NoteComponent noteColor='dark'/>
                    <NoteComponent noteColor='purple'/>
                    <NoteComponent noteColor='white' /> */}


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