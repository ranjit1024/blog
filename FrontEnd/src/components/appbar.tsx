
import { useState } from "react";
import user from "../assets/user_6471334.png"
import logo from "../assets/logo.png"

import { UserComp } from "../components/user";
import { useNavigate } from "react-router-dom";


export function AppBar() {
    const navigate = useNavigate();
    const [userProfile, setUserprofile] = useState(false);
    return <div>

        <div className="bg-gray-50 flex justify-between realtive w-[100%] p-4 shadow-md">
            {userProfile ? <UserComp></UserComp> : null}


            <div className="logo w-[12vh] ml-5 max-md:ml-1 flex items-center  gap-2 hover:cursor-pointer " onClick={() => {
                navigate('/blog')
            }}>
                
                <img src={logo} alt="" />
            </div>



            <div className="w-[100%] gap-10 flex justify-end items-center">


                <div className="logo w-[5vh]  hover:cursor-pointer mr-5"
                    onClick={() => {
                        if (userProfile === false) {
                            setUserprofile(true);
                        }
                        else {
                            setUserprofile(false)
                        }
                    }}>
                    <img src={user} alt="" />
                </div>

            </div>

        </div>
    </div>
}