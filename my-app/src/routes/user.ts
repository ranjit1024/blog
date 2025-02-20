import { Hono } from "hono";

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { genSaltSync, hashSync, compareSync } from 'bcrypt-ts'
import { decode, verify, sign } from "hono/jwt"

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

    const signup = await prisma.user.findFirst(
      {
        where: {
          email: body.email,
        }
      }
    )
    let hashPasswrord = signup?.password;
    let userOrNot = compareSync(body.password, hashPasswrord) // not errro because of type checing it gives error
    return c.json(userOrNot)
    //done
  } catch (e) {
    c.status(403);
    return c.text("User Not found")
  }

})