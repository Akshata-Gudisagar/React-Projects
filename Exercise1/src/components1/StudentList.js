import React, { Component } from 'react';

import'bootstrap/dist/css/bootstrap.min.css'
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';
class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            students:[
                {"id":"35","first":"Smith", "last":"Vn","email":"smith@gmail.com","phone":"9876544","Location":"Dwd","hobby":"dancing"},
                {"id":"36","first":"Jhon", "last":"Jn","email":"jn@gmail.com","phone":"8766544","Location":"sws","hobby":"singing"},
                {"id":"37","first":"James", "last":"Bn","email":"james@gmail.com","phone":"099887","Location":"Chennai","hobby":"Chess"}],
                
            

            student:{},
            updateFlag:false
        };
         
    }

    handleRemove=(index)=>{
        let newstate = this.state.students.filter((student,ind) =>{
            return ind !== index;
        })

        this.setState({students:newstate})
    }

    handleEdit=(index)=>{
        let emp = this.state.students.slice(index,index+1) 
           console.log(emp[0]);

         let newstate = this.state.students.filter((student,ind) =>{
            return ind !== index;   
         });

           this.setState({student:emp[0],students:newstate,updateFlag:true})


    }

    addStudent=(student)=>{
        console.log("received object",student)
        let newState=[...this.state.students,student]
        this.setState({students:newState,updateFlag:false})
    }


    render() {
        console.log(this.state.student)
        return (
            <div>
                <h1>CRUD Database </h1>
                {/* <button>Add</button> */}

                <input type="search" placeholder='please search' className='search'></input>
                <table className='table table-dar'>
                    <thead>
                        <th>Id</th>
                        <th>FIRST </th>
                        <th>LAST </th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Locatin</th>
                        <th>Hobby</th>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map((student,ind)=>{

                                return <tr key={ind}>
                                    <td>{student.id}</td>
                                    <td>{student.first}</td>
                                    <td>{student.last}</td>
                                    <td>{student.email}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.Location}</td>
                                    <td>{student.hobby}</td>
                                    

                                   <td><button onClick={()=>{this.handleEdit(ind)}} className='btn btn-info'>Edit</button></td>
                                   <td><button onClick={()=>{this.handleRemove(ind)}} className='btn btn-danger'>Delete</button></td>
                                </tr>

                            })
                        }
                    </tbody>
                </table>
                {this.state.updateFlag?(<UpdateStudent student={this.state.student} addStudent={this.addStudent}/>):( <AddStudent addStudent={this.addStudent}/>)
    }
            </div>
        );
    }
}

export default StudentList;