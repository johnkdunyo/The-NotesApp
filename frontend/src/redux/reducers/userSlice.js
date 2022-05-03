import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";


const initialState = {
    isLoggedIn: Boolean(localStorage.getItem('user_token')),
    status: 'Pending', // Rejected, Login failled, Login successful
    user: {},  //token data
    error: null,
}

const baseURL = 'https://the-notesapp-backend.herokuapp.com/api/v1';

// const config = {
//     headers: { Authorization: `Bearer ${token}` }
// };

export const signInUser = createAsyncThunk('user/signIn', async(userData)=> {
    try {
        const response  = await axios.post(`${baseURL}/signin`, userData)
        // console.log(response)
        const data = {status:response.status, token:response.data.data.token}
        return data;    
    } catch (error) {
        // console.log(error.response)
        const data = {status:error.response.status, message:error.response.data.message}
        return data; 
    }
});

export const signUpUSer = createAsyncThunk('user/signup', async(userData)=>{
    try {
        const response = await axios.post(`${baseURL}/register`, userData);
        // console.log(response)
        const data = {status:response.status, token:response.data.data.token}
        return data  
    } catch (error){
        console.log(error.response)
        const data= {message:error.response.data.message, status:error.response.status};
        return data;
    }
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action)=>{
            // console.log(action)
            state.isLoggedIn = true;
            state.user = jwtDecode(action.payload)
            state.status = 'Login successful'
            // window.location.href='/home'
        },
        logOutCurrentUser: (state) => {
            console.log('logout user')
            localStorage.clear();
            state.isLoggedIn = false;
            state.user ={};
            state.error=null;
            state.status = 'User logged out'
            window.location.reload();
        }
    },

    extraReducers:(builder)=>{
        builder.addCase(signInUser.pending, (state, action)=>{
            state.status = 'Pending'
        })

        builder.addCase(signInUser.rejected, (state, action)=>{
            console.log(action)
            state.status = 'Rejected';
            state.error = action.payload.message
        })

        builder.addCase(signInUser.fulfilled, (state, action)=>{
            // console.log(action)
            // fulfiled is true even if user's credentials not true
            if(action.payload.status === 200){
                state.status = 'Login successful';
                state.user = jwtDecode(action.payload.token)
                state.error = null;
                state.isLoggedIn = true;
                // then save user  token to localstorage
                localStorage.setItem('user_token', action.payload.token)
            

                
            } else if (action.payload.status === 401){
                // console.log(action)
                state.status = 'Login failled'
                state.error = action.payload.message
            }
        })

        builder.addCase(signUpUSer.rejected, (state, action)=> {
            state.error = action.payload.message
            state.status = 'Rejected'
        })

        builder.addCase(signUpUSer.fulfilled, (state, action)=>{
            if(action.payload.status === 401){
                console.log(action)
                state.status = 'Login failled'
                state.error = action.payload.message
            }
            else if (action.payload.status === 200){
                console.log(action)
                state.status = "Account created successfully"
                state.user =  jwtDecode(action.payload.token);
                // store user to localstorage
                localStorage.setItem('user_token', action.payload.token)
                state.isLoggedIn = true;
                state.error = null
            }
        })
    }

});

export const {setCurrentUser, logOutCurrentUser } = userSlice.actions;

export default userSlice.reducer;