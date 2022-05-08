import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://the-notesapp-backend.herokuapp.com/api/v1'
  });

//   check if there is a valid token in the localstorage
const token = localStorage.getItem('user_token');
if(token){
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}else{
    delete instance.defaults.headers.common['Authorization'];
}
// that's all,so if there's no token we not adding any auth to the headers


  export default instance;