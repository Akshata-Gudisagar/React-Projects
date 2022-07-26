import React, { Component } from 'react'
import DataService from '../Services/DataService'
// import './Style.css'
class DashBord extends Component {
    constructor(){
        super()
        this.state = {
            users:[]
        }
    }



    componentDidMount(){
        DataService.getDataService().then((res) =>{
            this.setState({
                users:res.data
            })
        })
    }




    render() {
        return (
            <div className='Parent'>
                {
                    this.props.users.map((data, i) => {
                        return (
                            <div className='map-parent' key={i}>
                                <div>
                                    <b>ID: </b>
                                    {data.id}
                                </div>
                                <p>
                                    <b>Email:</b>
                                    {
                                        data.Email
                                    }
                                </p>
                                <p>
                                    Username:{
                                        data.Username
                                    }
                                </p>
                                <button onClick={() => this.props.remove(data.id)}> Remove  </button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default DashBord
