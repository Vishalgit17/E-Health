package com.app.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Objects;

import org.springdoc.api.OpenApiResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.LoginDTO;
import com.app.dto.SignUpDTO;
import com.app.entities.User;
import com.app.exceptions.CustomException;
import com.app.repository.UserRepo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepo userRepo;
	
	@Override
	public void signUp(SignUpDTO userDto) {
		if(Objects.nonNull(userRepo.findByEmail(userDto.getEmail()))) {
			throw new CustomException("User already Exist");
		}
		
		
//		String encryptedPassword = signUpDto.getPassword();
//		try {
//			encryptedPassword = hashPassword(signUpDto.getPassword());
//		} catch (NoSuchAlgorithmException e) {
//			e.printStackTrace();
//		}
		
		
		User user  = new User();
		user.setFName(userDto.getfName());
		user.setLName(userDto.getlName());
		user.setEmail(userDto.getEmail());
		user.setPassword(userDto.getPassword());
		user.setAge(userDto.getAge());
		user.setMobileNo(userDto.getmobileNo());
		
		userRepo.save(user);
	}

	@Override
	public User login(LoginDTO loginDto) {
		User user = userRepo.findByEmail(loginDto.getEmail());
		if(user==null) {
			throw new CustomException("User Not Found!!!");
		}
		
		if(user.getPassword().equals(loginDto.getPassword())) {
			return user;
		} else {
			return null;
		}
	}
	
	
//	public String hashPassword(String password) throws NoSuchAlgorithmException {
//		MessageDigest md = MessageDigest.getInstance("MD5");
//		md.update(password.getBytes());
//		byte[] digest = md.digest();
//		String hash = DatatypeConverter.printHexBinary(digest).toUpperCase();
//		return hash;
//	}

}
