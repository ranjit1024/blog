import { Hono } from "hono";

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { genSaltSync, hashSync, compare, compareSync } from 'bcrypt-ts'
import { sign } from "hono/jwt"
import { signupInput, singinInput, } from "@ranjitdas2048/common";
import { cors } from "hono/cors";


export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>


userRouter.use('/*', cors());

userRouter.post('/signup', async (c) => {
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(403);
    return c.json({
      msg: "Invalid Input"
    })
  }
  //zod validation

  //prisma connection logic

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  //
  console.log(body);

  //hashing password
  const salt = genSaltSync(10);
  const hash = hashSync(body.password, salt);
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
      id: user.id,
      email: user.email
    }, c.env.JWT_SECRET)
    return c.json({
      token: jwt
    })
  }
  catch (e) {
    console.log("data", e)
    c.status(409)
    return c.text("User already exists with this email")
  }
  //done

})

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  //zod validation
  const { success } = singinInput.safeParse(body)
  if (!success) {
    c.status(403);
    return c.json({
      msg: 'Invaid Input'
    })
  };;;;
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
    const userOrNot = compareSync(body.password, hashPasswrord)





    if (!user || !userOrNot) {
      c.status(401);
      return c.text('Invaid')
    }


    const jwt = await sign({
      id: user.id,
      email: user.email
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