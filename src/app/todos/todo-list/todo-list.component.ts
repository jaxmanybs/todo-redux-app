import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import * as actions from 'src/app/filtros/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: actions.filtrosValidos = 'todos';

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
  
    this.store.subscribe( ({ todos, filtro }) => { 
        this.todos = todos;
        this.filtroActual = filtro;
      });
  }
}
