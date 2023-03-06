package com.github.advertisement_website.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class ContactDataAlreadyExistsException extends CloneNotSupportedException {
    public ContactDataAlreadyExistsException(String contactDataAlreadyTaken) {
    }
}
