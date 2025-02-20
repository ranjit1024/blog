
import { useNavigate } from "react-router-dom"


export function SignIn() {
    const navigate = useNavigate();

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








            <div className="w-[90%] min-w-[200px]">
                <div className="relative">
                    <label htmlFor="input" >Email</label>
                    <input type="text" className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="example@gmail.com" />

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-5 h-6 top-8 right-2.5 text-slate-600">
                        <path d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"></path>
                    </svg>
                </div>
            </div>






            <div className="w-[90%] min-w-[200px]">
                <div className="relative">
                    <label htmlFor="iput">Password</label>
                    <input type="password" className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your password" />
                    <p className="flex items-start mt-2 text-xs text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1.5">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                        </svg>

                        Use at least 8 characters, one uppercase, one lowercase and one number.
                    </p>



                </div>
            </div>


            <div className="w-[90%]">


                <button type="button" className="text-white w-[100%] bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
                    Sign In
                </button>
                <div className="text-slate-900 font-[500] text-center mt-1.5">
                    Don't have Account? <span onClick={(e) => {
                        navigate("/")
                    }} className="text-blue-600 font-semibold hover:cursor-pointer hover:text-blue-950">Sing Up</span>
                </div>
            </div>





        </div>
    </div >
}