
import user from "../assets/user_6471334.png";
import { useNavigate } from "react-router-dom";
import { UseYourBlogs } from "../state/atoms/state";


export function Usercomp({ email, title, descripition, date, id }: { email: string, title: string, descripition: string, date: string, id: number }) {
    const navigate = useNavigate();
    const { blogs } = UseYourBlogs();

    return (

        <div className="p-8 mt-9 w-[90%]  relative rounded-md bg-gray-50  border-1 border-gray-100 hover:cursor-pointer hover:shadow-md hover:scale-[101%] hover:bg-white justify-center items-center trasnition-all duration-500 group"
        >
            <div className="absolute top-1 right-2">
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm  px-3 py-1 dark:bg-green-900 dark:hover:bg-green-700 dark:focus:ring-green-800 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => {
                    let getBlogs: any = "";
                    blogs.forEach(blog => {
                        if (blog.id === id) {
                            getBlogs = blog;
                        }
                    });

                    localStorage.setItem("Blog", JSON.stringify(getBlogs));
                    console.log(getBlogs)
                    navigate("/update")
                }}>Edit</button>
            </div>
            <div className="w-[100%] flex gap-1  items-center justify-between">
                <div className="w-[3%] flex gap-1 items-center">
                    <img src={user} alt="" />
                    <p className="text-[20px] font-normal ">{email}</p>
                </div>
                <div className="date">
                    <p className="font-inter">{date}</p>
                </div>
            </div>

            <div className="title mt-6 ">
                <p className="font-inter font-medium text-2xl">{title}</p>
            </div>
            <div className="title overflow-hidden ">
                <p className="font-inter font-normal mt-2 text-md">{descripition}</p>
            </div>


        </div>
    )
}


