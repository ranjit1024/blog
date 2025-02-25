
import { useState } from "react";
import logo from "../assets/comment-pen_8034097.png";
import user from "../assets/user_6471334.png"

import { UserComp } from "../components/user";


export function AppBar() {
    const [userProfile, setUserprofile] = useState(false);
    return <div>

        <div className="bg-gray-50 flex justify-between realtive w-[100%] p-5 shadow-lg">
            {userProfile ? <UserComp></UserComp> : null}

            <div className="logo w-[3.5%] ml-5">
                <img src={logo} alt="" />
            </div>

            <div className="w-[100%] gap-10 flex justify-end items-center">


                <div className="logo w-[3.5%] hover:cursor-pointer mr-5"
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