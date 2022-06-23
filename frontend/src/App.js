import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/ExerciseList.component";
import EditExercise from "./components/EditExercise.component";
import CreateExercise from "./components/CreateExercise.component";
import CreateUser from "./components/CreateUser.component";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
          <Route path="/" element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          

        </Switch>
      </Router>
    </div>
  );
}

export default App;