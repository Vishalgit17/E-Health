package com.app.dto;

public class SignUpDTO {

private String fName;
	
	private String lName;
	
	private String email;
	
	private String password;
	
	private Integer age;
	
	private String mobileNo;

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getmobileNo() {
		return mobileNo;
	}

	public void setmobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getfName() {
		return fName;
	}

	public void setfName(String fName) {
		this.fName = fName;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
