import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Estado, Municipio} from '../model/brasilApi.models';

@Injectable({
  providedIn: 'root'
})
export class BrasilApiService {

  baseURL: string = 'https://brasilapi.com.br/api';

  constructor(
    private http: HttpClient
  ) {

  }

  listarEstados() : Observable<Estado[]> {
    return this.http.get<Estado[]>(`${this.baseURL}/ibge/uf/v1`);
  }

  listarMunicipios(uf: string): Observable<Municipio[]>{
    return this.http.get<Municipio[]>(`${this.baseURL}/ibge/municipios/v1/${uf}`);
  }

}
