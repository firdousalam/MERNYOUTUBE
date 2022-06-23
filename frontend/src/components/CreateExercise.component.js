import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

export default class CreateExercise extends Component {
    constructor(props) {
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
        this.setState({
            users: ['test user'],
            username: 'test user'
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
        alert("data submitted")
      //  window.location = "/";
    }
    render() {
        return (
            <div>
                <h3>Create Exercise</h3>
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
                            value="Create Exercise" className='btn btn-primary'/>

                    </div>

                </form>
            </div>
        )
    }
}