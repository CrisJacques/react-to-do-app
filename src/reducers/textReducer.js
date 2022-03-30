import { SET_TEXT, ADD_TODO } from '../actions';

export default function textReducer(state = '', action) {
    switch (action.type){
        case SET_TEXT:
            return action.text;
        case ADD_TODO:
            return ''; /* Dessa forma estamos limpando o campo cada vez que o usuário clica no Salvar*/
        default:
            return state;
    }
}