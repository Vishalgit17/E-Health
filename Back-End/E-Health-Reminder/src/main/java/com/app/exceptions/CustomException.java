package com.app.exceptions;

public class CustomException extends IllegalArgumentException {

	public CustomException(String mesg) {
		super(mesg);
	}
}
