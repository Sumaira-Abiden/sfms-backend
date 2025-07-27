import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import Admin from './models/Admin.js'

dotenv.config()

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)

    const username = 'admin' // 👈 Change if you want
    const password = 'admin123' // 👈 Change if you want

    const hashedPassword = await bcrypt.hash(password, 10)

    const adminExists = await Admin.findOne({ username })

    if (adminExists) {
      console.log('⚠️ Admin already exists.')
    } else {
      await Admin.create({ username, password: hashedPassword })
      console.log('Admin created successfully.')
    }

    mongoose.disconnect()
  } catch (err) {
    console.error(' Error creating admin:', err)
  }
}

createAdmin()
