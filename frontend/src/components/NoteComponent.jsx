import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CalendarIcon from '../Icons/CalendarIcon';
import MoreVerticalIcon from '../Icons/MoreVerticalIcon';
import { deleteNote } from '../redux/reducers/noteSlice';

// sweet alert configurationss
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const NoteComponent = ({noteID, noteColor, noteSize, noteTitle, noteDescription, noteDate, notePriority}) => {
    // console.log(noteID)
    const componentColor =  noteColor ? noteColor : 'primary';
    noteTitle = noteTitle? noteTitle : 'Note Title';
    noteDescription = noteDescription ? noteDescription : 'With The NotesApp, you can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note';
    noteDate = noteDate ? new Date(noteDate).toDateString() : '01 May 2022'
    notePriority = notePriority ? notePriority : 'low'

    // set prirorityIcon
    let notePriorityIcon = 'fi-rr-level-down-alt'
    if(notePriority === 'high'){
        notePriorityIcon = 'fi-rr-level-up-alt'
    } else if(notePriority === 'medium'){
        notePriorityIcon = 'fi-rr-beer'
    } else {
        notePriorityIcon = 'fi-rr-level-down-alt'
    }


    noteSize = noteSize ? noteSize : 'col-lg-4 col-md-6';

    const dispatch = useDispatch();
    const [optionsOpen, ssetOptionsOpen] = useState(false);


    const onClickOptionsHandler =()=>{
        ssetOptionsOpen(prev=>!prev)
        // console.log(optionsOpen)
    }

    const onClickDeleteNote = (e) => {
        e.preventDefault();
        MySwal
        .fire({
            title: "Are you sure you want to delete this note?",
            text: "This action is irreversible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#f674ad',
            cancelButtonColor: '#8ac3a3',
            confirmButtonText: "Yes, delete it",
            showLoaderOnConfirm: true,
            preConfirm: async() => {
                try {
                    const response = await dispatch(deleteNote(noteID)).unwrap();
                    console.log(response)
                } catch (error) {
                    return error.response.message
                }
            }
        })
        .then(result=>{
            if(result.isConfirmed){
                MySwal.fire(
                    'Deleted!',
                    'Note deleted successfully',
                    'success'
                );
                window.location.reload();
            }
        });

        

    
    }

  return (
    <React.Fragment>
        <div className={`${noteSize}`}>
            <div className={`card card-block card-stretch card-height card-bottom-border-${componentColor} note-detail`}>
                <div className="card-header d-flex justify-content-between pb-0">
                    <div className={`icon iq-icon-box-2 icon-border-${componentColor} rounded`}>
                        <CalendarIcon />
                    </div>
                    
                    <div className="card-header-toolbar d-flex align-items-center">
                        <div className="dropdown show">
                            <span className="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton4"
                                data-toggle="dropdown" role="button"  onClick={onClickOptionsHandler}>
                                <MoreVerticalIcon  />
                            </span>
                            <div className={`dropdown-menu dropdown-menu-right ${optionsOpen && 'show'} `}
                                aria-labelledby="note-dropdownMenuButton4">
                                <p className="dropdown-item text-dark" ><i className="fi-rr-eye mr-3"></i>View</p>
                                <Link to={`/editnote/${noteID}`}> <p className="dropdown-item text-dark" ><i className="fi-rr-edit-alt mr-3"></i>Edit</p> </Link>
                                <p className="dropdown-item text-dark" onClick={onClickDeleteNote} ><i className="fi-rr-delete-document mr-3"></i>Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body rounded">
                    <h4 className="card-title">{noteTitle}</h4>
                    <p className="mb-4 card-description short">{noteDescription}</p>
                    <div className='items-list mt-4'>
                        <h4 className="card-title">Tasks for the Day</h4>
                        <div className="checkbox mb-2">
                            <input type="checkbox" className="checkbox-input mr-3" id="checkbox18"/>
                            <label htmlFor="checkbox18" className="note-checkbox mb-0">Laundry</label>
                        </div>
                        <div className="checkbox mb-2">
                            <input type="checkbox" className="checkbox-input mr-3" id="checkbox19"/>
                            <label htmlFor="checkbox19" className="note-checkbox mb-0">Prepare stew for the week</label>
                        </div>
                        <div className="checkbox mb-2">
                            <input type="checkbox" className="checkbox-input mr-3" id="checkbox20"/>
                            <label htmlFor="checkbox20" className="note-checkbox mb-0">Rest</label>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="d-flex align-items-end justify-content-between note-text note-text-white">
                        <p><i className={`${notePriorityIcon}  font-size-20`}>{' '}</i>{notePriority}</p>
                        <p><i className="fi-rr-calendar mr-2 font-size-20"></i>{noteDate}</p>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default NoteComponent