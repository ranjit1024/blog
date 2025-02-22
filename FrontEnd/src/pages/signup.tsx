
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import { ShowPasswordComp } from "../components/passwordEye";
import { HidePasswordComp } from "../components/passwordEye";
import SecondSide, { } from "../components/second";
import { BlogingComp } from "../components/blog";
import { BlogingComp2 } from "../components/blog";

export function Singup() {
    const navigate = useNavigate();
    const [passwrodToggle, setPasswrodToggle] = useState(false)

    return <div className="grid grid-cols-[50%,50%] h-[100%] w-[100%] overflow-hidden">
        <div className="flex flex-col relative justify-start items-center bg-gray-200 bg-opacity-30 ">
            <div className="relative left-32">
                <SecondSide />
            </div>

            <div className=" absolute top-10 left-2 blog-comp z-10 ">
                <BlogingComp></BlogingComp>
            </div>

            <div className="flex justify-end absolute ml-10  bottom-10 blog-comp z-10 ">
                <BlogingComp2></BlogingComp2>
            </div>



        </div>


        <div className=" font-inter bg-white z-10 flex flex-col h-screen w-[100%] justify-center items-center gap-8">

            <p className="text-2xl font-inter text-slate-950 font-medium sha">Create Account</p>

            <div className="flex gap-3 w-[90%]">
                <div className="w-[90%] min-w-[200px] ">
                    <div className="relative ">
                        <label htmlFor="f-name" >First name</label>
                        <input type="text" id="f-name" className=" w-full f-name pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="First Name" />

                    </div>
                </div>



                <div className="w-[90%]  min-w-[200px]">
                    <div className="relative">
                        <label htmlFor="lname" >Last Name</label>
                        <input type="text" id="lname" className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Last Name" />

                    </div>
                </div>
            </div>


            <div className="w-[90%] min-w-[200px]">
                <div className="relative">
                    <label htmlFor="email" >Email</label>
                    <input type="text" id="email" className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="example@gmail.com" />
                </div>
            </div>






            <div className="w-[90%] min-w-[200px]">
                <div className="relative">
                    <label htmlFor="password">Password</label>
                    <input type={passwrodToggle ? "text" : "password"} id="password" className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your password" />



                    <div className="absolute top-8 right-2">

                        {
                            passwrodToggle ? <HidePasswordComp setShow={setPasswrodToggle} /> : <ShowPasswordComp setHide={setPasswrodToggle} />
                        }

                    </div>


                    <p className="flex items-start mt-3 text-xs text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1.5">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                        </svg>

                        Use at least 8 characters, one uppercase, one lowercase and one number.
                    </p>



                </div>
            </div>


            <div className="w-[90%]">


                <button type="button" onClick={() => {

                }} className="text-white w-[100%] bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
                    Sign Up
                </button>
                <div className="text-slate-900 font-[500] text-center mt-1.5">
                    already have an account? <span className="text-blue-600 font-semibold hover:cursor-pointer hover:text-blue-950" onClick={() => {
                        navigate("/signin")
                    }}  >Sing In</span>
                </div>
            </div>

        </div>


    </div >
}



