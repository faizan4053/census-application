import React, { Component } from 'react';
import MemberDataFinderService from '../services/MemberDataFinderService';
import MemberDataManipulationService from '../services/MemberDataManipulationService';

class ListFamilyComponent extends Component {

    constructor(props){
        super(props)

        this.state= {
            members: [],
            familyCode:this.props.match.params.familyCode,
        }

        // this.addEmployee = this.addEmployee.bind(this);
    }


    deleteEmployee(id){
        // EmployeeService.deleteEmployee(id)
        // .then(res => {
        //     this.setState({
        //         employees: this.state.employees.filter(employee => employee.id!==id)
        //     });
        // });
    }

    editMember(id){
       
        localStorage.setItem('edit','insert');
        this.props.history.push(`/editMember/${id}`)
    }

    componentDidMount(){
      
        MemberDataFinderService.getFamilyMembers(this.state.familyCode).then((res)=>{
            console.log(res.data)
            this.setState({members:res.data});
        })
        console.log(this.state.members)
    }

    addMember(){
        this.props.history.push('/addMember')
    }

    deleteMember(memberId){

        MemberDataManipulationService.deleteMember(memberId)
        .then(res => {
            this.setState({
                members: this.state.members.filter(member => member.memberId!==memberId)
            });
        });

    }

    saveAndExit(familyCode){
        console.log('family code is '+familyCode)
        this.props.history.push(`/addRelations/${familyCode}`)
    }



    render() {
        return (
            <div>
                <h2 className="text-center">Members List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={()=>this.addMember()}>Add Employee</button>
                </div>
                <div className="row">
                    <button style={{marginTop:"10px"}} className="btn btn-success" onClick={()=>this.saveAndExit(this.state.familyCode)}>Save And Exit</button>
                </div>
                <div style={{marginTop:"10px"}} className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Member Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Date Of Birth</th>
                                <th>Gender</th>
                                <th>Family Code</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.members.map(
                                    member => 
                                    <tr key = {member.memberId}>
                                        <td>{member.memberId}</td>
                                        <td>{member.firstName}</td>
                                        <td>{member.lastName}</td>
                                        <td>{member.memberDateOfBirth}</td>
                                        <td>{member.gender}</td>
                                        <td>{member.familyCode}</td>
                                        <td>
                                            <button onClick={ ()=>this.editMember(member.memberId)} className="btn btn-info">Update</button>
                                            <button style = { {marginLeft:"10px"} } onClick={ () => this.deleteMember(member.memberId)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListFamilyComponent;