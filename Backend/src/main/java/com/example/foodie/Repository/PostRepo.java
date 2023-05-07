package com.example.foodie.Repository;

import java.util.ArrayList;
import java.util.UUID;

import com.example.foodie.Entity.Post;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepo extends CassandraRepository<Post, UUID> {

	ArrayList<Post> findAll();
	Post save(Post post);
	void deleteById(UUID postID);
	
}