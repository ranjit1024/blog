
import { useState } from "react";
import logo from "../assets/comment-pen_8034097.png";
import user from "../assets/user_6471334.png"
import { UserComp } from "../components/user";
import { useNavigate } from "react-router-dom";

export function AppBar() {
    const navigate = useNavigate();
    const [userProfile, setUserprofile] = useState(false);
    return <div>

        <div className="bg-gray-50 flex justify-between realtive w-[100%] p-3 shadow-md">
            {userProfile ? <UserComp></UserComp> : null}


            <div className="logo w-[100%] ml-5 flex items-center gap-2 hover:cursor-pointer " onClick={() => {
                navigate('/blog')
            }}>
                <img src={logo} className="w-[6%]" alt="" />

            </div>



            <div className="w-[100%] gap-10 flex justify-end items-center">


                <div className="logo w-[6%] hover:cursor-pointer mr-5"
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