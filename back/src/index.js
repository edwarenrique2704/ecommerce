import app from './app.js';
import { connectDB } from './db.js';


connectDB()
app.listen(7000)
console.log("server on port ", 7000)