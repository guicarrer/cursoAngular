import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriaService} from '../service/categoria-service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss'
})
export class Categoria {

  camposForm: FormGroup;

  constructor(
    private service: CategoriaService
  ) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
    })
  }

  salvar(): void {
    this.camposForm.markAllAsTouched();
    if (this.camposForm.valid) {
      this.service
        .salvar(this.camposForm.value)
        .subscribe({
          next: categoria => {
            console.log("Salvo com sucesso!", categoria)
            this.camposForm.reset();
          },
          error: erro => console.error("Ocorreu um erro:", erro)
        });
    }
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return (campo?.invalid && campo?.touched && campo?.errors?.['required']) || false;
  }

}
