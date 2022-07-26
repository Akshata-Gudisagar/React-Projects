import React, { Component } from 'react';


class Addstudent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:null,
            first:null,
            last:null,
            Email:null,
            Phone:0,
            Location:null,
            Hobby:null,

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
                <form autoComplete='off' onSubmit={this.handleOnSubmit}>
                Id: <input type="number" name='id' autoComplete="off " onChange={this.handleOnChange}/>
                   First: <input type="text" name='first' autoComplete="off " onChange={this.handleOnChange}/>
                   Last: <input type="text" name='last' autoComplete="off" onChange={this.handleOnChange}/>
                   Email: <input type="text" name='email' autoComplete="off" onChange={this.handleOnChange}/>
                   Phone: <input type="number" name='phone' autoComplete="off" onChange={this.handleOnChange}/>
                   Location: <input type="text" name='Location' autoComplete="off" onChange={this.handleOnChange}/>
                   Hobby: <input type="text" name='hobby' autoComplete="off" onChange={this.handleOnChange}/>
                   
                    <button>Save</button>
                </form>
            </div>
        );
    }
}
export default Addstudent;