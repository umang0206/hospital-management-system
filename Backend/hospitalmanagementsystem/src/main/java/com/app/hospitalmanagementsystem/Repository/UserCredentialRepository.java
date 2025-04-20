package com.app.hospitalmanagementsystem.Repository;

import com.app.hospitalmanagementsystem.Entity.UserCredential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserCredentialRepository extends JpaRepository<UserCredential,Long> {
    UserCredential findByUserName(String userName);

    boolean existsByUserName(String username);
}
