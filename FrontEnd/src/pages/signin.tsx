
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import { ShowPasswordComp } from "../components/passwordEye";
import { HidePasswordComp } from "../components/passwordEye";
import SecondSide, { } from "../components/second";
import { BlogingComp } from "../components/blog";
import { BlogingComp2 } from "../components/blog";
import axios, { isAxiosError } from "axios";
import { SigninInput, } from "@ranjitdas2048/common";
import { TostDanger } from "../components/toast";
import Loading from "../components/loading";
import { PROD } from "../config";


export function SignIn() {
    const navigate = useNavigate();
    const [passwrodToggle, setPasswrodToggle] = useState(false)
    const [isEmpty, setisEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [validInputs, setValidInputs] = useState(false);
    const [isNotUser, setIsnotUser] = useState(false);

    const [signInBody, setSigninbody] = useState<SigninInput>({
        email: "",
        password: ""
    });


    const api = axios.create({
        baseURL: `${PROD}`,
        headers: {
            'Content-Type': 'application/json',

        }
    });



    return <div className="grid grid-cols-[50%,50%] h-[100%] w-[100%] overflow-hidden max-md:grid-cols-1 ">

        <div className="flex max-md:hidden flex-col relative justify-start items-center bg-gray-200 bg-opacity-30 ">
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


        <div className=" font-inter max-md:h-[100vh] max-md:w[100vw] bg-white z-10 flex flex-col h-screen w-[100%] justify-center items-center gap-8">

            <p className="text-2xl font-inter text-slate-950 font-medium sha">Sign In</p>




            <div className="w-[90%] min-w-[200px]">
                <div className="relative">
                    <label htmlFor="email" >Email</label>
                    <input type="text" id="email" className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="example@gmail.com"
                        onChange={(e) => {
                            setSigninbody({
                                ...signInBody,
                                email: e.target.value
                            })
                        }} />
                </div>
            </div>






            <div className="w-[90%] min-w-[200px]">
                <div className="relative">
                    <label htmlFor="password">Password</label>
                    <input type={passwrodToggle ? "text" : "password"} id="password" className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your password"
                        onChange={(e) => {
                            setSigninbody({
                                ...signInBody,
                                password: e.target.value
                            })
                        }}
                    />



                    <div className="absolute top-8 right-2">

                        {
                            passwrodToggle ? <HidePasswordComp setShow={setPasswrodToggle} /> : <ShowPasswordComp setHide={setPasswrodToggle} />
                        }

                    </div>


                    <p className="flex items-start mt-3 text-xs text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1.5">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                        </svg>

                        Use at least 6 characters.
                    </p>



                </div>
            </div>


            <div className="w-[90%]">


                <button type="button" onClick={async () => {
                    if (signInBody.email == "" || signInBody.password == "") {
                        setisEmpty(true);
                        setTimeout(() => {
                            setisEmpty(false)
                        }, 3000)
                        return;
                    }
                    try {
                        setIsLoading(true)
                        const response = await api.post("/api/v1/user/signin",
                            signInBody
                        );
                        console.log(response.status)
                        if (response.status === 200) {
                            localStorage.setItem("token", JSON.stringify(response.data));
                            navigate("/blog");
                        }
                        setIsLoading(false);


                    }
                    catch (e) {
                        if (isAxiosError(e)) {
                            if (e.response?.status === 403) {
                                setValidInputs(true);
                                setTimeout(() => {
                                    setValidInputs(false);
                                }, 3000);
                                setIsLoading(false)
                            }
                            else if (e.response?.status === 401) {
                                setIsnotUser(true);
                                setTimeout(() => {
                                    setIsnotUser(false);
                                }, 3000);
                                setIsLoading(false)
                            }
                        }


                    }

                }} className="text-white w-[100%] bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
                    Sign In
                </button>
                <div className="text-slate-900 font-[500] text-center mt-1.5">
                    already have an account? <span className="text-blue-600 font-semibold hover:cursor-pointer hover:text-blue-950" onClick={() => {
                        navigate("/")
                    }}  >Sign Up</span>
                </div>
            </div>
            {/* //all conditional rendering */}
            {
                isEmpty ? <TostDanger msg="Field Cannot be empty" /> : null
            }
            {
                validInputs ? <TostDanger msg="kindly enter valid email and passwrod" /> : null
            }
            {
                isNotUser ? <TostDanger msg="Email or password is incorrect" /> : null
            }
        </div>

        {
            isLoading ? <Loading /> : null
        }

    </div >
}



