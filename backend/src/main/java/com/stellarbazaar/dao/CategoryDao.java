package com.stellarbazaar.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stellarbazaar.model.Category;

public interface CategoryDao extends JpaRepository<Category, Integer> {
	

}
