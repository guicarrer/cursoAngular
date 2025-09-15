import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Categoria} from '../../categorias/model/categoria';
import {CategoriaService} from '../../categorias/service/categoria-service';
import {LugarService} from '../service/lugar-service';

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
    private categoriaService: CategoriaService,
    private lugarService: LugarService
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
    this.camposForm.markAllAsTouched();
    if (this.camposForm.valid) {
      console.log("Valores", this.camposForm.value);
      this.lugarService.salvar(this.camposForm.value)
        .subscribe({
          next: (lugar) => {
            console.log("Cadastrado com sucesso", lugar);
            this.camposForm.reset();
          },
          error: erro => console.log("Ocorreu um erro", erro)
        })
    }
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return (campo?.invalid && campo?.touched && campo?.errors?.['required']) || false;
  }

}
