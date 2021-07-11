package com.census.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Members implements Serializable{
	
	@Id
	@Column(name="member_id")
	private String memberId=null;
	@Column(name="first_name")
	private String firstName=null;
	@Column(name="middle_name")
	private String middleName=null;
	@Column(name="last_name")
	private String lastName=null;
	@Column(name="is_head")
	private Boolean isHeadMember=null;
	@Column(name="gender")
	private String gender=null;
//	private Date memberDateOfBirth;
	@Column(name="dob")
	private String memberDateOfBirth=null;
	@Column(name="suffix")
	private String suffix=null;
	@Column(name="family_code")
	private String familyCode=null;
	@Column(name="relationship")
	private String relationShip=null;
	
	public Members() {
		super();
	}

	public Members(String memberId, String firstName, String middleName, String lastName, Boolean isHeadMember,
			String gender,String memberDateOfBirth,
			String suffix, String familyCode,String relationship) {
		super();
		this.memberId = memberId;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.isHeadMember = isHeadMember;
		this.gender = gender;
		this.memberDateOfBirth = memberDateOfBirth;
		this.suffix = suffix;
		this.familyCode = familyCode;
		this.relationShip=relationship;
		
	}

	public String getMemberId() {
		return memberId;
	}

	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Boolean getIsHeadMember() {
		return isHeadMember;
	}

	public void setIsHeadMember(Boolean isHeadMember) {
		this.isHeadMember = isHeadMember;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

//	public Date getMemberDateOfBirth() {
//		return memberDateOfBirth;
//	}
	
	public String getMemberDateOfBirth() {
		return memberDateOfBirth;
	}


//	public void setMemberDateOfBirth(Date memberDateOfBirth) {
//		this.memberDateOfBirth = memberDateOfBirth;
//	}
	
	public void setMemberDateOfBirth(String memberDateOfBirth) {
		this.memberDateOfBirth = memberDateOfBirth;
	}

	public String getSuffix() {
		return suffix;
	}

	public void setSuffix(String suffix) {
		this.suffix = suffix;
	}

	public String getFamilyCode() {
		return familyCode;
	}

	public void setFamilyCode(String familyCode) {
		this.familyCode = familyCode;
	}

	public String getRelationShip() {
		return relationShip;
	}

	public void setRelationShip(String relationShip) {
		this.relationShip = relationShip;
	}

	@Override
	public String toString() {
		return "Members [memberId=" + memberId + ", firstName=" + firstName + ", middleName=" + middleName
				+ ", lastName=" + lastName + ", isHeadMember=" + isHeadMember + ", gender=" + gender
				+ ", memberDateOfBirth=" + memberDateOfBirth + ", suffix=" + suffix + ", familyCode=" + familyCode
				+ ", relationShip=" + relationShip + "]";
	}
}
