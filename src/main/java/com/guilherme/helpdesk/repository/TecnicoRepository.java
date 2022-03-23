package com.guilherme.helpdesk.repository;

import com.guilherme.helpdesk.Pessoa;
import com.guilherme.helpdesk.domain.Tecnico;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TecnicoRepository extends JpaRepository<Tecnico,Integer> {
}
