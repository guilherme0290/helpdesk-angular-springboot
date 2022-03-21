package com.guilherme.helpdesk.repository;

import com.guilherme.helpdesk.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa,Integer> {
}
