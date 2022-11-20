import { getOneTodo } from "../api/todos/[todoId]";
import dbConnect from "../../server/utils/dbConnect";

const TodoPage = ({ todo }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold" >Todo Detail Page</h1>
      <h2>Title : {todo.title}</h2>
      <p>Description : {todo.description}</p>
    </div>
  );
};

export default TodoPage;

export async function getServerSideProps(context) {
  dbConnect();
  const { query } = context;
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
