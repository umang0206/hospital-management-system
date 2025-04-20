package com.app.hospitalmanagementsystem.Service;

import com.app.hospitalmanagementsystem.Entity.UserCredential;
import com.app.hospitalmanagementsystem.Repository.UserCredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserCredentialService {
    @Autowired
    private UserCredentialRepository userCredentialRepository;
    BCryptPasswordEncoder encoder =  new BCryptPasswordEncoder();

    public UserCredential addUser(UserCredential userCredential){
        String username;
        do {
            username = UserCredential.generateUserName(); // "HMS" + 3 digits
        } while (userCredentialRepository.existsByUserName(username));

        userCredential.setUserName(username);
        String encryptedPassword =  encoder.encode(userCredential.getPassword());
        userCredential.setPassword(encryptedPassword);
        return userCredentialRepository.save(userCredential);
    }

    public Map<Boolean, String> authenticateUser(String username, String password){
        Map<Boolean,String> response =  new HashMap<>();
        UserCredential userCredential= userCredentialRepository.findByUserName(username);

        if(userCredential==null){
            response.put(Boolean.FALSE,"Unknown");
            return response;
        }
        boolean result = encoder.matches(password, userCredential.getPassword());
        if(result){
            response.put(Boolean.TRUE,userCredential.getUserType());
        }
        else {
            response.put(Boolean.FALSE,"Unknown");
        }
        return response;
    }
    public List<UserCredential>getAllUser(){
        return userCredentialRepository.findAll();
    }
}
