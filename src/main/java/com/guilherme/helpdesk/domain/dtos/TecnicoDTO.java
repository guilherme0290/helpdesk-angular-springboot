package com.guilherme.helpdesk.domain.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.guilherme.helpdesk.domain.Tecnico;
import com.guilherme.helpdesk.domain.enums.Perfil;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class TecnicoDTO implements Serializable {

    protected  Integer id;
    protected String nome;
    protected String cpf;
    protected String email;
    protected String senha;
    protected Set<Integer> perfils = new HashSet<>();
    @JsonFormat(pattern = "dd/MM/yyyy")
    protected LocalDate dataCriação =  LocalDate.now();

    public TecnicoDTO() {
        super();
        addPerfils(Perfil.CLIENTE);
    }

    public TecnicoDTO(Tecnico obj) {
        this.id = obj.getId();
        this.nome = obj.getNome();
        this.cpf = obj.getCpf();
        this.email = obj.getEmail();
        this.senha = obj.getSenha();
        this.perfils = obj.getPerfils().stream().map(x-> x.getCodigo()).collect(Collectors.toSet());
        this.dataCriação = obj.getDataCriação();
        addPerfils(Perfil.CLIENTE);
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Set<Perfil> getPerfils() {
        return perfils.stream().map(c -> Perfil.toEnum(c)).collect(Collectors.toSet());
    }

    public void addPerfils(Perfil perfil) {
        this.perfils.add(perfil.getCodigo());
    }

    public LocalDate getDataCriação() {
        return dataCriação;
    }

    public void setDataCriação(LocalDate dataCriação) {
        this.dataCriação = dataCriação;
    }
}
