import query from "../db/connection.js";

//get all the todos to render in client side
export async function getAllTodos() {
  const result = await query(`SELECT * FROM todo;`);
  return result.rows;
}

export async function addTodo(description) {
  const result = await query(`INSERT INTO todo (description) VALUES ($1);`, [
    description,
  ]);
  return result.rows;
}

export async function updateTodoById(id, description) {
  const data = await query(
    `UPDATE todo SET description = $1 WHERE todo_id = $2;`,
    [description, id]
  );
  return data.rows;
}

export async function deleteTodoById(id) {
  const data = await query(`DELETE FROM todo WHERE todo_id = $1 returning *;`, [
    id,
  ]);
  return data.rows;
}
