package com.bit.allsimple.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.filter.CorsFilter;

import com.bit.allsimple.jwt.JwtAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .cors(httpSecurityCorsConfigurer -> {
                })
                .csrf(AbstractHttpConfigurer::disable)
                .httpBasic(httpSecurityHttpBasicConfigurer -> httpSecurityHttpBasicConfigurer.disable())
                .sessionManagement(httpSecuritySessionManagementConfigurer -> httpSecuritySessionManagementConfigurer
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorizationManagerRequestMatcherRegistry -> {
                    authorizationManagerRequestMatcherRegistry
                            .requestMatchers(new AntPathRequestMatcher("/board/**")).hasAnyRole("ADMIN", "USER")
                            .requestMatchers(new AntPathRequestMatcher("/admin/**")).hasRole("ADMIN")
                            .requestMatchers(new AntPathRequestMatcher("/user/login")).permitAll()
                            .requestMatchers(new AntPathRequestMatcher("/")).permitAll()
                            .requestMatchers(new AntPathRequestMatcher("/files/**")).permitAll()
                            .requestMatchers(new AntPathRequestMatcher("/thumbnail/**")).permitAll()
                            .requestMatchers(new AntPathRequestMatcher("/video/**")).permitAll()
                            .requestMatchers(new AntPathRequestMatcher("/files/**")).permitAll()
                            .requestMatchers(new AntPathRequestMatcher("/api/hello")).permitAll()
                            .requestMatchers(new AntPathRequestMatcher("/user/join")).permitAll()
                            .requestMatchers(new AntPathRequestMatcher("/user/id-check")).permitAll()
                            .anyRequest().authenticated();
                })
                .addFilterAfter(jwtAuthenticationFilter, CorsFilter.class)
                .build();
    }
}
