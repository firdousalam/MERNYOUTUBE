import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link
  } from "react-router-dom";

const Exercise = props => (
    <tr>
        <td>
            {props.exercise.username}
        </td>
        <td>
            {props.exercise.description}
        </td>
        <td>
            {props.exercise.duration}
        </td>
        <td>
            {props.exercise.date.substring(0,10)}
        </td>
        <td>
            <button type="button" className="btn btn-warning">
            <Link to={"/edit/"+props.exercise._id}>Edit</Link>
            </button> &nbsp;
            <button type="button" className="btn btn-danger" onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</button>
        </td>
    </tr>
)

export default class ExerciseList extends Component {
    constructor(props) {
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this);


        this.state = {
            exercises: []
        }
    }

    componentDidMount() {
        (
            axios.get('http://localhost:5000/exercises')
                .then(Response => {
                    if (Response.data.length > 0) {
                        console.log(Response.data);
                        this.setState({
                            exercises: Response.data
                        })
                    } else {

                    }
                }).catch((error) => {
                    console.log(error);

                })
        )
    }

    deleteExercise(id) {
        // e.preventDefault();
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log(res.data));
        //  alert("data submitted")
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
        //  window.location = "/";
    }
    exerciseList() {
        return this.state.exercises.map(currentExercise => {
            return <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id}></Exercise>
        })
    }
    render() {
        return (
            <div>
                <h1>Exercise List</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>

            </div>
        )
    }
}
//export default Exercise;