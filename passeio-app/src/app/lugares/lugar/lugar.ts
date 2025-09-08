import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Categoria} from '../../categorias/model/categoria';
import {CategoriaService} from '../../categorias/service/categoria-service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.html',
  styleUrl: './lugar.scss'
})
export class Lugar implements OnInit {

  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService
  ) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required)

    });
  }

  ngOnInit() {
    this.categoriaService.obterTodas().subscribe({
      next: (listaCategorias) => {
        this.categorias = listaCategorias;
        console.log("Categorias:", listaCategorias);
      }
    });
  }

  salvar(): void {
    console.log("Valores", this.camposForm.value);
  }

}
