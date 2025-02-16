package com.stellarbazaar.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stellarbazaar.model.Address;

@Repository
public interface AddressDao extends JpaRepository<Address, Integer> {

}
