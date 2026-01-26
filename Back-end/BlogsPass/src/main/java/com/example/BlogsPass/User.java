package com.example.BlogsPass;


import org.springframework.stereotype.Component;

@Component
public class User {

    private String Name;
    private int age;

    public User() {
    }

    @Override
    public String toString() {
        return "User{" +
                "Name='" + Name + '\'' +
                ", age=" + age +
                '}';
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public User(String name, int age) {
        Name = name;
        this.age = age;
    }
}
