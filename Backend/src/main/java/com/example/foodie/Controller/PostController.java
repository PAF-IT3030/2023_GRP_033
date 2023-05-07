package com.example.foodie.Controller;

import java.util.ArrayList;
import java.util.UUID;
import java.util.Collection;
import java.util.Comparator;
import java.util.Arrays;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.foodie.Entity.Post;
import com.example.foodie.Service.PostService;

@CrossOrigin
@RestController
@RequestMapping("api/postService")
public class PostController {

    @Autowired
    PostService postService;

    @PostMapping("/save")
    public ArrayList<Post> submitPost(@RequestBody Post body){
        ArrayList<Post> result = postService.submitPostToDB(body);
        return result;
        
    }

    @GetMapping("/getPost")
    public ArrayList<Post> retrieveAllPost(){
        ArrayList<Post> result=postService.retrivePostFromDB();
        result.sort((e1,e2) -> e2.getDateTime().compareTo(e1.getDateTime()));
        return result;
        
    }

    @DeleteMapping("/delete/{postId}")
    public ArrayList<Post> deleteParticularPost(@PathVariable ("postId") UUID postID){
        ArrayList<Post> result=postService.deletePostFromDB();
        return result;
        
    }


    
}
