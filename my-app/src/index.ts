import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { genSaltSync, hashSync, compareSync } from 'bcrypt-ts'
import { decode, verify, sign } from "hono/jwt"


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>



app.post('/api/v1/user/signup', async (c) => {
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

app.post("/api/v1/user/signin", async (c) => {
  const body = await c.req.json();
  //accesing database
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  //done

  try {

    const signup = await prisma.user.findFirst(
      {
        where: {
          email: body.email,
        }
      }
    )
    return c.json(signup?.password)
  } catch (e) {
    console.log("not found")
  }
  return c.text("Fsdf")
})
export default app
