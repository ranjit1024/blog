
import { useNavigate } from "react-router-dom"
import { JwtPayload, jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";
export function UserComp() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    let userName = "";
    if (token) {
        const decode = jwtDecode(token) as JwtPayload & { email: string }
        let email = decode.email;
        userName = email.split("@")[0];
        console.log(userName)
    }

    return <div className="p-4 bg-gray-900 z-10 shadow-lg text-white absolute right-10  dark:text top-[67px] min-w-[20%]  font-inter rounded-sm transition-all duration-75">
        <div className="absolute -top-[6px] right-1 ">
            <div className="w-0 h-0 
 border-l-[10px] border-l-transparent
  border-b-[10px] border-b-gray-900
  border-r-[10px] border-r-transparent">
            </div>
        </div>


        <div className="  p-2 font-inter text-[1.07rem] flex gap-2 items-center hover:bg-gray-700 rounded-md hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
            </svg>
            <p className="  font-inter font-medium text-[1.5rem]">
                {userName}
            </p>


        </div>
        <div className="p-[1px]  bg-white mt-2 mb-3 "></div>



        <div className="blog p-2 mb-[5px] transition-all duration-400 font-inter text-[1.07rem] flex gap-2 items-center hover:bg-gray-700 rounded-md hover:cursor-pointer" onClick={() => {
            navigate('/yourblogs')
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fill-rule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0 1 14.75 19h-9.5A2.25 2.25 0 0 1 3 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 0 1 9 1h2c1.373 0 2.531.923 2.887 2.182ZM7.5 4A1.5 1.5 0 0 1 9 2.5h2A1.5 1.5 0 0 1 12.5 4v.5h-5V4Z" clip-rule="evenodd" />
            </svg>

            Your Blogs
        </div>



        <div className="mt-2 duration-400 mb-[2px]  font-inter text-[1.07rem] flex gap-2 items-center ">
            <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800  dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-[6px] text-center me-2 mb-2 w-[100%] mt-2" onClick={() => {
                localStorage.clear();
                navigate("/");

            }}>Sign out</button>

        </div>
    </div>
}