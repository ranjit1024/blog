import user from "../assets/user_6471334.png";


export function BlogsComp({ email, title, descripition, date }: { email: string, title: string, descripition: string, date: string }) {
    return (

        <div className="p-8 mt-9 max-md:w-[95%] w-[90%] rounded-md bg-gray-50  border-1 border-gray-100 hover:cursor-pointer hover:shadow-md hover:scale-[101%] hover:bg-white justify-center items-center trasnition-all duration-500"
        >
            <div className="w-[100%] flex gap-1  items-center justify-between max-md:items-start max-md:flex-col max-md:gap-2 ">
                <div className="w-[3vh]  flex gap-2 items-center">
                    <img src={user} alt="" />
                    <p className="text-[21px] font-normal">{email}</p>
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

            <div>

            </div>
        </div>
    )
}

