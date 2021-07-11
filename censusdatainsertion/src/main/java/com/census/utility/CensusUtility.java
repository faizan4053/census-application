package com.census.utility;



import java.util.Random;

import com.census.model.Members;

public class CensusUtility {
	
	private static Boolean familyCodeStatus=false;
	private static String familyCode;
	
	public static String generateMemberId(Members member) {
		String [] str=member.getMemberDateOfBirth().trim().split("/");
		String memberId=member.getFirstName()
				+member.getLastName()
				+str[0]+str[1]+str[2];
		return memberId;
	}
	
	public static String generateFamilyCode() {
		Random random = new Random();   
		int y = random.nextInt(10000); 
		String familyCode="Fam"+y;
		return familyCode;
	}

	public static  Boolean getFamilyCodeStatus() {
		return familyCodeStatus;
	}

	public static  void setFamilyCodeStatus(Boolean familyCodeStatus) {
		CensusUtility.familyCodeStatus = familyCodeStatus;
	}

	public static String getFamilyCode() {
		return familyCode;
	}

	public static void setFamilyCode(String familyCode) {
		CensusUtility.familyCode = familyCode;
	}
	
	
	

}
