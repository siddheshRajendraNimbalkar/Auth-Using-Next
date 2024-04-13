"use client"

import z from "zod"
import { CardWrapper } from "./CardWrapper"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, Form, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { RegisterSchema } from "../Schemas"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { RegisterAction } from "@/actions/RegisterAction"
import { EmailVarification } from "./EmailVarification"
import { useState } from "react"


export const RegisterForm = () => {

  const [data, setdata] = useState< string | undefined>("")
  const [dataType, setdataType] = useState< string | undefined>("")

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: ""
    },
  });

  const onSubmit = (value: z.infer<typeof RegisterSchema>) => {
    RegisterAction(value)
      .then((data) => {
        if (data.success) {
          setdataType("success")
          setdata(data.success)
        }
        else if(data.error) {
          setdataType("error")
          setdata(data.error)
        }
      })
  }
  return (
    <div>
      <CardWrapper
        header="Let's Create An Account" backBtn="I have an a account." backBtnLink="/auth/login" showSocial
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="abc@xyz.com" type="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <Button type="submit" className="w-full">Create an account</Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  )
}
