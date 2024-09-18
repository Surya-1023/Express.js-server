import { createConnection } from "mysql";

const con = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'resort',
});

con.connect((err) => {
    if (err) {
        console.error("error found" + err.stack);
        return;
    }
    console.log("connection ok")
});

export default con;

