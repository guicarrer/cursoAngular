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
        },
        error: erro => console.error("Ocorreu um erro:", erro)
      });


  }

}
