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

  pesquisarCliente(nomeBusca: string): Cliente[] {
    const clientes = this.obterStorage();
    if (!nomeBusca) {
      return clientes;
    }
    return clientes.filter(cliente => cliente.nome?.indexOf(nomeBusca) !== -1);
  }

  buscarClientePorId(id: string): Cliente {
    const clientes = this.obterStorage();
    return clientes.find(cliente => cliente.id === id) || Cliente.newCliente();
  }

  atualizar(cliente: Cliente): void {
    const storage = this.obterStorage();
    storage.forEach((c: Cliente) => {
      if (c.id === cliente.id) {
        // Troca o objeto encontrado no Storage (c) pelo novo (cliente)
        Object.assign(c, cliente);
      }
    });
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  deletar(cliente: Cliente): void {
    const storage = this.obterStorage();
    const novaLista = storage.filter(c => c.id !== cliente.id);
    // const indexItem = storage.indexOf(cliente);
    // if (indexItem > -1) {
    //   storage.splice(indexItem, 1);
    // }
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(novaLista));
  }

  private obterStorage(): Cliente[] {
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
