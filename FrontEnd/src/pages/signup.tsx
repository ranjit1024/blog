
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Loading } from "../components/loading";
// import { Loading } from "../components/loading.tsx";

export function Singup() {
    const navigate = useNavigate();
    const showPassword = useState(false)

    return <div className="grid grid-cols-[55%,45%] h-[100vh]">

        <div className="inset-0">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [&>div]:absolute [&>div]:left-0 [&>div]:right-0 [&>div]:top-0 [&>div]:-z-10 [&>div]:m-auto [&>div]:h-[310px] [&>div]:w-[310px] [&>div]:rounded-full [&>div]:bg-fuchsia-400 [&>div]:opacity-20 [&>div]:blur-[100px]">
                <div></div>
            </div>

            <div className="font-inter  w-[95%]  h-[100%] font-[500] text-slate-700
             text-3xl flex justify-center items-center m-auto flex-col" >
                <div className="text-shadow:_7px_1px_6px_#5a5b5e text-center font-semibold">
                    “Your intuition knows what to write, so get out of the way.”
                </div>

                <div className="mt-10 text-blue-900 font-[400] text-right ">
                    <p>
                        —Ray Bradbury
                    </p>
                </div>


            </div>

        </div>

        <div className="bg-gradient-to-r from-slate-50 to-slate-100 font-inter flex flex-col  h-[100%]w-[100%] justify-center items-center gap-6">

            <p className="text-2xl font-inter text-slate-950 font-medium ">Create Account</p>

            <div className="flex gap-3 w-[90%]">
                <div className="w-[90%] min-w-[200px] ">
                    <div className="relative ">
                        <label htmlFor="f-name" >First name</label>
                        <input type="text" className="w-full f-name pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="First Name" />

                    </div>
                </div>



                <div className="w-[90%]  min-w-[200px]">
                    <div className="relative">
                        <label htmlFor="input" >Last Name</label>
                        <input type="text" className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Last Name" />

                    </div>
                </div>
            </div>


            <div className="w-[90%] min-w-[200px]">
                <div className="relative">
                    <label htmlFor="input" >Email</label>
                    <input type="text" className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="example@gmail.com" />
                </div>
            </div>






            <div className="w-[90%] min-w-[200px]">
                <div className="relative">
                    <label htmlFor="iput">Password</label>
                    <input type="password" id="password" className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your password" />

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="absolute size-6 top-8 right-2 opacity-30 hover:cursor-pointer" onClick={(e) => {
                        console.log(document.getElementById("password")?.setAttribute("type", "text"))
                    }}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>


                    <p className="flex items-start mt-2 text-xs text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1.5">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                        </svg>

                        Use at least 8 characters, one uppercase, one lowercase and one number.
                    </p>



                </div>
            </div>


            <div className="w-[90%]">


                <button type="button" onClick={(e) => {

                }} className="text-white w-[100%] bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
                    Sign Up
                </button>
                <div className="text-slate-900 font-[500] text-center mt-1.5">
                    already have an account? <span className="text-blue-600 font-semibold hover:cursor-pointer hover:text-blue-950" onClick={(e) => {
                        navigate("/signin")
                    }}>Sing In</span>
                </div>
            </div>



        </div>


    </div >
}