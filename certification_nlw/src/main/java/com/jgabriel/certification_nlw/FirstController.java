package com.jgabriel.certification_nlw;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class FirstController {

    @GetMapping("/")
    public User returnFirstController() {
        var user = new User("Gabriel", 23);
        return user;
    }

    record User(String name, int age) {}
}
