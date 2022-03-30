import query from "../../connection.js";

async function createTodoTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS todo (todo_id SERIAL PRIMARY KEY, description VARCHAR(255));`
  );
  console.log("Todo Table created", res);
}
createTodoTable();
