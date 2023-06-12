package com.app.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@Entity
@ToString
@Table(name = "users")
public class User extends BaseEntity {
	
	@Column(name = "fName")
	private String fName;
	
	@Column(name = "lName")
	private String lName;
	
	@Column(name = "age")
	private Integer age;
	
	@Column(name = "mobNo")
	private String mobileNo;
	
	@Column(name = "email")
	private String email;
	
	@Column( name = "password")
	private String password;

	public User(String fName, String lName, Integer age, String mobileNo, String email, String password) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.age = age;
		this.mobileNo = mobileNo;
		this.email = email;
		this.password = password;
	}
	
	
	public User() {
		super();
	}
	
	
}
