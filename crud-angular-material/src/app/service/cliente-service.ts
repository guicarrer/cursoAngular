import {Injectable} from '@angular/core';
import {Cliente} from '../cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "CLIENTES";

  salvar(cliente: Cliente) {
    const storage = this.obterStorage();
    storage.push(cliente);
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  obterStorage(): Cliente[] {
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    let clientes: Cliente[] = [];
    if (repositorioClientes) {
      clientes = JSON.parse(repositorioClientes);
    } else {
      localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    }
    return clientes;
  }

}
