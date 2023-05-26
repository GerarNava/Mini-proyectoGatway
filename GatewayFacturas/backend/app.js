import express from "express";
import cors from "cors";
import db from "./database/db.js";
import billinRoute from "./routes/BillingsRoutes.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use('/facturas', billinRoute)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

app.listen(8003, ()=>{
    console.log('Server UP running in http://localhost:8003/')
})