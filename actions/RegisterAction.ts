"use server"
import z from "zod";
import { RegisterSchema } from '../Schemas/index';
import db from "../lib/db"
import bcrypt from "bcryptjs";

export const RegisterAction = async (value : z.infer<typeof RegisterSchema >) => {
    
    const validationField = RegisterSchema.safeParse(value);

    if(!validationField.success){
        return { error: "Invalid fields"}
    }

    const { name , email , password } = validationField.data;
    const existingUser = await db.user.findUnique({
        where: {
            email: email
        }
    })

    if(existingUser){
        return { error: "User already exists"}
    }

    const hashpassword = await bcrypt.hash(password,10);

    await db.user.create({
        data: {
            name,
            email,
            password: hashpassword,
        }
    })

    return { success : "Email Send"}
}