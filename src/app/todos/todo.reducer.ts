import { createReducer, on, State } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Comprar chelas'),
    new Todo('Pagar coppel'),
    new Todo('Compar carro'),
];

const _todoReducer = createReducer(
    estadoInicial,
    on( actions.crear, (state, { texto }) => [...state, new Todo( texto ) ]),
    on( actions.toggle, (state, { id }) => {
        
        return state.map( todo => {

            if ( todo.id === id ) {
                return {
                    ...todo, 
                    completado: !todo.completado 
                }
            } else {
                return todo;
            }
        });
    }),
    on( actions.toggleAll, (state, { completado }) => 
        
        state.map( todo => {

            return {
                ...todo, 
                completado: completado 
            }
        })
    ), 
    on( actions.editar, (state, { id, texto }) => {
        
        return state.map( todo => {

            if ( todo.id === id ) {
                return {
                    ...todo, 
                    texto: texto 
                }
            } else {
                return todo;
            }
        });
    }),
    on( actions.borrar, (state, { id }) => state.filter( todo => todo.id !== id) ),
    on( actions.borrarCompletados, (state) => state.filter( todo => !todo.completado ) ),
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}
