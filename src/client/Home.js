import React from "react";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import "../App.css";
import { useQuery, useMutation } from "@apollo/client";
import { READ_TODOS, CREATE_TODO, REMOVE_TODO, UPDATE_TODO } from "./Graphql";

function Home() {
  let input;
  const { data, loading, error } = useQuery(READ_TODOS);
  const [createTodo] = useMutation(CREATE_TODO);
  const [deleteTodo] = useMutation(REMOVE_TODO);
  const [updateTodo] = useMutation(UPDATE_TODO);
  // const client = useApolloClient();


  // if (loading) return <p>loading...</p>;
  // if (error) return <p>ERROR</p>;
  // if (!data) return <p>Not found</p>;

  const addTodo = (e) => {
    e.preventDefault();
    createTodo({ variables: { text: input.value } });
    input.value = "";
    window.location.reload();
  }
  

  return (
    <div className="App-header">
      <h3>Create New Todo</h3>
      <form onSubmit={addTodo}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter todo"
          ref={(node) => {
            input = node;
          }}
        ></input>
        <button className="btn btn-primary px-5 my-2 App" type="submit">
          Submit
        </button>
      </form>
      <h2>Todo List</h2>
      {/* <ul>
        {data.todos.map((todo) => (
          <li key={todo.id} className="w-100">
            <span className={todo.completed ? "done" : "pending"}>
              {todo.text}
            </span>
            <button
              className="btn btn-sm btn-danger rounded-circle float-right"
              style={{ marginLeft: 10 }}
              onClick={() => {
                deleteTodo({ variables: { id: todo.id } });
                window.location.reload();
              }}
            >
              X
            </button>
            <button
              className={`btn btn-sm float-right ${
                todo.completed ? "btn-success" : "btn-info"
              }`}
              onClick={() => {
                updateTodo({ variables: { id: todo.id } });
                window.location.reload();
              }}
            >
              {todo.completed ? (
                <Tippy placement="left"
                  content={<span style={{color: 'orange'}}>Mark as Not completed</span>}>
                  <span>Completed</span>
                </Tippy>
              ) : (
                <Tippy content="Mark as completed" placement="left" className="tooltip-color">
                  <span>Not completed</span>
                </Tippy>
              )}
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Home;
