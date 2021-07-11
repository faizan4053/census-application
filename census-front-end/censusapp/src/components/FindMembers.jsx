import React, { Component } from 'react';
import MemberDataFinderService from '../services/MemberDataFinderService';
import ShowMemberListComponent from './ShowMemberListComponent';

class FindMembers extends Component {

    constructor(props){
        super(props)

        this.state={
            members:[],
            criteria:''
        }

        this.changeCriteriaHandler=this.changeCriteriaHandler.bind(this)
        this.findMembers=this.findMembers.bind(this)
    }

    componentDidMount(){
        let search=localStorage.getItem('search')
        if(search!==null){
            console.log(search)
            MemberDataFinderService.getMembers(search).then(res=>{
                if(res.data)
                    console.log(res.data)
                else{
                    console.log('nothing is present')
                }
             this.setState({members:res.data})
            })
        }

    }

    changeCriteriaHandler=(event)=>{
        this.setState({criteria:event.target.value});
    }

    findMembers=(e)=>{
        e.preventDefault();
        console.log('hello')
        console.log(this.state.criteria)
        localStorage.setItem('search',this.state.criteria);
        MemberDataFinderService.getMembers(this.state.criteria).then(res=>{
            if(res.data)
                console.log(res.data)
            else{
                console.log('nothing is present')
            }
             this.setState({members:res.data})
            //  console.log(this.state.members)
        },
        ()=>console.log(this.state.members)
        )
        // console.log(this.state.members)
    }

    backToHome(){
        localStorage.removeItem('search')
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                 <div className="container">
                <form>
                    <div style={{marginTop:"20px"}} className="row form-group">
                                        {/* <label> First Name: </label> */}
                                        <input placeholder="Search member details ..." name="search" className="form-control"
                                            value={this.state.criteria} onChange={this.changeCriteriaHandler}/>
                    </div>
                    <div className="row">
                        <button style={{marginTop:"10px"}} className="btn btn-primary" onClick={this.findMembers}>Search</button>
                    </div>
                    <div className="row">
                        <button style={{marginTop:"10px"}} className="btn btn-danger" onClick={()=>this.backToHome()}>Back To Home</button>
                    </div>
                 </form>
                 </div>

                 {}

                 {this.state.members.length!=0 && <ShowMemberListComponent data={this.state.members}/>}


            </div>
        );
    }
}

export default FindMembers;