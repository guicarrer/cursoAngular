import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  ngOnInit(): void {
    const dados = [
      {categoria: 'Eletronicos', valor: 30},
      {categoria: 'Roupas', valor: 20},
      {categoria: 'Alimentos', valor: 50},
      {categoria: 'Livros', valor: 15},
      {categoria: 'Móveis', valor: 25},
      {categoria: 'Brinquedos', valor: 10},
      {categoria: 'Esportes', valor: 18},
      {categoria: 'Beleza', valor: 22}
    ];

    const labels = dados.map(v => v.categoria);
    const valores = dados.map(v => v.valor);

    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Vendas por Categoria',
            data: valores,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }
}
