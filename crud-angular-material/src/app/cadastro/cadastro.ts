import {Component, inject, OnInit} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {Cliente} from './cliente';
import {ClienteService} from '../service/cliente-service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Estado, Municipio} from '../model/brasilApi.models';
import {BrasilApiService} from '../service/brasil-api-service';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgxMaskDirective,
    MatSelectModule,
    CommonModule

  ],
  providers: [
    provideNgxMask()
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class Cadastro implements OnInit {

  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;
  estados: Estado[] = [];
  municipios: Municipio[] = [];

  constructor(
    private clienteService: ClienteService,
    private brasilService: BrasilApiService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((query: any) => {
      const params = query['params'];
      const id = params['id'];
      if (id) {
        let clienteEncontrado = this.clienteService.buscarClientePorId(id);
        if (clienteEncontrado) {
          this.atualizando = true;
          this.cliente = clienteEncontrado;
          if (this.cliente.uf) {
            const event = { value: this.cliente.uf };
            this.carregarMunicipio(event as MatSelectChange);
          }
        }
      }
    });
    this.carregarUFs();
  }

  mostrarMensagem(mensagem: string): void {
    this.snackBar.open(mensagem, "Sucesso");
  }

  limpar() {
    this.cliente = Cliente.newCliente();
  }

  salvar() {
    if (!this.atualizando) {
      this.clienteService.salvar(this.cliente);
      this.cliente = Cliente.newCliente();
      this.mostrarMensagem("Salvo Com Sucesso");
    } else {
      this.clienteService.atualizar(this.cliente)
      this.router.navigate(['/consulta'])
        .then(success => {
          if (success) {
            console.log("Navigation successful!")
          } else {
            console.log("Navigation failed!")
          }
        })
        .catch(error => {
          console.log('Navigation error:', error);
        });
      this.mostrarMensagem("Atualizado com Sucesso");
    }
  }

  carregarUFs() {
    this.brasilService.listarEstados().subscribe({
      next: listaEstados => this.estados = listaEstados,
      error: error => console.log("Ocorreu um Erro: ", error)
    });
  }

  carregarMunicipio(event: MatSelectChange) {
    const ufSelecionada = event.value;
    this.brasilService.listarMunicipios(ufSelecionada).subscribe({
      next: listaMunicipios => this.municipios = listaMunicipios,
      error: error => console.log("Ocorreu um Erro: ", error)
    });
  }

}
