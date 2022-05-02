import React from 'react'

const ReminderComponent = ({compColor, compSize}) => {

    const componentColor =  compColor ? compColor : 'primary';
    const noteTitle = 'Note Title';
    const noteText = 'With The NotesApp, you can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note';
    const noteDate = '01 May 2022'

    compSize = compSize ? compSize : "col-lg-4 col-md-6"

  return (
    <React.Fragment>
        <div className={`${compSize}`}>
            <div className={`card card-block card-stretch card-height card-bottom-border-${componentColor} note-detail`}>
                <div className="card-header d-flex justify-content-between pb-1">
                    <div className={`icon iq-icon-box-2 icon-border-${componentColor} rounded`}>
                        <svg width="23" height="23" className="svg-icon" id="iq-main-01" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="card-header-toolbar d-flex align-items-center">
                        <div className="dropdown">
                            <span className="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton4"
                                data-toggle="dropdown" aria-expanded="false" role="button">
                                <i className="ri-more-fill"></i>
                            </span>
                            <div className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="note-dropdownMenuButton4">
                                <p className="dropdown-item new-note1" data-toggle="modal" data-target="#new-note1"><i className="las la-eye mr-3"></i>View</p>
                                <p className="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i className="las la-pen mr-3"></i>Edit</p>
                                <p className="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i className="las la-trash-alt mr-3"></i>Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body rounded">
                    <h4 className="card-title">{noteTitle}</h4>
                    <p className="mb-3 card-description short">{noteText}</p>
                    <div className="card-body rounded">
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
                    <div className="d-flex align-items-center justify-content-between note-text note-text-white">
                        <p><i className="las la-user-friends mr-2 font-size-20"></i>03 Days left</p>
                        <p><i className="las la-calendar mr-2 font-size-20"></i>{noteDate}</p>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ReminderComponent