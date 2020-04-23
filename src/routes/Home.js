import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store";
import Todo from "../components/Todo";

function Home({ todos, addTodo }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    addTodo(text);
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>+</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { todos: state };
}
function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
