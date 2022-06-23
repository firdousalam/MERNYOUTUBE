import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";
import queryString from 'query-string';


export default class EditExercise extends Component {
  
    constructor(props) {
        console.log(props.location);
        super(props);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
       
        
    }
   
    componentDidMount() {
        
        const params  = window.location.pathname.substring(6);
        
            axios.get('http://localhost:5000/exercises/'+params)
                .then(Response => {
                   this.setState({
                    username: Response.data.username,
                    description: Response.data.description,
                    duration: Response.data.duration,
                    date: new Date(Response.data.date)
                    })
                }).catch(function(err){
                    console.log(err);
                })
        

            axios.get('http://localhost:5000/users')
                .then(Response => {
                    if (Response.data.length > 0) {
                        console.log(Response.data);
                        this.setState({
                            users: Response.data.map(user => user.username),
                        })
                    } else {
                        this.setState({
                            users: ['test user'],
                            username: 'test user'
                        })
                    }
                })
        
    }
    onChangedescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    onChangeUserName(e) {
        this.setState({
            username: e.target.value
        })
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }
    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise);
        const params  = window.location.pathname.substring(6);
        axios.post('http://localhost:5000/exercises/update/'+params, exercise)
            .then(res => console.log(res.data));
        alert("data submitted")
        //  window.location = "/";
    }
    render() {
        return (
            <div>
                <h3>Update Exercise</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>User Name : </label>
                        <select required
                            className='form-control'
                            value={this.state.username}
                            onChange={this.onChangeUserName}>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className='form-group'>
                        <label>Description : </label>
                        <input type="text" required
                            className='form-control'
                            value={this.state.description}
                            onChange={this.onChangedescription} />

                    </div>

                    <div className='form-group'>
                        <label>Duration : </label>
                        <input type="number" required
                            className='form-control'
                            value={this.state.duration}
                            onChange={this.onChangeDuration} />

                    </div>

                    <div className='form-group'>
                        <label>Date : </label>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate} />

                    </div>

                    <div className='form-group'>

                        <input type="submit"
                            value="Edit Exercise" className='btn btn-primary' />

                    </div>

                </form>
            </div>
        )
    }
}