
import { AppBar } from "../components/appbar";
import { BlogsComp } from "../components/blogs";
import { useNavigate } from "react-router-dom";


import { useBlogs } from "../state/atoms/state";
import { BlogScalaton } from "../components/scalaton";
import { jwtDecode, JwtPayload } from "jwt-decode";




export function Blog() {
    const Navigate = useNavigate();

    return <div>

        <AppBar />

        <div className="add mt-10   w-[70%] m-auto border-gray-100 flex justify-center items-center">
            <div className="flex w-[100%]  items-center gap-2 hover:shadow-inner transition-all duration-700 hover:cursor-text bg-gray-50 px-5 py-2 rounded-lg border-2 border-slate-400 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] " onClick={() => {
                Navigate("/add");

            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
                </svg>

                <p className="  text-[20px] font-medium text-slate-700 font-inter " >Add New Blog</p>
            </div>
        </div>
        <div className="p-[1px] bg-slate-100 mt-10">
        </div>


        <div className="mt-3 flex justify-center items-center flex-col w-[100%]">
            <AllBlogs></AllBlogs>
        </div>

    </div>

}


function AllBlogs() {
    const { loading, blogs } = useBlogs();
    const token = localStorage.getItem('token');
    let email = "";
    if (token) {
        const decode = jwtDecode(token) as JwtPayload & { email: string }
        email = decode.email;
    }

    if (!loading) {
        return <div className="w-[90%]">
            <BlogScalaton></BlogScalaton>
            <BlogScalaton></BlogScalaton>
            <BlogScalaton></BlogScalaton>

        </div>
    }
    return <div className="w-[100%] flex justify-center flex-col items-center">

        {
            blogs && blogs.map(blog => <BlogsComp email={email} title={blog.title} descripition={blog.content} />)
        }

    </div>
}