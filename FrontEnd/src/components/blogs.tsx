import user from "../assets/user_6471334.png";


export function BlogsComp() {
    return <div className="p-8 mt-2 w-[80%] rounded-md bg-gray-50 hover:cursor-pointer hover:shadow-md trasnition-all duration-700">
        <div className="w-[100%] flex gap-1  items-center justify-between">
            <div className="w-[3%] flex gap-1 items-center">
                <img src={user} alt="" />
                <p className="text-[20px] font-medium ">Ranjit</p>
            </div>
            <div className="date">
                <p>date</p>
            </div>
        </div>

        <div className="title mt-6 ">
            <p className="font-inter font-medium text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, esse.</p>
        </div>
        <div className="title ">
            <p className="font-inter font-normal mt-2 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores recusandae dolorum repellendus alias sunt nemo omnis consequuntur reiciendis unde numquam voluptates iusto amet aliquid, illum tenetur nulla labore facere temporibus quasi delectus corporis placeat! Tenetur totam consequuntur aperiam voluptate!</p>
        </div>

        <div>

        </div>


    </div>
}