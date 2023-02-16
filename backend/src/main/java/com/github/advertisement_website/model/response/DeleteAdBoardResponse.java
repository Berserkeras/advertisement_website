package com.github.advertisement_website.model.response;

import java.awt.*;

public class DeleteAdBoardResponse {

    private MessageType messageType;
    private String message;
    public DeleteAdBoardResponse(MessageType messageType, String message) {
        this.messageType = messageType;
        this.message = message;
    }

    public MessageType getMessageType() {
        return messageType;
    }

    public void setMessageType(MessageType messageType) {
        this.messageType = messageType;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}