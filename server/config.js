// this environment variable gets handed to us by heroku if we use the postgres add-on
export const connectionString = process.env.DATABASE_URL;
// export const connectionString =
//   "postgres://hjrdhatiziidgj:3608d8259c860ba42e08d0c5fe5ebd42f531a5901b013c30ec153228a99c79ee@ec2-3-225-213-67.compute-1.amazonaws.com:5432/d6ab1uuj2j96v2";
console.log(connectionString);
