import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { genSaltSync, hashSync, compareSync } from 'bcrypt-ts'
import { decode, verify, sign, } from "hono/jwt"
import { JWTPayload } from "hono/utils/jwt/types";
import { Context } from "hono/jsx";
import { blogInput, updateBlogInput } from "@ranjitdas2048/common";
import { cors } from "hono/cors";
import { etag } from "hono/etag";
import { skip } from "@prisma/client/runtime/library";
import { auth } from "hono/utils/basic-auth";



export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*", async (c, next) => {
    const token = c.req.header('Authorization') || "";
    console.log(token)
    const user = await verify(token, c.env.JWT_SECRET);
    if (user) {
        c.set("jwtPayload", user.id);
        await next();

    }
    else {
        c.status(403);
        c.json({
            msg: "You are not logged in"
        })
    }

})

//added blog adding login
blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const { success } = blogInput.safeParse(body);
    if (!success) {
        c.status(403);
        return c.json({
            msg: "Ivalid Input"
        })
    }
    //prisma connection
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    //done
    //getting authroid
    const authorId = c.get("jwtPayload");

    try {
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                published: false,
                authorId: Number(authorId)
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
    const { success } = updateBlogInput.safeParse(body);
    if (!success) {
        c.status(403);
        return c.json({
            msg: "Invalid Input"
        })
    }
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

blogRouter.get('/bulk', async (c) => {


    //prisma connection
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    //


    try {
        const page = c.req.query('page') || 1;
        const limit = c.req.query('limit') || 3;
        const pageNum = parseInt(page as string, 10) || 1;
        const limitNum = parseInt(limit as string, 10) || 10;
        const skip = (pageNum - 1) * limitNum;

        // Fetch paginated blogs
        const blogs = await prisma.blog.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        email: true
                    }
                }
            },
            skip,
            take: limitNum,
            orderBy: { id: "desc" }, // Sort by newest
        });

        // Get total count for pagination
        const totalBlogs = await prisma.blog.count();

        return c.json({
            blogs,
            currentPage: pageNum,
            totalPages: Math.ceil(totalBlogs / limitNum),
            totalBlogs,
        });

    }
    catch (e) {
        console.log(e);
        c.status(403)
        return c.json({
            msg: 'something went wrong'
        })
    }
})


blogRouter.get("/:id", async (c) => {

    const id = c.req.param("id")
    //prisma connection
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    //
    try {

        const blog = await prisma.blog.findMany({
            where: {
                authorId: Number(id),
            },

        })
        return c.json({
            blog: blog,

        })

    }
    catch (err) {
        c.status(411);
        return c.json({
            msg: "somethng went wrong lkj"
        })
    }
})

