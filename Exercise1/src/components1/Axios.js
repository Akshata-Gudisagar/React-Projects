import React, { Component } from 'react'
import DataService from '../Services/DataService'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import DashBord from './Dashbord'
import AddData from './AddData'
 

class Axios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        DataService.getDataService().then((res) => {
            this.setState({
                users: res.data
            })
        })
    }

    RemoveHandle = (id) => {
        DataService.deleteDataService(id).then((res) => {
            this.setState({
                users: this.state.users.filter(user => user.id !== id)
            })
        })
    }
    render() {
    console.log(this.state.users)
        return (
            <div>
                <h1> Java Sample Approach </h1>
                <p>Crud Operations Using Axios</p>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/AddData"  component={() => {
                            return (
                                <AddData />
                            )
                        }} />
                        <Route path="/" exact component={() => {
                            return (
                                <DashBord users={this.state.users} remove={this.RemoveHandle} />
                            )
                        }} />

                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Axios
