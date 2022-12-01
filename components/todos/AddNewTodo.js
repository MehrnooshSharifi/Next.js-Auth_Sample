import axios from "axios";
import { todos } from "../../data/todos";
import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });
  const [isShow, setIsShow] = useState(false);
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  if (!isShow) {
    return (
      <div className="">
        <button
          onClick={() => setIsShow(true)}
          className=" font-thin text-xs md:text-base md:w-full md:py-2 md:px-8 md:font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out "
        >
          Add New Todo?
        </button>
      </div>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        onAdd(e,formData);
      }}
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
      <div className="mb-8">
        <label className="text-gray-600 mb-1 block" htmlFor="todo-description">
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
      <div className="flex items-center gap-x-4">
        <button
          onClick={() => setIsShow(false)}
          type="button"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
        >
          Cancle
        </button>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
        >
          Add New Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
