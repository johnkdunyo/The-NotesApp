import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState= {
    allNotes: [],
    status: '',
    error: null
};

const baseURL = 'https://the-notesapp-backend.herokuapp.com/api/v1';

const token = localStorage.getItem('user_token');
const config = {
    headers: { Authorization: `Bearer ${token}` }
};


export const restoreDeletedNote = createAsyncThunk('note/restoreDeletedNote', async(noteID)=>{
    console.log(config)
    try {
        const response = await axios.put(`${baseURL}/note/restore/${noteID}`, config);
        console.log(response)
        const data = {status:response.status, message:response.data.message, data:response.config.data}
        return data
    } catch (error) {
        console.log(error.response)
        const data = {status:error.response.status, errorMessage:error.response.data || error.response.data.message}
        return data;
    }
});

export const fetchAllNotes = createAsyncThunk('note/fetchAll', async() => {
    try {
        const response = await axios.get(`${baseURL}/note`, config);
        // create a data object with query data and status
        const data = {status:response.status, data:response.data.data}
        return data;
    } catch (error) {
        const data = {status:error.response.status, errorMessage:error.response.data.message}
        return data;
    }
});


export const addNewNote = createAsyncThunk('note/addNote', async(noteData) => {
    try {
        const response = await axios.post(`${baseURL}/note`, noteData, config);
        // console.log(response)
        const data = {status:response.status, message:response.data.message, data:response.config.data}
        return data
    } catch (error) {
        console.log(error.response)
        const data = {status:error.response.status, errorMessage:error.response.data || error.response.data.message}
        return data;
    }
});

export const updateNote = createAsyncThunk('note/updateNote', async(updatedNoteData, noteID)=>{
    try {
        const response = await axios.put(`${baseURL}/note/${noteID}`, updatedNoteData, config);
        console.log(response);
        const data = {status:response.status, message:response.data.message, data:response.config.data}
        return data
    } catch (error) {
        console.log(error.response)
        const data = {status:error.response.status, errorMessage:error.response.data || error.response.data.message}
        return data;
    }
});

export const deleteNote = createAsyncThunk('note/deleteNote', async(noteID) => {
    try {
        const response = await axios.delete(`${baseURL}/note/${noteID}`, config);
        console.log(response);
        const data = {status:response.status, message:response.data.message, data:response.config.data}
        return data
    } catch (error) {
        console.log(error.response)
        const data = {status:error.response.status, errorMessage:error.response.data || error.response.data.message}
        return data;
    }
});





const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        clearAllErrors: (state) =>{
            state.error = null;
            console.log('clear all errors clicked: ', state )
            
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllNotes.pending, (state, action)=>{
            // console.log(action)
            state.status = 'Query pending' 
            state.error = null
        })
        builder.addCase(fetchAllNotes.rejected, (state, action)=>{
            console.log(action)
            state.status = action.payload
        })
        builder.addCase(fetchAllNotes.fulfilled, (state, action)=>{
            // console.log(action)
            // hendle various status codes here, either  200 or the rest
            if(action.payload.status===200){
                state.allNotes = action.payload.data
                state.status = 'Querry successful'
            } else{
                state.status = 'Querry failed'
                state.error = action.payload.errorMessage
            }
            
        })

        // cases for addnewNote
        builder.addCase(addNewNote.pending, (state, action)=>{
            console.log(action);
            state.status = 'Query pending'
            state.error = null
        })
        builder.addCase(addNewNote.rejected, (state, action)=> {
            console.log(action)
            state.status = 'Query failed';
        })
        builder.addCase(addNewNote.fulfilled, (state, action)=>{
            console.log(action);
            // TODO , handler all status codes here
            if(action.payload.status===201){
                state.error=null;
                state.status='Querry succesful'
            }else{
                state.error= action.payload.errorMessage;
                state.status = 'Querry failed'
            }
            
        })

        // cases for delele note
        builder.addCase(deleteNote.rejected, (state, action)=>{
            state.status = 'Query failed';
        })
        builder.addCase(deleteNote.pending, (state, action) => {
            state.status = 'Query pending';
            state.error = null
        })
        builder.addCase(deleteNote.fulfilled, (state, action)=>{
            console.log(action.payload)
            if(action.payload.status === 401){
                state.error = action.payload.errorMessage
                state.status = 'Query failed'
            }else if( action.payload.status === 201){
                state.error = null
                state.status = 'Query successful'
            }
            
        })


        // cases for restore note
        builder.addCase(restoreDeletedNote.rejected, (state, action)=>{
            state.status = 'Query failed';
        })
        builder.addCase(restoreDeletedNote.pending, (state, action) => {
            state.status = 'Query pending';
            state.error = null
        })
        builder.addCase(restoreDeletedNote.fulfilled, (state, action)=>{
            console.log(action.payload)
            if(action.payload.status === 401){
                state.error = action.payload.errorMessage
                state.status = 'Query failed'
            }else if( action.payload.status === 201){
                state.error = null
                state.status = 'Query successful'
            }
            
        })



    }

})

export const { clearAllErrors } = noteSlice.actions;

export default noteSlice.reducer;