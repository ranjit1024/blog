import z from "zod";

const signupInput = z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
})

const singinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

const blogInput = z.object({
    title: z.string(),
    content: z.string()
})

const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})
export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof singinInput>
export type BlogInput = z.infer<typeof blogInput>
export type UpdateInput = z.infer<typeof updateBlogInput>
