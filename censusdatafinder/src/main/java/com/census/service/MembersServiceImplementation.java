package com.census.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.census.exceptions.CensusExceptions;
import com.census.model.Members;
import com.census.repository.MembersRepository;


@Service
public class MembersServiceImplementation implements MembersService{
	
	@Autowired
	private MembersRepository membersRepository;
	
//	public MembersServiceImplementation() {
//		this.membersRepository=new membersRepository();
//	}
//	
	
	static Logger log=Logger.getLogger(MembersServiceImplementation.class.getName());
	
	public Members addMember(Members member) throws CensusExceptions {
		Members member1=membersRepository.save(member);
		if(member1==null)
			log.info("Member is not retrieved");
		else
			log.info("Member is retrieved successfully");
			return member1;
	}
	
//	public Boolean deleteMember(String firstName,String lastName) throws CensusExceptions {
//		return membersRepository.deleteMember(firstName, lastName);
//	}
	
//	public  Boolean editMember(String firstName,String lastName,Members newMember) throws CensusExceptions {
//		return membersRepository.editMember(firstName, lastName,newMember);
//	}
	
	public List<Members> searchMember(String firstName,String lastName) throws CensusExceptions {

		List<Members> list=membersRepository.findByLastnameOrFirstname(lastName,firstName);
		if(list.isEmpty())
			log.info("Not recieved all members by first and last name");
		else
			log.info("Recieved all members by first and last name");
		return list;
	}

	@Override
	public Members searchMemberById(String memberId)throws CensusExceptions{
		
		Optional<Members> member=membersRepository.findById(memberId);
		if(member.isEmpty())
			log.info("Not recieved member by member id");
		else
			log.info("Recieved members by member id");
		return member.get();
	}

	@Override
	public void deleteMemberById(String memberId) throws CensusExceptions {
		 membersRepository.deleteById(memberId);
	}

	@Override
	public Boolean editMemberById(String memberId, Members newMember) throws CensusExceptions {
		Optional<Members> mem=membersRepository.findById(memberId);
		Members tempMember=new Members();
		Members member=mem.get();
		tempMember=member;
		
		if(newMember.getFirstName()==null) {
			tempMember.setFirstName(member.getFirstName());
		}
		else {
			tempMember.setFirstName(newMember.getFirstName());
		}
		if(newMember.getLastName()==null) {
			tempMember.setLastName(member.getLastName());
		}else {
			tempMember.setLastName(newMember.getLastName());
		}
		if(newMember.getGender()==null) {
			tempMember.setGender(member.getGender());
		}else {
			tempMember.setGender(newMember.getGender());
		}
		if(newMember.getSuffix()==null) {
			tempMember.setSuffix(member.getSuffix());
		}else {
			tempMember.setSuffix(newMember.getSuffix());
		}
		if(newMember.getMemberDateOfBirth()==null) {
			tempMember.setMemberDateOfBirth(member.getMemberDateOfBirth());
		}else {
			tempMember.setMemberDateOfBirth(newMember.getMemberDateOfBirth());
		}
		membersRepository.deleteById(memberId);
		Members member1=membersRepository.save(tempMember);
		if(member1!=null) {
			log.info("Member details updated successfully");
			return true;
		}
		log.info("Member updation failed ");
		return false;
	}

	@Override
	public List<Members> searchMembers(String memberName) throws CensusExceptions {
		String [] name=memberName.trim().split(" ");
		String firstName=name[0];
		String lastName=name[1];
		List<Members> list=searchMember(firstName,lastName);
		if(list.isEmpty())
			log.info("Not recieved all members by member name");
		else
			log.info("Recieved all members by member name");
		return list;
	}

	@Override
	public List<Members> searchMembersByFamilyCode(String familyCode) throws CensusExceptions {
		List<Members> membersList=membersRepository.findByFamilyCode(familyCode);
		if(membersList.isEmpty()){
			log.info("Successfully retrieved members list by family code");
		}else {
			log.info(" Failed to retrieve members list by family code");
		}
		List<Members> members=
		membersList.
		stream().
		filter(member -> member.getIsHeadMember()==false).
		collect(Collectors.toList());
		membersList.removeAll(members);
		Members headMember=membersList.get(0);
		members.add(0, headMember);
		return members;
	}

	@Override
	public Boolean addRelationship(String relationship, String memberId) throws CensusExceptions {
		Members member=searchMemberById(memberId);
		Members temp,member1=member;
		member1.setRelationShip(relationship);
		temp=membersRepository.save(member1);
		if(temp==null) {
			log.info("Relationship not added");
			return false;
		}
		log.info("Relationship added successfully");
		return true;
	}

	@Override
	public List<Members> searchMembersByHeadId(String headMemberId) throws CensusExceptions {
		Members member=searchMemberById(headMemberId);
		Members headMember=member;
		System.out.println(headMember);
		return searchMembersByFamilyCode(headMember.getFamilyCode());
	}
	
	@Override
	public List<Members> searchByCriteria(String criteria) throws CensusExceptions{
		
		List<Members> memberList;
		memberList=membersRepository.searchMembersWithCriteria(criteria);
		if(memberList.isEmpty()) {
			memberList=searchMembers(criteria);
			
		}
		return memberList;
		
	}
}
