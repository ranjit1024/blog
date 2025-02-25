
import { AppBar } from "../components/appbar";
import { BlogsComp } from "../components/blogs";
import { useNavigate } from "react-router-dom";
export function Blog() {
    const Navigate = useNavigate()
    return <div>
        <AppBar />



        <div className="add mt-10   w-[90%] m-auto border-gray-100 flex justify-center items-center">
            <div className="flex  items-center gap-2 hover:shadow-inner transition-all duration-700 hover:cursor-text bg-gray-50 w-[70%] px-5 py-2 rounded-lg border-2 border-slate-400 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] " onClick={() => {
                Navigate("/add")
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
                </svg>

                <p className="  text-[20px] font-medium text-slate-700 font-inter " >Add New Blog</p>
            </div>
        </div>
        <div className="p-[1px] bg-slate-100 mt-10">
        </div>

        {/* <p className="m-1 font-inter font-medium">Fetured  Blogs</p> */}
        <div className="mt-3 flex justify-center items-center flex-col">
            <BlogsComp />

        </div>

    </div>
}