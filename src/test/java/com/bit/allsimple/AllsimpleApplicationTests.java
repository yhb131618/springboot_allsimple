package com.bit.allsimple;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.bit.allsimple.entity.Member;
import com.bit.allsimple.entity.Role;
import com.bit.allsimple.repository.MemberRepository;

@SpringBootTest
class AllsimpleApplicationTests {

	@Autowired
	private MemberRepository memberRepository;

	@Autowired
	private PasswordEncoder encoder;

	@Test
	void createMember() {
		Member m = new Member();
		m.setUsername("test1");
		m.setPassword(encoder.encode("test1"));
		m.setName("test1");
		m.setRole(Role.ADMIN);
		m.setEnabled(true);
		memberRepository.save(m);
	}

}
