import axios from 'axios';

const MEMBERS_API_DATA_FINDER_BASE_URL="http://localhost:8087/";

class MemberDataFinderService {

    getFamilyMembers(familyCode){
        // var familyCode='Fam8457';
        return axios.get(MEMBERS_API_DATA_FINDER_BASE_URL+'membersbyfamilycode/'+familyCode);
    }

    getMemberById(memberId){
        return axios.get(MEMBERS_API_DATA_FINDER_BASE_URL+'membersearch/'+memberId);
    }

    getMembers(criteria){
        return axios.get(MEMBERS_API_DATA_FINDER_BASE_URL+'members/'+criteria)
    }
}

export default new MemberDataFinderService();


