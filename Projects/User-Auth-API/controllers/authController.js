import pool from "../db.js"
import bcrypt from "bcrypt"

export const signupUser = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const result = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, hashedPassword]
        )
        res.status(201).json({ message: "Signup successful!", user: result.rows[0] })  
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1', [email]
        )
        if (result.rows.length === 0) return res.status(400).json({ error: 'User not found' })
        
        const user = result.rows[0]
        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) return res.status(400).json({ error: 'Invalid password' })

        res.json({ message: 'Login successful!', user: { id: user.id, name: user.name, email: user.email }})
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}