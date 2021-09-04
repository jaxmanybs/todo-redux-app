import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[Todo Component] Crea Todo', 
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[Todo Component] Toggle Todo', 
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[Todo Component] ToggleAll Todo',
    props<{ completado: boolean }>()
);

export const editar = createAction(
    '[Todo Component] Editar Todo', 
    props<{ id: number, texto: string }>()
);

export const borrar = createAction(
    '[Todo Component] Borrar Todo', 
    props<{ id: number }>()
);

export const borrarCompletados = createAction(
    '[Todo Component] BorrarCompletados Todo'
);
