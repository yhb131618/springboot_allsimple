package com.bit.allsimple.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bit.allsimple.entity.Member;

public interface MemberRepository extends JpaRepository<Member, String> {

}
