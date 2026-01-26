package com.example.BlogsPass;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {


    @GetMapping
    public String greet(){
        return "Hello world";
    }

    @PostMapping("/post")
    public User getData(@RequestBody User user){
        System.out.println(user.getAge());
        System.out.println(user.getName());
        return user;
    }

    @GetMapping("/fetch")
    public ResponseEntity<User2> fetchAll(User2 user2){
        System.out.println(user2.getFirstName());
        System.out.println(user2.getAge());
        return ResponseEntity.ok(user2);
    }
}
