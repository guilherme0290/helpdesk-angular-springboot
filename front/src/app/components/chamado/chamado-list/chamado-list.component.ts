import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';
import { ChamadoService } from 'src/app/service/chamado.service';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {

  ELEMENT_DATA: Chamado[] = []
  FILTERED_DATA:  Chamado[] = []
  // ELEMENT_DATA: Chamado[] = [
  //   {
  //     id:                        1,
  //     dataAbertura:   '21/06/2020',
  //     dataFechamento: '21/06/2020',
  //     prioridade:           'ALTA',
  //     status:          'ANDAMENTO',
  //     titulo:          'Chamado 1',
  //     descricao: 'Teste chamado 1',
  //     tecnico:                   1,
  //     cliente:                   2,
  //     nomeCliente:     'Guilherme',
  //     nomeTecnico:          'Lula',
  //   }
  // ]

  displayedColumns: string[] = ['id', 'titulo', 'cliente','tecnico', 'dataAbertura','prioridade','status','acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service :ChamadoService
  ) { }

  ngOnInit(): void {
    this.findAll()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase();    
  }

  findAll(): void{
    this.service.findAll().subscribe(resposta =>{
      this.ELEMENT_DATA = resposta;
      this.dataSource = new  MatTableDataSource<Chamado>(resposta);
      this.dataSource.paginator = this.paginator
    })
  }

  retortaStatus(status: any):string{
    if (status == '0'){
      return 'ABERTO'
    }else if(status == '1'){
      return 'EM ANDAMENTO'
    }else {
      return 'ENCERRADO'
    }
  }

  retortaPrioridade(prioridade: any):string{
    if (prioridade == '0'){
      return 'BAIXA'
    }else if(prioridade == '1'){
      return 'MÉDIA'
    }else {
      return 'ALTA'
    }
  }

  orderByStatus(status: any): void{
    let list: Chamado[] = []
    this.ELEMENT_DATA.forEach(element =>{
      if(element.status == status){
        list.push(element)
      }
    })
    this.FILTERED_DATA = list;
    this.dataSource = new  MatTableDataSource<Chamado>(list);
    this.dataSource.paginator = this.paginator
  }

}
