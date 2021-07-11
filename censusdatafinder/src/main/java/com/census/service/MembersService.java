package com.census.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.census.exceptions.CensusExceptions;
import com.census.model.Members;

@Service
public interface MembersService {
	
	public Members searchMemberById(String memberId) throws CensusExceptions;
	public void deleteMemberById(String memberId) throws CensusExceptions;
	public Boolean editMemberById(String memberId,Members newMember) throws CensusExceptions;
	public Members addMember(Members member) throws CensusExceptions;
//	public Boolean deleteMember(String firstName,String lastName) throws CensusExceptions;
	public List<Members> searchMember(String firstName,String lastName) throws CensusExceptions;
	public List<Members> searchMembers(String memberName) throws CensusExceptions;
//	public Boolean editMember(String firstName, String lastName, Members newMember) throws CensusExceptions;
	public List<Members> searchMembersByFamilyCode(String familyCode) throws CensusExceptions;
	public Boolean addRelationship(String relationship,String memberId) throws CensusExceptions;
	public List<Members> searchMembersByHeadId(String headMemberId) throws CensusExceptions;
	List<Members> searchByCriteria(String criteria) throws CensusExceptions;
}
