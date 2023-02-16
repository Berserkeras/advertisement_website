package com.github.advertisement_website.repositories;


import com.github.advertisement_website.entity.AdBoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.UUID;

@Repository("adBoardRepository")
public interface AdBoardRepository extends JpaRepository<AdBoardEntity, Long> {
    void deleteByAdId(UUID ad_user_id);
    @Transactional
    @Modifying
    @Query("DELETE FROM AdBoardEntity a WHERE a.createTime < :twoWeeksAgo")
    void deleteAdsOlderThan(LocalDateTime twoWeeksAgo);

}
