import React, { Component, useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';
import MemberDataManipulationService from '../services/MemberDataManipulationService';


const ShowMemberListComponent=(props)=>{
    const[members,setMembers]=useState(props.data)

   

    const [id,setId]=useState('')
    const [redirect,setRedirect]=useState(false)


    const editMember=(id)=>{
        localStorage.setItem('edit','search');
        setId(id);
        setRedirect(true);
    }


    const deleteMember=(memberId)=>{

        console.log("hello i am working")
        MemberDataManipulationService.deleteMember(memberId)
        .then(res => {
            setMembers(members => members.filter(member=>member.memberId!==memberId));
            // this.setState({
            //     members: members.filter(member => member.memberId!==memberId)
            // });
        });
    }

    useEffect(()=>{
        setMembers(props.data)
    },[props.data]);

    if(redirect)
        return  <Redirect to={`/editMember/${id}`}/>

    return (
            <div className="container">

                

                {/* <h4>{JSON.stringify(this.props.data)}</h4> */}
                <hr></hr>
                <h2 className="text-center">Members List</h2>
                <div style={{marginTop:"30px",marginBottom:"30px"}} className="row">
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
                                members.map(
                                    member => 
                                    <tr key = {member.memberId}>
                                        <td>{member.memberId}</td>
                                        <td>{member.firstName}</td>
                                        <td>{member.lastName}</td>
                                        <td>{member.memberDateOfBirth}</td>
                                        <td>{member.gender}</td>
                                        <td>{member.familyCode}</td>
                                        <td>
                                            <button onClick={ ()=>editMember(member.memberId)} className="btn btn-info">Update</button>
                                            <button style = { {marginLeft:"10px"} } onClick={ () => deleteMember(member.memberId)} className="btn btn-danger">Delete</button>
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

export default ShowMemberListComponent;

// class ShowMemberListComponent extends Component {
//     constructor(props){
//         super(props)

//         this.state={
//             members:this.props.data
//         }
//     }

//     componentDidMount(){
//         this.setState({members:this.props.data})
//     }

//     render() {
//         return (
//             <div className="container">

                

//                 {/* <h4>{JSON.stringify(this.props.data)}</h4> */}
//                 <hr></hr>
//                 <h2 className="text-center">Members List</h2>
//                 <div style={{marginTop:"30px",marginBottom:"30px"}} className="row">
//                     <table className="table table-striped table-bordered">
//                         <thead>
//                             <tr>
//                                 <th>Member Id</th>
//                                 <th>First Name</th>
//                                 <th>Last Name</th>
//                                 <th>Date Of Birth</th>
//                                 <th>Gender</th>
//                                 <th>Family Code</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 this.state.members.map(
//                                     member => 
//                                     <tr key = {member.memberId}>
//                                         <td>{member.memberId}</td>
//                                         <td>{member.firstName}</td>
//                                         <td>{member.lastName}</td>
//                                         <td>{member.memberDateOfBirth}</td>
//                                         <td>{member.gender}</td>
//                                         <td>{member.familyCode}</td>
//                                         <td>
//                                             <button onClick={ ()=>this.editMember(member.memberId)} className="btn btn-info">Update</button>
//                                             <button style = { {marginLeft:"10px"} } onClick={ () => this.deleteMember(member.memberId)} className="btn btn-danger">Delete</button>
//                                         </td>
//                                     </tr>
//                                 )
//                             }
//                         </tbody>
//                     </table>
//                 </div>
                
//             </div>
//         );
//     }
// }
// 
// export default ShowMemberListComponent;