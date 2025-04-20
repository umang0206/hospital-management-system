package com.app.hospitalmanagementsystem.Controller;

import com.app.hospitalmanagementsystem.Entity.UserCredential;
import com.app.hospitalmanagementsystem.Service.UserCredentialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/login")
public class AuthenticationController {

    @Autowired
    private UserCredentialService userCredentialService;


    @PostMapping()
    public UserCredential addUser(@RequestBody UserCredential userCredential) {
        return userCredentialService.addUser(userCredential);
    }

    @GetMapping("/{username}/{password}")
    public Map<Boolean, String> authenticateUserDetails(@PathVariable String username, @PathVariable String password){
        Map<Boolean,String> response = new HashMap<>();
        return userCredentialService.authenticateUser(username, password);
    }

    @GetMapping()
    public List<UserCredential>getAllUser(){
        return userCredentialService.getAllUser();
    }

}
