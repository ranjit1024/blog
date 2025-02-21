
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Loading } from "../components/loading";
import { ShowPasswordComp } from "../components/passwordEye";
import { HidePasswordComp } from "../components/passwordEye";


export function Singup() {
    const navigate = useNavigate();
    const [passwrodToggle, setPasswrodToggle] = useState(false)

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

        <div className=" font-inter bg-slate-100 bg-opacity-50 flex flex-col  h-[100%]w-[100%] justify-center items-center gap-8">

            <p className="text-2xl font-inter text-slate-950 font-medium sha">Create Account</p>

            <div className="flex gap-3 w-[90%]">
                <div className="w-[90%] min-w-[200px] ">
                    <div className="relative ">
                        <label htmlFor="f-name" >First name</label>
                        <input type="text" className=" w-full f-name pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="First Name" />

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
                    <label htmlFor="password">Password</label>
                    <input type={passwrodToggle ? "text" : "password"} id="password" className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your password" />



                    <div className="absolute top-8 right-2">

                        {
                            passwrodToggle ? <HidePasswordComp show={passwrodToggle} setShow={setPasswrodToggle} /> : <ShowPasswordComp hide={passwrodToggle} setHide={setPasswrodToggle} />
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



// function ShowPasswordComp({ hide, setHide }: { hide: Boolean, setHide: React.Dispatch<React.SetStateAction<boolean>> }) {
//     return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 opacity-50 hover:cursor-pointer" onClick={(e) => {

//         setHide(true);
//     }}>
//         <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
//     </svg>

// }

// function HidePasswordComp({ show, setShow }: { show: Boolean, setShow: React.Dispatch<React.SetStateAction<boolean>> }) {
//     return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 opacity-50" onClick={(e) => {

//         setShow(false)
//     }}>
//         <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
//         <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//     </svg>

// }