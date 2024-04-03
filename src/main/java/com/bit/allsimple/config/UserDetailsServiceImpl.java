package com.bit.allsimple.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.bit.allsimple.entity.CustomUser;
import com.bit.allsimple.entity.Member;
import com.bit.allsimple.repository.MemberRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private MemberRepository MemberRepository;

    // Consider checking if the Member object returned by
    // MemberRepository.findById(username) is null before proceeding
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Member member = MemberRepository.findById(username).get();
        if (member == null) {
            throw new UsernameNotFoundException(username + " 없음");
        }
        return new CustomUser(member); // USer(3가지 권한정보) + Member (다른 회원정보)
    }
}
