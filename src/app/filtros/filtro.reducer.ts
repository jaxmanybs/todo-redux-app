import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';


export const initialState: actions.filtrosValidos = 'todos';

const _filtroReducer = createReducer<actions.filtrosValidos>(
    initialState,
    on( actions.setFiltro, (state, { filtro }) => filtro ),
);

export function filtroReducer(state: any, action: any) {
    return _filtroReducer(state, action);
}
