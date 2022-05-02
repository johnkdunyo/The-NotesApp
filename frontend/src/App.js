import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import all pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import Reminders from "./pages/Reminders";
import Trash from "./pages/Trash";
import NewNote from "./pages/NewNote";
import NewReminder from "./pages/NewReminder"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />

          <Route exact path="/home" element={<Home /> }/>
          <Route exact path="/reminder" element={<Reminders /> } />
          <Route exact path="/trash" element={<Trash /> } />

          <Route exact path="/newnote" element={<NewNote /> } />
          <Route exact path="/newreminder" element={<NewReminder /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
