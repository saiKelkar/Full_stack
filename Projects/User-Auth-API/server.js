import express, { application } from "express"
import authRoutes from "./routes/authRoutes.js"

const app = express()
const port = 3000

app.use(express.json())
app.use('/auth', authRoutes)

app.get('/', (req, res) => {
    res.send("API running")
})

app.listen(port, () => {
    console.log(`Starting port at ${port}`)
})