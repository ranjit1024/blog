import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { genSaltSync, hashSync, compareSync } from 'bcrypt-ts'
import { decode, verify, sign } from "hono/jwt"
import { timeout } from "hono/timeout";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();


//added blog adding login
blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    //prisma connection
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    //
    try {
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                published: false,
                authorId: 9

            }
        })

        return c.json({
            id: blog.id
        })
    }
    catch (err) {
        return c.json({
            msg: "we are facing some probolems"
        })
    }
});
//done

blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    //prisma connection
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    //
    try {
        const updateBlog = await prisma.blog.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })
        return c.json({
            id: updateBlog.id
        })
    }
    catch (err) {
        return c.json({
            msg: 'we are facing some problems'
        })
    }
})

blogRouter.get("/", (c) => {

    return c.text('this is data')
})