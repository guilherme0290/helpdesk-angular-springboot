package com.guilherme.helpdesk.services;

import com.guilherme.helpdesk.domain.Chamado;
import com.guilherme.helpdesk.domain.Cliente;
import com.guilherme.helpdesk.domain.Tecnico;
import com.guilherme.helpdesk.domain.enums.Perfil;
import com.guilherme.helpdesk.domain.enums.Prioridade;
import com.guilherme.helpdesk.domain.enums.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.guilherme.helpdesk.repository.ChamadoRepository;
import com.guilherme.helpdesk.repository.ClienteRepository;
import com.guilherme.helpdesk.repository.TecnicoRepository;

import java.util.Arrays;

@Service
public class DBService {

    @Autowired
    ClienteRepository clienteRepository;

    @Autowired
    TecnicoRepository tecnicoRepository;

    @Autowired
    ChamadoRepository chamadoRepository;

    @Autowired
    private BCryptPasswordEncoder encoder;


    public void instanciaDB(){

        Tecnico tec1 = new Tecnico(null, "Guilherme", "05328962117", "guilhermes0290@gmail.com", encoder.encode("12345"));
        tec1.addPerfil(Perfil.ADMIN);

        Cliente cli1 = new Cliente(null, "Mario Fernandes", "87245460035", "mario@gmail.com", encoder.encode("12345"));

        Chamado c1 = new Chamado(null, Prioridade.MEDIA, Status.ANDAMENTO, "Chamado 01", "primeiro chamado", tec1, cli1);

        tecnicoRepository.saveAll(Arrays.asList(tec1));
        clienteRepository.saveAll(Arrays.asList(cli1));
        chamadoRepository.saveAll(Arrays.asList(c1));

//        for(int i = 0; i< 20; i++) {
//            Tecnico tec2 = new Tecnico(null, "Guilherme", "0532896211"+i, "guilhermes0290@gmail.com"+i, encoder.encode("12345"));
//            tec1.addPerfil(Perfil.ADMIN);
//
//            Cliente cli2 = new Cliente(null, "Mario Fernandes", "8984176907"+i, "mario@gmail.com"+i, encoder.encode("12345"));
//
//            Chamado c2 = new Chamado(null, Prioridade.MEDIA, Status.ANDAMENTO, "Chamado 01", "primeiro chamaod", tec1, cli1);
//
//            tecnicoRepository.saveAll(Arrays.asList(tec2));
//            clienteRepository.saveAll(Arrays.asList(cli2));
//            chamadoRepository.saveAll(Arrays.asList(c2));
//        }
    }
}
