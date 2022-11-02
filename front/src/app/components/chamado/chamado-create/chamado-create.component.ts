import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { ChamadoService } from 'src/app/service/chamado.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { TecnicoService } from 'src/app/service/tecnico.service';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {

  clientes: Cliente[] = [];
  tecnicos: Tecnico[] = [];

  chamado: Chamado = {
    prioridade:     '',
    status:         '',
    titulo:         '',
    observacoes:      '',
    tecnico:        '',
    cliente:        '',
    nomeCliente:    '',
    nomeTecnico:    ''
  }

  prioridade: FormControl = new FormControl(null,[Validators.required])
  status:     FormControl = new FormControl(null,[Validators.required])
  titulo:     FormControl = new FormControl(null,[Validators.required])
  observacoes:  FormControl = new FormControl(null,[Validators.required])
  tecnico:    FormControl = new FormControl(null,[Validators.required])
  cliente:    FormControl = new FormControl(null,[Validators.required])

  constructor(
    private clienteService: ClienteService,
    private tecnicoService: TecnicoService,
    private chamadoService: ChamadoService,
    private toast:          ToastrService,
    private router:         Router
  ) { }

  ngOnInit(): void {
    this.findAllClientes()
    this.findAllTecnicos()
  }

  findAllClientes(): void{
    this.clienteService.findAll().subscribe(resposta =>{
      this.clientes = resposta;
    })
  }

  findAllTecnicos(): void{
    this.tecnicoService.findAll().subscribe(resposta =>{
      this.tecnicos= resposta;
    })
  }

  validaCampos(): boolean{
    return this.prioridade.valid &&
    this.status.valid &&
    this.titulo.valid &&
    this.tecnico.valid &&
    this.cliente.valid &&
    this.observacoes.valid
  }

  create():void{
    this.chamadoService.create(this.chamado).subscribe(resposta => {
      this.toast.success('Chamado criado com sucesso','Novo Chamado')
        this.router.navigate(['chamados'])
    },ex =>{
      console.log(ex)
      this.toast.error(ex.error.error)
    })
  }

}
