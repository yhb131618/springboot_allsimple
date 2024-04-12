package com.bit.allsimple.entity;

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false) // 상위 클래스의 equals와 hashCode를 호출하지 않음
public class CustomUser extends User {

    private Member member;

    public CustomUser(Member member) {
        super(member.getUsername(), member.getPassword(),
                AuthorityUtils.createAuthorityList("ROLE_" + member.getRole().toString()));
        this.member = member;
    }
}
