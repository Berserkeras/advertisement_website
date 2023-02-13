package com.github.advertisement_website.entity.ad_board;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class AdBoardService {

    private final AdBoardRepository adBoardRepository;

    public List<AdBoard> getAllBoardAds() {
        return adBoardRepository.findAll();
    }
}
