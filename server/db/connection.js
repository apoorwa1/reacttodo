import pg from "pg";
// import db from '../config.js';
import { connectionString } from "../config.js";

const pool = new pg.Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
