import React, { Component } from 'react';
import MemberDataFinderService from '../services/MemberDataFinderService';


class AddRelationsComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            familyMembers:[],
            familyCode:this.props.match.params.familyCode,
            gender:'gender'
        }

        this.handleGender=this.handleGender.bind(this);
    }

    componentDidMount(){
        MemberDataFinderService.getFamilyMembers(this.state.familyCode).then((res)=>{
            console.log(res.data)
            this.setState({familyMembers:res.data});
        })
        console.log(this.state.familyMembers)
    }

    handleGender=(event)=>{
        this.setState({gender:event.target.value})
    }

    saveRelations=(e)=>{
        e.preventDefault();
        console.log(this.state.gender)
    }

    cancelForm(){
        let familyCode=localStorage.getItem('code');
        this.props.history.push(`/familyMembers/${familyCode}`);
    }

    render() {
        return (
            
            <div style={{marginTop:"50px"}}>
                <h1>{JSON.stringify(this.props.familyMembers)}</h1>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Relations</h3>
                        <div className="card-body">
                            <form>
                            <div className="row">
                            <div style={{marginTop:"20px"}}>
                                </div>
                               { this.state.familyMembers.filter(member=>member.isHeadMember===false).map(
                                        member=>
                                        <div key={member.memberId} style={{marginTop:"10px"}} className="form-group">
                                                <label style={{float:"left"}}>{member.firstName+' '+member.lastName}</label>
                                                <select class="form-select" value={this.state.gender} name="relation" onChange={this.handleGender}>
                                                {/* <option >Gender</option> */}
                                                <option value='father' >Father</option>
                                                <option value='mother' >Mother</option>
                                                <option value='son'>Son</option> 
                                                <option value='daughter'>Daughter</option>

                                                </select>
                                        </div>
                                     )
                                  }
                                </div>
                                <button style={{marginTop:"10px"}} className="btn btn-success" onClick={this.saveRelations}>Save</button>
                                <button  className="btn btn-danger" onClick={()=>this.cancelForm()} style={{marginLeft: "10px",marginTop: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default AddRelationsComponent;





















// import { useEffect, useState } from "react";

// import MemberDataFinderService from "../services/MemberDataFinderService";

// const AddRelationsComponent=(props)=>{

//     var flag=false;

//      familyMembers;

//     // const [familyMembers,setMembers]=useState([])

//     // useEffect(()=>{
//     //     MemberDataFinderService.getFamilyMembers(props.match.params.familyCode).then((res)=>{
//     //         console.log(res.data)
//     //         setMembers(res.data)
//     //     })
       
//     // },[familyMembers])
//     // componentDidMount(){
//     //     MemberDataFinderService.getFamilyMembers(props.match.params.familyCode).then((res)=>{
//     //         console.log(res.data)
//     //         this.setState({members:res.data});
//     //     });
//     //     console.log(this.state.members)
//     // }

//     const members=()=>{
//     MemberDataFinderService.getFamilyMembers(props.match.params.familyCode).then((res)=>{
//                     console.log(res.data)
//                     familyMembers=res.data;
//         },
//         ()=>console.log(familyMembers)
//         )
//     }

//    if(flag==false) {members(); flag=true;}

//     return (
//         <div>
//             Add family Relations for family code {props.match.params.familyCode}
//             details are {familyMembers.map(
//                 member=>
//                     <h4>{member.firstName}</h4>
//             )}
//         </div>
//     );

// }

// export default AddRelationsComponent;