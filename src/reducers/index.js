import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import textReducer from './textReducer';

/* Não é uma boa prática termos apenas um reducer que cuida de todos os states, principalmente se a aplicação tiver muitos states */
/* Ao invés disso, é melhor ter um reducer para cada pedacinho de state e juntar tudo num reducer só usando o combineReducers, do Redux */
export default combineReducers({
    todos: todosReducer,
    text: textReducer
})
