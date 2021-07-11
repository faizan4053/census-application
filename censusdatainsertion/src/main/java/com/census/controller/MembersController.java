package com.census.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.census.exceptions.CensusExceptions;
import com.census.model.Members;
import com.census.service.MembersService;

@CrossOrigin
@RestController
public class MembersController {
	
	@Autowired
	MembersService membersService;
	
	static Logger log=Logger.getLogger(MembersController.class.getName());
	
	@GetMapping("/hello1")
	public String greeetings() {
		return "Welcome greetings !";
	}
	
//	@GetMapping("/membersearch/{id}")
//	public Optional<Members> searchMember(@PathVariable("id") String memberId)  {
//		Optional<Members> member=null;
//		try {
//			member= membersService.searchMemberById(memberId);
//				
//		}catch(CensusExceptions ex) {
//			log.error(ex);
//		}
//		return member;
//	}
	
	@DeleteMapping("/memberdelete/{id}")
	public void deleteMember(@PathVariable("id") String memberId) {
		try {
			membersService.deleteMemberById(memberId);
				
		}catch(CensusExceptions ex) {
			log.error(ex);
		}
	}
	
	@PostMapping("/memberadd")
	public Members addMember(@RequestBody Members member) throws CensusExceptions {
		
		Members members=null;
		
		try {
			 members=membersService.addMember(member);
			
		}catch(CensusExceptions ex) {
			log.error(ex);
		}
//		return membersService.addMember(member);
		return members;
	}

	@PutMapping("/memberedit/{id}")
	public Boolean editMember(@PathVariable("id") String memberId,@RequestBody Members member) throws CensusExceptions {
		return membersService.editMemberById(memberId,member);
	}

//	@GetMapping("/membersearchbyfirstandlastname/{firstname}/{lastname}")
//	public List<Members> searchMembers(@PathVariable("firstname") String firstName,@PathVariable("lastname") String lastName) throws CensusExceptions {
//		return membersService.searchMember(firstName, lastName);
//	}
	
//	@GetMapping("/membersearchbyname/{name}")
//	public List<Members> searchMembersByName(@PathVariable("name") String memberName) throws CensusExceptions {
//		return membersService.searchMembers(memberName);
//	}
	
//	
//	@GetMapping("/membersbyfamilycode/{familycode}")
//	public List<Members> searchMembersByFamilyCode(@PathVariable("familycode") String familyCode) throws CensusExceptions {
//		return membersService.searchMembersByFamilyCode(familyCode);
//	}
	
//	@GetMapping("/membersbyheadid/{headid}")
//	public List<Members> searchMembersByHeadId(@PathVariable("headid") String headId) throws CensusExceptions {
//		return membersService.searchMembersByHeadId(headId);
//	}
	
	@GetMapping("/memberrelations/{id}/{relationship}")
	public Boolean addRelation(@PathVariable("id") String memberId,@PathVariable("relationship") String relationship) throws CensusExceptions {
		return membersService.addRelationship(relationship, memberId);
	}
	
}
