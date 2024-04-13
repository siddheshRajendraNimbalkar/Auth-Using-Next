"use client"

import z from "zod"
import { CardWrapper } from "./CardWrapper"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, Form, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { LoginSchema } from "../Schemas"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { LoginAction } from "@/actions/LoginAction"
import { EmailVarification } from "./EmailVarification"
import { useState } from "react"


export const LoginForm = () => {

  const [data, setdata] = useState< string | undefined>("")
  const [dataType, setdataType] = useState< string | undefined>("")

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (value: z.infer<typeof LoginSchema>) => {
    LoginAction(value)
      .then((data) => {
        if (data.success) {
          setdataType("success")
          setdata(data.success)
        }
      })
  }
  return (
    <div>
      <CardWrapper
        header="Welcome Back" backBtn="Don't have an account?" backBtnLink="/auth/register" showSocial
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="abc@xyz.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <EmailVarification data={data} dataType={dataType} />
            <Button type="submit" className="w-full">LogIn</Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  )
}
