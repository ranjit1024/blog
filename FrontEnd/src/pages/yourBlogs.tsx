import { jwtDecode, JwtPayload } from "jwt-decode";
import { AppBar } from "../components/appbar";
import { BlogsComp } from "../components/blogs";
import { UseYourBlogs } from "../state/atoms/state";
import { BlogScalaton } from "../components/scalaton";

export function YourBlogs() {
    const token = localStorage.getItem('token');
    const { loading, blogs } = UseYourBlogs();
    let userName = "";
    if (token) {
        const decode = jwtDecode(token) as JwtPayload & { email: string }
        let email = decode.email;
        userName = email.split("@")[0];

    }
    console.log(blogs)

    if (!loading) {

        return <div className="w-[100%]">
            <AppBar />
            <p className="font-inter my-4 ml-1  drop-shadow-lg text-4xl font-[500] ">Good {`morning`} {`${userName}`}</p>

            <BlogScalaton></BlogScalaton>
            <BlogScalaton></BlogScalaton>
            <BlogScalaton></BlogScalaton>

        </div>
    }
    return <div>
        <AppBar />
        <p className="font-inter my-4 ml-1  drop-shadow-lg text-4xl font-[500] ">Good {`morning`} {`${userName}`}</p>
        <div className="w-[100%] flex justify-center flex-col items-center">

            {
                blogs && blogs.map(blog => <BlogsComp email={"lkj"} title={blog.title} descripition={blog.content} />)
            }

        </div>
    </div>

}