package com.github.advertisement_website.model.response;

import java.io.Serializable;

public class AdBoardModel implements Serializable  {
    private String id;
    private String title;
    private String description;
    private String city;
    private String contactData;
    private String price;
    private String viewCount;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return description;
    }

    public void setContent(String content) {
        this.description = content;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAuthorName() {
        return contactData;
    }

    public void setAuthorName(String authorName) {
        this.contactData = authorName;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getViewCount() {
        return viewCount;
    }

    public void setViewCount(String viewCount) {
        this.viewCount = viewCount;
    }
}