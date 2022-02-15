package com.claim.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.claim.entity.Property;
import com.claim.entity.User;
import com.claim.repository.PropertyRepository;

@CrossOrigin
@RestController
public class PropertyController {

	@Autowired
	PropertyRepository propertyRepository;
	
	/*
	 * Servlet for adding a new property to a user's account
	 */
	@RequestMapping(value="/saveProperty", consumes=MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public void submitNewPropertyDetails(@RequestBody Property property) {
		propertyRepository.save(property);
		
	}
	@RequestMapping(value="/deleteProperty/{id}",method = RequestMethod.DELETE )
	public void deleteProperty(@PathVariable(value="id") Integer id){
		propertyRepository.deleteById(id);
		
	}
	/*
	 * Servlet for retrieving a property object
	 */
	@RequestMapping(value="/findPropertyById",produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	private ResponseEntity <Optional<Property>>findProperty(Integer id) {
		Optional<Property> propertyById = propertyRepository.findById(id); 
		return new ResponseEntity<>(propertyById, HttpStatus.OK);
	}
	
	//step 20: servlet for finding a list of students, 'findAll()'
	@RequestMapping(value="/findAllProperties", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Optional<List<Property>>> findAllProperties() {
		Optional<List<Property>> properties = Optional.of(propertyRepository.findAll());
		//return new ResponseEntity<Optional <List<Student>>>(students, HttpStatus.OK);
		return new ResponseEntity<>(properties, HttpStatus.OK);
		
	}
}
