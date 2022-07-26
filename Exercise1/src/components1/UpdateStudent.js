import React, { Component } from 'react';

class UpdateStudent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:this.props.student.id,
            first:this.props.student.first,
            last:this.props.student.last,
            email:this.props.student.email,
            phone:this.props.student.phone,
            location:this.props.student.location,
            hobby:this.props.student.hobby,

         };
    }

    handleOnChange=(event)=>{
            this.setState({[event.target.name]:event.target.value})
     }
 
     handleOnSubmit=(event)=>{ 
 
         event.preventDefault();
         console.log(this.state);
         this.props.addStudent(this.state);
         
     }
 
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                   Id: <input type="number" value={this.state.id} name='id' onChange={this.handleOnChange}/>
                   First: <input type="text" value={this.state.first} name='first' onChange={this.handleOnChange}/>
                   Last: <input type="text" value={this.state.last} name='last'onChange={this.handleOnChange}/>
                   Email: <input type="text" value={this.state.email} name='Email'onChange={this.handleOnChange}/>
                   phone: <input type="number" value={this.state.phone} name='phone' onChange={this.handleOnChange}/>
                   Location: <input type="text" value={this.state.location} name='location'onChange={this.handleOnChange}/>
                   Hobby: <input type="text" value={this.state.hobby} name='hobby'onChange={this.handleOnChange}/>
                    <button>Update</button>
                </form>
            </div>
            
        );
    }
}

export default UpdateStudent;