import mongoose from "mongoose";

import { env } from "~/env.mjs";

export async function connectDB() {
  try {
    const { connection } = await mongoose.connect(env.DATABASE_CONNECTION);
    console.log(`Database connected: ${connection.host}`);
  } catch (error) {
    console.log(error);
  }
}
