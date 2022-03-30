import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setText, addTodo } from '../actions'; /* Não preciso colocar mais nada pq já tem o index.js dentro dessa pasta*/

const TodoForm = ({ text, setText, addTodo }) => {   
  return(
      <form 
        className="row"
        onSubmit={(e) => {
        e.preventDefault(); /* Inibe o comportamento default do submit do formulário, que é recarregar a página. Isso é bastante comum de fazer em formulários no React */
        addTodo(text);
        }}>
          <div className="input-field col s10">
            <input
              id="todo-input" 
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}/>
              <label htmlFor="todo-input">Digite um novo todo...</label>
          </div>
          <div className="input-field col s2"> 
            <button 
            className="btn waves-effect waves-light" >
              Salvar
            </button>
          </div>
          
           
          
      </form>
  );        
}

function mapStateToProps(state) {
  return {
    text: state.text
  }
}

const mapDispatchToProps = { setText, addTodo };/*Essa é a versão curta */
/* Esta é a versão longa: */
/*function mapDispatchToProps(dispatch){
  return{
    setText: text => dispatch(setText(text))
  }
}*/
/* Dá para usar a versão curta quando os parâmetros da arrow function serão passados para o dispatch em mesmo número e na mesma ordem */

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);