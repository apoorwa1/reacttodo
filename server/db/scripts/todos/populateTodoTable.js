import query from "../../connection.js";
//import db from "../../connection.js";
//import todo from "../../../data";

const todo = [
  {
    id: 1,
    description: "wake up",
  },
  {
    id: 2,
    description: "make tea",
  },
  {
    id: 3,
    description: "wash plates",
  },
  {
    id: 4,
    description: "attend sessions",
  },
];
//const sqlString = `INSERT INTO todo (description) VALUES ($1);`;
async function populateTodoTable() {
  for (let i = 0; i < todo.length; i++) {
    const description = todo[i].description;

    const res = await query(`INSERT INTO todo (description) VALUES ($1)`, [
      description,
    ]);
    console.log("todo table populated", res);
  }
}

// async function populateTodoTable() {
//   for (let i = 0; i < todo.length; i++) {
//     const { description } = todo[i];
//     const response = await db.query(sqlString, [description]);
//     console.log(response);
//   }
// }
populateTodoTable();
