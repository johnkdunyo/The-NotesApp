import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import MobileNavbar from '../components/MobileNavbar'
import NoteComponent from '../components/NoteComponent'
import PageHeader from '../components/PageHeader'
import QuillTextBox from '../components/QuillTextBox'
import SideBar from '../components/SideBar'

// import { SettingsIcon, CommentsIcon, CameraIcon, BirthdayIcon ,FileIcon, CalendarIcon, NoteIcon, TimelineIcon, PaintIcon } from '../Icons'
import { PaintIcon } from '../Icons'
import { updateNote } from '../redux/reducers/noteSlice'
 


const EditNote = () => {
    // get noteID from use params
    const { noteID } = useParams();
    // console.log(noteID)

    // get note doc by noteID from redux
   const note = useSelector(state=>state.note.allNotes.find((note)=>note._id===noteID));
//    console.log(note._id)
 
//    console.log(note.title)

    
    

    const dispatch =useDispatch();
    const navigate = useNavigate();

    const initialFormData = {
        description: note.description,
        date: note.date,
        color: note.color,
        priority: note.priority,
        id:note._id
    }
    const [noteForm, setNoteForm ] = useState(initialFormData);
    const [isCreatingNote, setIsCreatingNote ] = useState(false);

    const [description, setDescription] = useState(note.description);


const itemColors = [
    {id: 1, value: 'white'},
    {id: 2, value: 'warning'},
    {id: 3, value: 'success'},
    {id: 4, value: 'dark'},
    {id: 5, value: 'purple'},
    {id: 6, value: 'danger'},
    {id: 7, value: "info"},
    {id: 8, value: 'primary'}
]

    
    // const formHandler =(e) => {
    //     setNoteForm( {...noteForm, [e.target.name]: e.target.value})
    // }

    const onChangeHandler = (value) => {
        setDescription(value)
    }


    const onSubmitFormHandler= async(e)=>{
        e.preventDefault();
        setIsCreatingNote(true)
        // console.log(noteForm)
        noteForm.description = description
        // TODO; handle note creationg
        const response = await dispatch(updateNote(noteForm)).unwrap();
        if(response.status===201){
            // note created successfully
            setIsCreatingNote(false)
            navigate('/home')
            window.location.reload();
        }
    }
    // console.log(noteForm)

  return (
    <React.Fragment>
        <div className='wrapper sidebar-main'>
            <MobileNavbar />
            <SideBar />
            <div className='content-page'>
                <PageHeader pageTitle='Edit Note' />

                <div className='col-lg-12'>
                    <div className=''>
                        <div className=''>
                        <div className='row'>
                            <div className="col-md-8">
                                <div className='card card-block card-stretch card-height p-3'>
                                <form onSubmit={onSubmitFormHandler}>
                                    {/* <div className="form-group">
                                        <label className="label-control">Title</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="title" 
                                            placeholder="Note Title"  
                                            value={noteForm.title}
                                            onChange={formHandler}
                                            data-change="input" 
                                            data-custom-target="#note-title"
                                            required
                                        />
                                    </div> */}
                                    <div className="form-group">
                                        <label className="label-control">Description</label>
                                        <QuillTextBox  onChangeHandler={onChangeHandler} value={description} />
                                        {/* <textarea 
                                            type="text" 
                                            className="form-control" 
                                            name="description" 
                                            rows="3" 
                                            data-change="input" 
                                            data-custom-target="#note-description" 
                                            placeholder="Note Description"
                                            value={noteForm.description}
                                            onChange={formHandler}
                                            required>
                                        </textarea> */}
                                    </div>
                                    {/* <div className="form-group">
                                        <label className="label-control">Icon</label>
                                        <div id="icon-button" className='d-flex align-items-center justify-content-between'>
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
                                    </div> */}
                                    
                                    <div className='form-group'>
                                        <label className='label-control'>Note Color</label>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            {itemColors.map(color=>(
                                                <button type='button' className={`btn btn-${color.value}`} key={color.id} onClick={()=>setNoteForm({...noteForm, color:color.value})}><PaintIcon /> </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="label-control">Priority</label>
                                        <div>
                                            <select name="priority" id="" className="form-control" data-change="select" data-custom-target="color" onClick={(e) => setNoteForm({...noteForm, priority:e.target.value})}>
                                                <option defaultValue value="low" >Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <button type="reset" className="btn btn-danger">
                                            Cancel
                                        </button>
                                        <button type="submit" className="btn btn-success">
                                            {isCreatingNote ? 'Saving your note ✨' :  'Save Note'}
                                        </button>
                                    </div>
    
                                </form> 
                                </div>
                            
                            </div>
                            <div className='col-md-4'>
                                <NoteComponent 
                                    noteColor={noteForm.color} 
                                    noteSize='kk'
                                    noteTitle={noteForm.title}
                                    noteDescription={noteForm.description}
                                    noteDate={noteForm.date}
                                    notePriority={noteForm.priority}
                                />
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

export default EditNote