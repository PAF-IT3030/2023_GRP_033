package com.example.foodie.Repository;
//package com.example.dinu.Repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.cassandra.repository.CassandraRepository;

import com.example.foodie.Entity.Status;
//import com.example.dinu.Entity.Status;

public interface StatusRepo extends CassandraRepository<Status, UUID> {

	Status save(Status status);
	ArrayList<Status> findAll();
}