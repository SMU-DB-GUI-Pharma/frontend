import React from 'react';
import { NavBar } from './index.js';

export class LandingPage extends React.Component {

    state = {
        credentials: {}
    }

    render() {
        return <>
            <NavBar state={'landing'} />
            <div className ="standard-margin">
                <form name="credentials">
                    <div className="form-group">
                        <label htmlFor="username">User Name:</label>
                        <input type="text" className="form-control" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" name="password" />
                    </div>
                    <button type="button" className="btn btn-primary">Log In</button>
                </form>
            </div>
        </>
    }
}

