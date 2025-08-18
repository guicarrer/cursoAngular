import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-calculadora',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss'
})
export class Calculadora {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularResultado() {
    console.log("Chamando o metodo para calcular o resultado!");
    console.log("Numero 1: " + this.numero1);
    console.log("Numero 2: " + this.numero2);
    this.resultado = this.numero1 + this.numero2;
  }


}
