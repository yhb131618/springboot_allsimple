package com.bit.allsimple.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bit.allsimple.entity.FileVideoInfo;

public interface FileVideoRepository extends JpaRepository<FileVideoInfo, Long> {

}
