import React, { Component } from 'react'
import DataService from '../Services/DataService'
import { Link } from 'react-router-dom'

class AddData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      Email: "",
      Username: "",
     
      newData : []
    }
   
  }
  
  HandleInput = (event) => {
    let name = event.target.name
    let value = event.target.value

    this.setState({
      [name]: value
    })
  }
  HandleSubmit = (event) => {
    event.preventDefault()
    let data = {id:this.state.id,Email:this.state.Email,Username:this.state.Username}
    // this.props.AddData(this.props)
    DataService.createDataService(data).then((res) => {
    // this.props.AddData(this.props)


    }).catch(err =>console.log(err))
  }
  render() {
    return (
      <div>
        <h3>
          Add the Details :
        </h3>
        <form onSubmit={this.HandleSubmit}>
          <div>
            <input type="number" placeholder='Enter the id' name='id' value={this.state.id} onChange={this.HandleInput} />
          </div>
          <div>
            <input type="text" placeholder='Enter Email' name='Email' value={this.state.Email} onChange={this.HandleInput} />
          </div>
        
          <div>
            <textarea name='Username' value={this.state.Username} onChange={this.HandleInput} />
          </div>
            {/* <Link to= '/' > */}
            <button  type="submit">ADD</button>
            {/* </Link> */}
        </form>
      </div>
    )
  }
}

export default AddData
