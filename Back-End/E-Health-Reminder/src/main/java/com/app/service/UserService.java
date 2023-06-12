package com.app.service;

import org.springframework.stereotype.Service;

import com.app.dto.LoginDTO;
import com.app.dto.SignUpDTO;
import com.app.entities.User;

@Service
public interface UserService {

	void signUp(SignUpDTO signUpDto);
	
	User login(LoginDTO loginDto);
}
