package com.claim.controller;

import java.util.Optional;

import javax.servlet.http.Cookie;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.claim.entity.User;
import com.claim.repository.UserRepository;

@CrossOrigin
@RestController
public class UserController {

	@Autowired
	UserRepository userRepository;
	
	/*
	 * Servlet for logging in a user to their account
	 */
	@RequestMapping(value="/login", consumes=MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	@ResponseBody
	private ResponseEntity <Optional<User>>loginUser(@RequestBody User user) {
		Optional<User> userByLogin = userRepository.findUserByLogin(user.getEmail(),user.getPassword()); 
		//logic to validate
		if(userByLogin.isPresent()) {
			Cookie cookie = new Cookie("userId",Integer.toString(userByLogin.get().getId()));
			
			return new ResponseEntity<>(userByLogin,HttpStatus.OK);
		
		}else {
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
	
	/*
	 * Servlet for adding a new user account
	 */
	
	@RequestMapping(value="/users/{user_id}", consumes=MediaType.APPLICATION_JSON_VALUE,  method = RequestMethod.PUT)
	public void updateUserDetails(@PathVariable(value="user_id") Integer id, @RequestBody User user) {
		userRepository.updateUserPassword(id, user.getPassword());
		
		
	}
	
	/*
	 * Servlet for updating user account
	 */
	@RequestMapping(value="/saveUser", consumes=MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public void submitNewUserDetails(@RequestBody User user) {
		userRepository.save(user);
		
	}
	
	@RequestMapping(value="/findUserById",produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	private ResponseEntity <Optional<User>>findUser(String email) {
		Optional<User> userById = userRepository.findByEmail(email); 
		return new ResponseEntity<>(userById, HttpStatus.OK);
	}
}
