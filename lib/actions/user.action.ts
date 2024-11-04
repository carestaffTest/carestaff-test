"use server";

import { connectToDatabase } from "../database";
import User from "../database/models/user.model";

export async function createUser(user: any) {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
