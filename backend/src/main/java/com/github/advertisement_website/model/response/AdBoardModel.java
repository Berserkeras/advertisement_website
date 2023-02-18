package com.github.advertisement_website.model.response;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;

public class AdBoardModel implements Serializable  {
    private String id;
    private String title;
    private String description;
    private String city;
    private String contactData;
    private BigDecimal price;
    private BigInteger viewCount;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String content) {
        this.description = content;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getContactData() {
        return contactData;
    }

    public void setContactData(String authorName) {
        this.contactData = authorName;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigInteger getViewCount() {
        return viewCount;
    }

    public void setViewCount(BigInteger viewCount) {
        this.viewCount = viewCount;
    }
}