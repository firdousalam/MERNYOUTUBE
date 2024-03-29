import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''

        }
    }
    onChangeUserName(e) {
        this.setState({
            username: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username
        }
        console.log(user);
        axios.post('http://localhost:5000/users/add',user)
        .then(res => console.log(res.data));
        alert("data submitted")
        this.setState({
            username: ''
        })
        //  window.location = "/";
    }
    render() {
        return (
            <div>
                <h3>Create User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>User Name : </label>
                        <input type="text" required
                            className='form-control'
                            value={this.state.username}
                            onChange={this.onChangeUserName} />
                    </div>
                    <br></br>

                    <div className='form-group'>

                        <input type="submit"
                            value="Create User" className='btn btn-primary' />

                    </div>

                </form>
            </div>
        )
    }
}