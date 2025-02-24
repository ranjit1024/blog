import { useState } from "react";
import { AppBar } from "../components/appbar";
import { BlogInput } from "@ranjitdas2048/common";
import axios, { isAxiosError } from "axios";
import Loading from "../components/loading";


export function AddBlog() {
    const [Bloginput, setBlogInput] = useState<BlogInput>({
        title: "",
        content: ""
    });

    const [isLoading, setIsloading] = useState(false);

    const api = axios.create({
        baseURL: 'http://127.0.0.1:8787',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(localStorage.getItem("token") || "").token
        }
    });


    return <div className="flex flex-col w-[100%] ">
        <AppBar></AppBar>
        <div className="w-[100%] flex flex-col items-center">
            <p className="font-inter text-center my-10 text-2xl font-[500] ">Add New Blog</p>

            <div className="w-[80%] flex gap-10  flex-col ">

                <div className="relative w-full min-w-[200px]">
                    <input
                        className="peer h-full min-h-[1px] w-full resize-none rounded-[7px] border border-gray-500 border-t-transparent bg-transparent px-3 py-2.5    text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-gray-500 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 font-inter text-lg font-[500]"
                        placeholder=" " onChange={(e) => {
                            setBlogInput({
                                ...Bloginput,
                                title: e.target.value
                            })
                        }}></input>
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px]  leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 font-inter font-medium">
                        Write Blog Title....
                    </label>
                </div>

                <div className="relative w-full min-w-[200px]">
                    <textarea
                        className="peer h-full min-h-[200px] w-full resize-none rounded-[7px] border border-gray-500 border-t-transparent bg-transparent px-3 py-2.5  text-sm  text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-gray-500 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 font-inter text-[1rem]"
                        placeholder=" "
                        onChange={(e) => {
                            setBlogInput({
                                ...Bloginput,
                                content: e.target.value
                            })
                        }}></textarea>
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px]  leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 font-inter font-medium">
                        Write Blog Descripition....
                    </label>
                </div>

                <div className="flex justify-end items-end ">
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center -mt-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={async () => {
                        try {
                            setIsloading(true);

                            const response = await api.post("/api/v1/blog", Bloginput);
                            (response?.status)
                            setIsloading(false);
                        }
                        catch (e) {
                            if (isAxiosError(e)) {
                                console.log(e.request?.status);
                                setIsloading(false)
                            }
                            setIsloading(false)
                        }
                    }}>Pubish</button>

                </div>
            </div>

        </div>
        {

            isLoading ? <Loading></Loading> : null
        }
    </div>
}

