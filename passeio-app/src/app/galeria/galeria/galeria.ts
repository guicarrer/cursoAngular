import {Component, OnInit} from '@angular/core';
import {Lugar} from '../../lugares/model/lugar';
import {Categoria} from "../../categorias/model/categoria";
import {LugarService} from '../../lugares/service/lugar-service';
import {CategoriaService} from '../../categorias/service/categoria-service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss'
})
export class Galeria implements OnInit {

  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];
  nomeFiltro: string = '';
  categoriaFiltro: string = '';


  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ) {
  }

  ngOnInit(): void {
    this.categoriaService.obterTodas()
      .subscribe({
        next: (categoriasResposta) => {
          this.categoriasFiltro = categoriasResposta;
          console.table(this.categoriasFiltro);
        },
        error: erro => console.error("Ocorreu um erro:", erro)
      });
    this.lugarService.obterTodos()
      .subscribe({
        next: (lugaresResposta) => {
          this.lugares = lugaresResposta;
          console.table(this.lugares);
        },
        error: erro => console.error("Ocorreu um erro:", erro)
      });
    // this.categoriaService.obterTodas()
    //   .subscribe(categorias => this.categoriasFiltro = categorias);
    //
    // this.lugarService.obterTodos()
    //   .subscribe(lugaresResposta => this.lugares = lugaresResposta);
  }

  getTotalEstrelas(lugar: Lugar): string {
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734'.repeat(5 - (lugar.avaliacao || 0));
  }

  filtrar() {
    console.log("NOME_FILTRO: " + this.nomeFiltro);
    console.log("CATEGORIA_FILTRO: " + this.categoriaFiltro);
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro)
      .subscribe({
        next: (lugaresResposta) => {
          this.lugares = lugaresResposta;
          console.table(this.lugares);
        },
        error: erro => console.error("Ocorreu um erro:", erro)
      });
    console.table(this.lugares);
  }

}
