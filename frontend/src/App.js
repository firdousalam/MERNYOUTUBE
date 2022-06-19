import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/ExerciseList.component";
import EditExercise from "./components/EditExercise.component";
import CreateExercise from "./components/CreateExercise.component";
import CreateUser from "./components/CreateUser.component";
function App() {
  return (
    
      <Router>
        <div className="container">
        <Navbar />
        <Switch>
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
          <Route path="/" element={<ExercisesList />} />
        </Switch>
        </div>
      </Router>
   
  );
}

export default App;