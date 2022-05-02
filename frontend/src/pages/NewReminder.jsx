import React from 'react'
import Footer from '../components/Footer'
import MobileNavbar from '../components/MobileNavbar'
import NoteComponent from '../components/NoteComponent'
import PageHeader from '../components/PageHeader'
import SideBar from '../components/SideBar'

import { SettingsIcon, CommentsIcon, CameraIcon, BirthdayIcon ,FileIcon, CalendarIcon, NoteIcon, TimelineIcon } from '../Icons'
 

const NewReminder = () => {


    const onSubmitFormHandler=()=>{
        // TODO; handle note creationg
    }

  return (
    <React.Fragment>
        <div className='wrapper sidebar-main'>
            <MobileNavbar />
            <SideBar />
            <div className='content-page'>
                <PageHeader pageTitle='Add new Reminder' />

                <div className='col-lg-12'>
                    <div className=''>
                        <div className=''>
                        <div className='row'>
                            <div className="col-md-8">
                                <div className='card card-block card-stretch card-height p-3'>
                                <form onSubmit={onSubmitFormHandler}>
                                    <div className="form-group">
                                        <label className="label-control">Title</label>
                                        <input type="text" className="form-control" name="title" placeholder="Example Note"  data-change="input" data-custom-target="#note-title"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="label-control">Description</label>
                                        <textarea type="text" className="form-control" name="description" rows="3" data-change="input" data-custom-target="#note-description" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label className="label-control">Reminder Date</label>
                                        <input type="date" className="form-control" name="reminder_date" placeholder="2021-01-01" data-change="input" data-custom-target="#note-reminder-date"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="label-control">Icon</label>
                                        <div id="icon-button">
                                            <button className="btn btn-outline-primary ml-1 active" type="button" data-change="click" data-custom-target="#note-icon">
                                                <CalendarIcon />
                                            </button>
                                            <button className="btn btn-outline-primary ml-1" type="button" data-change="click" data-custom-target="#note-icon">
                                                <NoteIcon />
                                            </button>
                                            <button className="btn btn-outline-primary ml-1" type="button" data-change="click" data-custom-target="#note-icon">
                                                <TimelineIcon />
                                            </button>
                                            <button className="btn btn-outline-primary ml-1" type="button" data-change="click" data-custom-target="#note-icon">
                                                <FileIcon />
                                            </button>
                                            <button className="btn btn-outline-primary ml-1" type="button" data-change="click" data-custom-target="#note-icon">
                                                <BirthdayIcon />
                                            </button>
                                            <button className="btn btn-outline-primary ml-1" type="button" data-change="click" data-custom-target="#note-icon">
                                                <CameraIcon />
                                            </button>
                                            <button className="btn btn-outline-primary ml-1" type="button" data-change="click" data-custom-target="#note-icon">
                                                <CommentsIcon />
                                            </button>
                                            <button className="btn btn-outline-primary ml-1" type="button" data-change="click" data-custom-target="#note-icon">
                                                <SettingsIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="label-control">Priority</label>
                                        <div>
                                            <select name="priority" id="" className="form-control" data-change="select" data-custom-target="color">
                                                <option value="primary" >Default</option>
                                                <option value="success">Very Low</option>
                                                <option value="info" defaultValue>Low</option>
                                                <option value="warning">Medium</option>
                                                <option value="danger">High</option>
                                                <option value="purple">Very High</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                    <button type="reset" className="btn btn-outline-primary" data-reset="note-reset">
                                        <svg width="20" className="svg-icon" id="new-note-reset" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                                        </svg>
                                        Reset
                                    </button>
                                    <button type="submit" className="btn btn-primary ml-1">
                                        <svg width="20" className="svg-icon" id="new-note-save" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                                        </svg>
                                        Save
                                    </button>
                                    </div>
                                </form> 
                                </div>
                            
                            </div>
                            <div className='col-md-4'>
                                <NoteComponent compColor='white' compSize='kk'/>
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

export default NewReminder