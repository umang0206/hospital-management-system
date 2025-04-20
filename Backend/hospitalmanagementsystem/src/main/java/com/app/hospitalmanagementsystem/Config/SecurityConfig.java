package com.app.hospitalmanagementsystem.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())          // disable CSRF for simplicity
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/login/**",
                                "/patient/**",
                                "/appointment/**",
                                "/medicine/**"
                        ).permitAll()  // allow your login & register
                        .anyRequest().authenticated()              // lock down everything else
                );
        return http.build();
    }
}