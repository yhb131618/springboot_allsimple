package com.bit.allsimple.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bit.allsimple.entity.File;

public interface FileRepository extends JpaRepository<File, Long> {
}
