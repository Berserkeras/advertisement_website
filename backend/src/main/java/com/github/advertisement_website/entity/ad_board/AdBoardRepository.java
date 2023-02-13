package com.github.advertisement_website.entity.ad_board;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdBoardRepository extends JpaRepository<AdBoard, Long> {

}
