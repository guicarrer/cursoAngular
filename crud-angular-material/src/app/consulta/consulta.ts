import {Component, OnInit} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {ClienteService} from '../service/cliente-service';
import {Cliente} from '../cadastro/cliente';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss'
})
export class Consulta implements OnInit {

  nomeBusca: string = '';
  listaClientes: Cliente[] = [];
  colunasTable: string[] = ["id", "nome", "cpf", "dataNascimento", "email"];

  constructor(
    private clienteService: ClienteService
  ) {
  }

  ngOnInit(): void {
    this.listaClientes = this.clienteService.pesquisarCliente('');
  }

  pesquisar() {
    this.listaClientes = this.clienteService.pesquisarCliente(this.nomeBusca);
  }

}
