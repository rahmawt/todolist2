import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../app/reducer";
import { GoPlus } from "react-icons/go";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState(" ");

  const add = () => {
    if (todo === "") {
      alert("input is empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random()*1000),
        item: todo,
        completed: false,
      });
      setTodo(" ")
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="box is-mobile">
      <div className="column">
        <h1 class="has-text-centered is-size-2">To do list</h1>
      </div>
            
            <div className="column is-multiline is-mobile">
                <div className="column">
                    <input
                    className="input is-primary is-size-5"
                    type="text"
                    onChange={(e) => handleChange(e)}
                    placeholder="What to do"
                    value={todo}
                    />
                </div>
                <div className="column">
                    <button
                    className="button is-success"
                    onClick={() => add()}>
                    <GoPlus />
                    </button>
                </div>
        </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
