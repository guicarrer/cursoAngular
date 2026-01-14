import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

interface Produto {
  nome: string;
  valor: number;
  imagem: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  produtos: Produto[] = [
    {
      nome: 'Câmera Fotográfica',
      valor: 1500,
      imagem: 'https://picsum.photos/id/1/200/150'
    },
    {
      nome: 'Smartphone',
      valor: 2500,
      imagem: 'https://picsum.photos/id/2/200/150'
    },
    {
      nome: 'Notebook',
      valor: 4500,
      imagem: 'https://picsum.photos/id/3/200/150'
    },
    {
      nome: 'Tablet',
      valor: 1200,
      imagem: 'https://picsum.photos/id/4/200/150'
    },
    {
      nome: 'Smartwatch',
      valor: 800,
      imagem: 'https://picsum.photos/id/5/200/150'
    },
    {
      nome: 'Fone de Ouvido',
      valor: 300,
      imagem: 'https://picsum.photos/id/6/200/150'
    }
  ];



}
