import React, { Component } from 'react';
import MemberDataManipulationService from '../services/MemberDataManipulationService';
import MemberDataFinderService from '../services/MemberDataFinderService';

class EditMemberComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            memberId:this.props.match.params.memberId,
            firstName: '',
            lastName: '',
            // emailId: '',
            gender: '',
            suffix: '',
            memberDateOfBirth:'',
            familyCode:'',
    }

    // this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
    this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
    this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
    this.changeGenderHandler=this.changeGenderHandler.bind(this);
    this.changeDOBHandler=this.changeDOBHandler.bind(this)
    // this.saveMember=this.saveMember.bind(this);
    this.editMember=this.editMember.bind(this)
    this.cancelForm=this.cancelForm.bind(this);

    }


    componentDidMount(){
        MemberDataFinderService.getMemberById(this.state.memberId).then((res)=>{
            console.log(res.data)
            // this.setState({familyMembers:res.data});
            console.log(res.data.firstName)
            this.setState({firstName:res.data.firstName})
            this.setState({lastName:res.data.lastName})
            this.setState({gender:res.data.gender})
            this.setState({suffix:res.data.suffix})
            this.setState({familyCode:res.data.familyCode})
            this.setState({memberDateOfBirth:res.data.memberDateOfBirth})

            // console.log(this.state.gender)


        })
        // console.log(this.state.familyMembers)
    }

    cancelForm=()=>{
        let direction=localStorage.getItem('edit')
        console.log(direction);
        if(direction==='insert')
            this.props.history.push(`/familyMembers/${this.state.familyCode}`);
        else if(direction==='search')
            this.props.history.push(`/searchMembers`);
    }

    editMember = (e) =>{
        e.preventDefault();
        let member={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            // emailId: this.state.emailId,
            gender: this.state.gender,
            suffix:this.state.suffix,
            memberDateOfBirth:this.state.memberDateOfBirth
        }
        console.log(JSON.stringify(member));


        MemberDataManipulationService.editMember(this.state.memberId,member).then(res=>{
            if(res){
                alert("Member details editted successfully");
                this.props.history.push(`/familyMembers/${this.state.familyCode}`);
    
            }
        })

        // EmployeeService.createEmployee(employee)
        // .then(res => {
        //     this.props.history.push('/employees');
        // });
        // MemberDataManipulationService.addMember(member).then(res =>{
        //     console.log(res.data.familyCode);
        //     this.setState({familyCode:res.data.familyCode})
        //     this.props.history.push(`/familyMembers/${this.state.familyCode}`)
        
        // })
    }

    changeFirstNameHandler=(event)=>{
        this.setState({firstName:event.target.value});
    }

    changeLastNameHandler=(event)=>{
        this.setState({lastName:event.target.value});
    }

    // changeEmailIdHandler=(event)=>{
    //     this.setState({emailId:event.target.value});
    // }

    changeGenderHandler=(event)=>{
        this.setState({gender:event.target.value});
    }
    changeSuffixHandler=(event)=>{
        this.setState({suffix:event.target.value});
    }
    changeDOBHandler=(event)=>{
        this.setState({memberDateOfBirth:event.target.value});
    }


    render() {
        return (
            <div style={{marginTop:"50px"}}>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Edit Member</h3>
                        <div className="card-body">
                            <form>
                            <div style={{marginTop:"20px"}} className="form-group">
                                    {/* <label> First Name: </label> */}
                                    <input placeholder={this.state.suffix} name="suffix" className="form-control"
                                        value={this.state.suffix} onChange={this.changeSuffixHandler}/>
                                </div>
                                <div style={{marginTop:"30px"}} className="form-group">
                                    {/* <label> First Name: </label> */}
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <div  style={{marginTop:"30px"}} className="form-group">
                                    {/* <label> Last Name: </label> */}
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>
                                
                                <div style={{marginTop:"30px"}} className="form-group">
                                    {/* <label> First Name: </label> */}
                                    <input placeholder="DOB: dd/mm/yyyy" name="dob" className="form-control"
                                        value={this.state.memberDateOfBirth} onChange={this.changeDOBHandler}/>
                                </div>
                                <div style={{marginTop:"30px"}} className="form-group">
                                    {/* <label> Email Id: </label> */}
                                    <input placeholder="Gender" name="gender" className="form-control"
                                        value={this.state.gender} onChange={this.changeGenderHandler}/>
                                </div>
                                {/* <div style={{marginTop:"30px"}} className="form-group">
                                    <input placeholder="Email Id" name="emailId" className="form-control"
                                        value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                </div> */}
                                {/* <div style={{marginTop:"10px"}} className="form-group">
                                        <select class="form-select" >
                                        <option selected onChange={this.changeGenderHandler}>Gender</option>
                                        <option value={this.state.gender} onChange={this.changeGenderHandler}>Male</option>
                                        <option value={this.state.gender} onChange={this.changeGenderHandler}>Female</option>
                                        <option value={this.state.gender} onChange={this.changeGenderHandler}>Others</option>
                                        </select>
                                </div> */}
                                <button style={{marginTop:"10px"}} className="btn btn-success" onClick={this.editMember}>Edit</button>
                                <button  className="btn btn-danger" onClick={this.cancelForm} style={{marginLeft: "10px",marginTop: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default EditMemberComponent;