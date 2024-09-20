package com.stellarbazaar.service;

import org.springframework.web.multipart.MultipartFile;

import com.stellarbazaar.model.Product;

public interface ProductService {
	
	void addProduct(Product product, MultipartFile productImmage);

}
