package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginDTO;
import com.app.dto.SignUpDTO;
import com.app.entities.User;
import com.app.response.ApiResponse;
import com.app.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/signup")
	public ResponseEntity<ApiResponse> signup(@RequestBody SignUpDTO signUpDto) {
		userService.signUp(signUpDto);

		return new ResponseEntity<>(new ApiResponse(true, "User Created Successfully"), HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<ApiResponse> login(@RequestBody LoginDTO loginDto) {
		User user = userService.login(loginDto);
		if(user==null) {
			return new ResponseEntity<>(new ApiResponse(false, "Password is wrong!!!"), HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(new ApiResponse(true, "Successfully Login!!!!"), HttpStatus.ACCEPTED);
	}

}
