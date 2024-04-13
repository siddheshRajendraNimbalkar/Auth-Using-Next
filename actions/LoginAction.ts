"use server"
import z from "zod";
import { LoginSchema } from '../Schemas/index';
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const LoginAction = async (value : z.infer<typeof LoginSchema >) => {
    console.log(value)
    const validationField = LoginSchema.safeParse(value);

    if(!validationField.success){
        return { error: "Invalid fields"}
    }

    const { email,password } = validationField.data
    try {
        await signIn("credentials",{
            email,
            password,
            redirectTo: "/"
        })
    }catch(error){
        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return { error: "Invalid credentials"}
                default:
                    return { error: "Something went wrong"}
            }
        }
        throw error;
    }
}