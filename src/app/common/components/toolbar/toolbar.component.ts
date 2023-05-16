import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  menu : any[] = [
    { rota: 'dashboard', descricao: 'Dashboard', icon: 'dashboard'},
    { rota: 'categorias', descricao: 'Categorias', icon: 'category'},
    { rota: 'entradas', descricao: 'Entradas', icon: 'monetization_on'},
  ]
}
