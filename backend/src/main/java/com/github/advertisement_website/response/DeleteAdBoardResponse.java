package com.github.advertisement_website.response;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.OK)
public class DeleteAdBoardResponse {
    public DeleteAdBoardResponse(String message) {
    }


}