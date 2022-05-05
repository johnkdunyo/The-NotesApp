import React from 'react';

import MobileNavbar from '../components/MobileNavbar';
import PageHeader from '../components/PageHeader';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import DeleteNoteComponent from '../components/DeleteNoteComponent';

const Trash = () => {
  const deletedNotes = useSelector(state=>state.note.allNotes.filter(note=>note.deleted===true));
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

                    {/* <ReminderComponent noteColor='danger'/> */}
                    {deletedNotes.map((note)=>(
                      <DeleteNoteComponent
                        key={note._id}
                        noteID={note._id}
                        noteColor={note.color}
                        noteTitle={note.title}
                        noteDescription={note.description}
                        notePriority={note.priority}
                        noteDate={note.createdAt}
                      />
                    ))}
                    


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