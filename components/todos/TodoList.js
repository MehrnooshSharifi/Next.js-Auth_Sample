import { todos } from "../../data/todos";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Link from "next/link";
const TodoList = ({ data, DeleteTodoHandler , completeHandler }) => {
  return (
    <div className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl">
      {data.map((todo) => {
        return (
          <div
            key={todo.id}
            className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl "
          >
            <Link href={`/todos/${todo._id}`}>
              <span className={`${todo.isCompleted ? "line-through" : ""}`}>
                {todo.title}
              </span>
            </Link>
            <div className="flex gap-x-3 items-center">
              <button className="" onClick={()=>completeHandler(todo._id)}>
                {todo.isCompleted ? (
                  <FaCheckCircle className="w-6 h-6 fill-green-400 " />
                ) : (
                  <span className="w-5 h-5 block border-2 border-gray-500 rounded-full "></span>
                )}
              </button>
              <button onClick={() => DeleteTodoHandler(todo._id)} className="">
                <FaTrashAlt className="w-6 h-6 fill-red-400 " />
              </button>
              <Link href={`/todos/edit/${todo._id}`}>
                <MdEdit className="w-6 h-6 fill-blue-400 " />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
