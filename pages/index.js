import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { todos } from "../data/todos";
import TodoList from "../components/todos/TodoList";
import TodoForm from "../components/todos/AddNewTodo";
import Todo from "../server/models/todo";
import LayOute from "../containers/Layout";

export default function Home({ todos }) {
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState(todos);

  // useEffect(() => {
  //   axios
  //     .get("/api/todos")
  //     .then((res) => {
  //       console.log(res);
  //       const { todos } = res.data;
  //       console.log(todos);
  //       setData(todos);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const DeleteTodoHandler = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then(({ data }) => {
        console.log(data.todos);
        setData(data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const addTodoHandler = (e, formData) => {
    e.preventDefault();
    axios
      .post(`/api/todos`, { formData })
      .then((res) => {
        const { todos } = res.data;
        console.log(todos);
        setData(todos);
      })
      .catch((error) => console.log(error));
  };
  const completeHandler = (id) => {
    axios
      .put(`/api/todos/complete/${id}`)
      .then((res) => {
        const { todos } = res.data;
        console.log(todos);
        setData(todos);
      })
      .catch((error) => console.log(error));
    console.log(id);
  };

  // if (!data) return <div>Loading...</div>;

  return (
    <div className="container p-2 xl:max-w--screen-xl  mx-auto ">
      <section className="flex items-center justify-center">
        {/* TodoForm */}
        <TodoForm onAdd={addTodoHandler} />
        {/* TodoList */}
        <TodoList
          data={data}
          DeleteTodoHandler={DeleteTodoHandler}
          completeHandler={completeHandler}
        />
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const todos = await Todo.find({});
  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };
}
