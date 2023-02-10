package com.github.advertisement_website;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AdvertisementWebsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdvertisementWebsiteApplication.class, args);
		System.out.println("http://localhost:8080/api/v1/ad-board");
	}

}
