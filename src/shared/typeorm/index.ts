import {createConnection} from "typeorm"

createConnection()
    .then(connection => {
        console.log("Connected database!");
    })