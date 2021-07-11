package com.census.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.census.model.Members;

public interface MembersRepository extends JpaRepository<Members, String>{
	
	 @Query(value = "select * from members where first_name = ?1 and last_name = ?1", nativeQuery = true)
	  List<Members> searchMembers(String firstName,String lastName);
	 
	 @Query("select u from Members u where u.firstName = :firstname and u.lastName = :lastname")
	  List<Members> findByLastnameOrFirstname(@Param("lastname") String lastname,
	                                 @Param("firstname") String firstname);
	 
	 
	 @Query("select u from Members u where u.familyCode = :familycode")
	  List<Members> findByFamilyCode(@Param("familycode") String familyCode);
}
