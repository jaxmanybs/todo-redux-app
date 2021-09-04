import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions'


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo('');
  @ViewChild('inputFisico') txtInputFisico: any;

  chkCompletado: FormControl;
  txtInput: FormControl;

  editando: boolean = false;

  constructor( private store: Store<AppState>) {

    this.chkCompletado = new FormControl( '' );
    this.txtInput = new FormControl( '' );

  }

  ngOnInit(): void {

    // this.todo.completado = true;

    this.chkCompletado = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );

    this.chkCompletado.valueChanges.subscribe( valor => {
      this.store.dispatch( actions.toggle({ id: this.todo.id }) );
    });
  }

  editar() {

    this.editando = true;
    this.txtInput.setValue( this.todo.texto );

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
    
  }

  borrar() {

    this.store.dispatch( 
      actions.borrar({ 
        id: this.todo.id
      }) 
    );

  }

  terminarEdicion() {
    this.editando = false;

    if ( this.txtInput.invalid ) { return; }
    if ( this.txtInput.value === this.todo.texto ) { return; }
    
    this.store.dispatch( 
      actions.editar({ 
        id: this.todo.id,
        texto: this.txtInput.value
      }) 
    );
  }

}
