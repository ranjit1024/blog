import { jwtDecode, JwtPayload } from "jwt-decode";
import { AppBar } from "../components/appbar";
import { UseYourBlogs } from "../state/atoms/state";
import { BlogScalaton } from "../components/scalaton";
import { Usercomp } from "../components/userBlogs";

export function YourBlogs() {
    const token = localStorage.getItem('token');
    const { blogs, loading } = UseYourBlogs();
    let userName = "";

    if (token) {
        const decode = jwtDecode(token) as JwtPayload & { email: string }
        let email = decode.email;
        userName = email.split("@")[0];

    }
    
    let greeting = "";

    const date = new Date();
    const grettingFactor : number = Number(date.toLocaleTimeString().split(':')[0]);

    if(grettingFactor < 12){
        greeting = "Morning"
    }
    else if(grettingFactor > 12 && grettingFactor < 6 ){
        greeting = "Afternoon"
    }
    else{
        greeting = "Evening"
    }


    if (!loading) {

        return <div className="w-[100%]">
            <AppBar />
            <p className="font-inter my-5 ml-12  drop-shadow-lg text-4xl font-[500] max-md:text-center ">Good {`${greeting}`} {`${userName}`}</p>
            <BlogScalaton></BlogScalaton>
            <BlogScalaton></BlogScalaton>
            <BlogScalaton></BlogScalaton>

        </div>
    }
    return <div>
        <AppBar />
        <p className="font-inter my-5 ml-12  drop-shadow-lg text-4xl font-[500] max-md:text-center dark:text-green-950 ">Good {`${greeting}`} {`${userName}`}</p>
        <div className="w-[100%] flex justify-center flex-col items-center">

            {
                blogs && blogs.map(blog => <Usercomp key={blog.id} email={userName} title={blog.title} id={blog.id} descripition={blog.content} date={String(blog.publishdate).split('T')[0]} />)
            }

        </div>
    </div>

}