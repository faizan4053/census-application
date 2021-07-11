import React, { Component } from 'react';

class CensusIndexComponent extends Component {

    constructor(props){
        super(props)

        this.addMember=this.addMember.bind(this);
        this.searchMembers=this.searchMembers.bind(this)
    }

    addMember(){
        
        console.log('add member')
        this.props.history.push('/addMember');
    }

    searchMembers(){
        console.log("Search members")
        this.props.history.push('/searchMembers')
    }
    
    render() {
        return (
            <div>
                <button style={{marginTop: "150px"}}className="btn btn-primary" onClick={this.addMember} >Census Insert Application</button>
                <br></br>
                <button style={{marginTop: "25px"}} className="btn btn-primary" onClick={this.searchMembers} >Census Search Application</button>
            </div>
        );
    }
}

export default CensusIndexComponent;