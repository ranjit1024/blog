
import { AppBar } from "../components/appbar";
import { BlogsComp } from "../components/blogs";
import { useNavigate } from "react-router-dom";

import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchBlogs } from "../state/atoms/state";
import { BlogScalaton } from "../components/scalaton";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { PROD } from "../config";
const api = axios.create({
    baseURL: `${PROD}`,

    headers: {
        'Content-Type': 'application/json',
    }
});

// adding dynmic headers
api.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem("token") || "{}").token;
    if (token) {
        config.headers.Authorization = token;
    }
    return config
})


export function Blog() {
    const Navigate = useNavigate();

    return <div>

        <AppBar />

        <div className="add mt-10   w-[70%] m-auto border-gray-100 flex justify-center items-center">
            <div className="flex w-[100%]  items-center gap-2 hover:shadow-inner transition-all duration-700 hover:cursor-text hover:border-green-300 bg-gray-50 px-5 py-2 rounded-lg border-2 border-slate-200 shadow-sm] " onClick={() => {
                Navigate("/add");

            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
                </svg>

                <p className="  text-[20px] font-medium text-slate-700 font-inter " >Add New Blog</p>
            </div>
        </div>
        <div className="p-[0.1px] bg-slate-100 mt-10">
        </div>




        <div className="mt-3 flex justify-center items-center flex-col w-[100%]">
            <AllBlogs></AllBlogs>
        </div>

    </div>

}


function AllBlogs() {

    const { data, status, error, fetchNextPage } = useInfiniteQuery({
        queryKey: ['blogs'],
        queryFn: fetchBlogs,
        initialPageParam: 3,
        getNextPageParam: (lastPage) => lastPage.nextPage

    })

    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [fetchNextPage, inView]);


    if (status === "pending") {
        return <div className="w-[100%]">
            <BlogScalaton></BlogScalaton>
            <BlogScalaton></BlogScalaton>
            <BlogScalaton></BlogScalaton>
        </div>
    }
    if (status === "error") {
        return <div>
            {error.message}
        </div>
    }
    if (status === "success") {
        return <div className="w-[100%]">
            {
                data.pages.map((page) => {
                    return <div className=" flex justify-center flex-col items-center">
                        {
                            page.blogs.map((item) => {
                                console.log(item.author.email)
                                return <BlogsComp email={item.author.email} title={item.title} descripition={item.content}></BlogsComp>
                            })
                        }
                    </div>
                })
            }
            <div ref={ref}></div>
        </div >
    }


}