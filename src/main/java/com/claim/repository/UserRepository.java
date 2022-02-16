package com.claim.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.claim.entity.User;
@Transactional
@Repository
public interface UserRepository extends JpaRepository<User,Integer>{

	@Query("Select U FROM User U WHERE U.email = ?1 AND U.password = ?2")
	Optional<User> findUserByLogin(String email, String password);
	
	
	@Modifying
	@Query("Update User SET password =?2 WHERE id =?1")
	Optional<Integer> updateUserPassword(Integer userID, String newPassword);

	@Query("Select U FROM User U WHERE U.email = ?1")
	Optional<User> findByEmail(String email);
	
}
