import { app } from "./app.js";
import { connectDB } from "./db/connection.db.js";


connectDB().then(()=> {
    app.listen(8080, () => {
        console.log('Server is listening on port 8080')
    })
}).catch((error) => {
    console.log('Unable to start the server')
})
