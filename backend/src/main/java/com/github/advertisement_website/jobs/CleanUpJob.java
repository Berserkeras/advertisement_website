package com.github.advertisement_website.jobs;

import com.github.advertisement_website.repositories.AdBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Component
public class CleanUpJob {
    private final AdBoardRepository adBoardRepository;

    public CleanUpJob(AdBoardRepository adBoardRepository) {
        this.adBoardRepository = adBoardRepository;
    }

    // The @Scheduled annotation is used to schedule the deleteOldAds method to run once per day at midnight
        // (0 0 0 * * ? is a cron expression that specifies this).
        @Scheduled(cron = "0 0 0 * * ?")
        public void deleteOldAds() {
            LocalDateTime twoWeeksAgo = LocalDateTime.now().minus(2, ChronoUnit.WEEKS);
            adBoardRepository.deleteAdsOlderThan(twoWeeksAgo);
        }
}
