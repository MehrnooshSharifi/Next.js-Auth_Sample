import { getOneTodo } from "../../api/todos/[todoId]";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const TodoPage = ({ todo }) => {
  const [checked , setChecked] = useState(todo.isCompleted)
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: todo.title,
    description: todo.description,
    isCompleted: todo.isCompleted,
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/api/todos/${router.query.todoId}`, { todo: {...formData , isCompleted:checked} })
      .then((res) => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center  mt-10 " >
      <form
        onSubmit={submitHandler}
        className=" w-full mr-7 max-w-md bg-white p-2 md:p-4 rounded-xl"
      >
        <div className="mb-4">
          <label className="text-gray-600 mb-1 block" htmlFor="todo-title">
            Title
          </label>
          <input
            name="title"
            placeholder="todo title..."
            id="todo-title"
            className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 focus:border-none w-full block transition duration-300 ease-out"
            type="text"
            value={formData.title}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-4">
          <label
            className="text-gray-600 mb-1 block"
            htmlFor="todo-description"
          >
            Description
          </label>
          <textarea
            name="description"
            placeholder="todo title..."
            id="todo-description"
            className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 focus:border-none w-full block transition duration-300 ease-out"
            type="text"
            value={formData.description}
            onChange={changeHandler}
          />
        </div>
        <div  className="mb-4">
          <input type="checkBox" name="checked" id="checked" checked={checked} onChange={()=>setChecked(!checked)} />
          <label htmlFor="checked" >Complete todo?</label>
        </div>
        <div className="flex items-center gap-x-4">
          <button
            onClick={() => router.push("/")}
            type="button"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
          >
            Back
          </button>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
          >
            Edit Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoPage;

export async function getServerSideProps(context) {
  const { query } = context;
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
