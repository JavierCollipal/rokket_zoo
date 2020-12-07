import dotenv from 'dotenv'

dotenv.config()

export const mongo_url = process.env.MONGO_URL
export const port = process.env.PORT
