import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Categoria} from '../../categorias/model/categoria';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.html',
  styleUrl: './lugar.scss'
})
export class Lugar {

  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor() {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avalizacao: new FormControl('', Validators.required)

    });
  }

  salvar(): void {
    console.log("Valores", this.camposForm.value);
  }

}
