import axios from 'axios';

const MEMBERS_API_DATA_MANIPULATION_BASE_URL="http://localhost:8086/";

class MemberDataManipulationService {
    addMember(employee){
        return axios.post(MEMBERS_API_DATA_MANIPULATION_BASE_URL+'memberadd',employee);
    }

    deleteMember(memberId){
        return axios.delete(MEMBERS_API_DATA_MANIPULATION_BASE_URL+'memberdelete/'+memberId)
    }

    editMember(memberId,member){
        return axios.put(MEMBERS_API_DATA_MANIPULATION_BASE_URL+'memberedit/'+memberId,member)
    }

}

export default new  MemberDataManipulationService();