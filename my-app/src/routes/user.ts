import { Hono } from "hono";

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { genSaltSync, hashSync, compare, compareSync } from 'bcrypt-ts'
import { decode, verify, sign, jwt } from "hono/jwt"

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>


userRouter.post('/signup', async (c) => {
  const body = await c.req.json();
  //prisma connection logic

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  //
  console.log(body);

  //hashing password
  const salt = genSaltSync(10);
  const hash = hashSync(JSON.stringify(body.password), salt);
  //done

  //creting user
  try {
    const user = await prisma.user.create({
      data: {
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        password: hash
      }
    })

    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SECRET)
    return c.text(jwt)
  }
  catch (e) {
    console.log("data", e)
    c.status(411)
    return c.text("User already exists with this email")
  }
  //done

})

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  //accesing database
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  //done

  //performaing passwrod checking 
  try {

    const user = await prisma.user.findFirst(
      {
        where: {
          email: body.email
        }
      }
    )
    const hashPasswrord = user?.password || "";
    const userOrNot = compareSync(JSON.stringify(body.password), hashPasswrord)





    if (!user) {
      c.status(411);
      return c.text('Invaid')
    }

    // if (!userOrNot) {
    //   c.status(400)
    //   return c.json({
    //     msg: "password incorrect"
    //   })
    // }

    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SECRET)

    return c.json({
      token: jwt
    })
  }
  catch (e) {
    c.status(403);
    return c.text("User Not found")
  }

})