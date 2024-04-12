package com.bit.allsimple.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bit.allsimple.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserId(String username);

    long countByUserId(String userId);
}
