import React from "react";
import { useRef } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline, MdFileDownloadDone } from "react-icons/md";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <div className="box is-60x60">
      <li key={item.id} className="card">
          <div className="card-content">
            <div className="content is-size-4">
              
              <textarea
                className="textarea is-small is-size-6"
                ref={inputRef}
                disabled={inputRef}
                defaultValue={item.item}
                onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
              />
            </div>
            
            <div className="card-footer">
              <button 
              className="button is-success"
              onClick={() => changeFocus()}>
                <CiEdit />
              </button>
              {item.completed === false && (
                <button 
              className="button is-success"
              onClick={() => completeTodo(item.id)}>
                <MdFileDownloadDone />
              </button>)}
              <button 
              className="button is-success"
              onClick={() => removeTodo(item.id)}>
                <MdDeleteOutline />
              </button>
            </div>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
