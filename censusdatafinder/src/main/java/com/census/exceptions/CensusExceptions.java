package com.census.exceptions;

public class CensusExceptions extends Exception {
	
	public CensusExceptions() {
		super();
	}

	public CensusExceptions(String errorMessage) {
		super(errorMessage);
	}

	public CensusExceptions(Throwable errorMessage) {
		super(errorMessage);
	}
}
