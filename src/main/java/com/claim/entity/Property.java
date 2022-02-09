package com.claim.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="property")
public class Property {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name="address_id")
	private Address address;
	
//	@OneToMany(cascade = CascadeType.ALL)
//	@JoinColumn(name="inventory_id")
//	private List<Item> inventory;
	
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "owner_id")
	private User owner;
	
	@Column(name="nickname")
	private String nickname;
		
	public Property() {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
//	public List<Item> getInventory() {
//		return inventory;
//	}
//
//	public void setInventory(List<Item> inventory) {
//		this.inventory = inventory;
//	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	
	
}
