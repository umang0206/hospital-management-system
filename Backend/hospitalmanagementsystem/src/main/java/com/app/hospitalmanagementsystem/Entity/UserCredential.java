package com.app.hospitalmanagementsystem.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Random;

@Entity
@Table(name = "user_credential")
public class UserCredential {

    @Id
    private String userName;

    private String password;

    private String userType;

    // No-arg constructor
    public UserCredential() {}

    // Constructor with fields (without userName)
    public UserCredential(String password, String userType) {
        this.password = password;
        this.userType = userType;
    }

    // Getters and Setters
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    // Generate random userName with HMS + 3 digits
    public static String generateUserName() {
        Random random = new Random();
        return "HMS" + String.format("%03d", random.nextInt(1000)); // e.g., HMS023
    }
}
