import React from 'react';
import { NavBar } from './index.js';
import { User} from '../modules'

export class AccountPage extends React.Component {

    state = {
        user: {},
        name: '',
        age: 0,
        address: '',
        insuranceinfo: '',
        username: '',
        password: ''
    }

    onSave(){
        let update = new User(this.state.name, this.state.age, this.state.address, this.state.username, this.state.password, this.state.insuranceinfo)
        this.setState(update);
    }

    render() {
        return <>
            <NavBar state={'account'}/>
            <form name="user-information" className="form-group tandard-margin">
                <div className="row">
                    <div className="col">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" value={this.state.user.name} onChange={e => this.setState({ name: e.target.value })}/>
                    </div>
                    <div className="col">
                        <label htmlFor="age">Age:</label>
                        <input type="number" className="form-control" id="age" name="age" value={this.state.user.age} onChange={e => this.setState({ age: e.target.value })}/>
                    </div>
                </div>
                <div className="mt-2">
                    <label htmlFor="address">Address:</label>
                    <textarea name="address" id="address" rows="5" className="form-control" value={this.state.user.address} onChange={e => this.setState({ address: e.target.value })}></textarea>
                </div>
                <div className="mt-2">
                    <label htmlFor="insuranceinfo">Insurance Information:</label>
                    <textarea name="insuranceinfo" id="insuranceinfo" rows="5" className="form-control" value={this.state.user.insuranceinfo} onChange={e => this.setState({ insuranceinfo: e.target.value })}></textarea>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <label htmlFor="username">UserName:</label>
                        <input type="text" className="form-control" id="username" name="username" value={this.state.user.username} onChange={e => this.setState({ username: e.target.value })}/>
                    </div>
                    <div className="col">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" name="password" value={this.state.user.password} onChange={e => this.setState({ password: e.target.value })}/>
                    </div>
                </div>
            </form>
        </>
    }
}