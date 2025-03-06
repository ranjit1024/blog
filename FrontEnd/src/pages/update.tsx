import { useState } from "react";
import { AppBar } from "../components/appbar";

import axios, { isAxiosError } from "axios";
import Loading from "../components/loading";
import { TostDanger } from "../components/toast";
import SuccessComp from "../components/success";
import { useNavigate } from "react-router-dom";
import { PROD } from "../config";
import { UpdateInput } from "@ranjitdas2048/common";



export function UpdateBlog() {
    let [desInput, setdesInput] = useState<number | null>(0);
    let [titleInput, setTitleInput] = useState<number | null>(0);
    let [wrongInput, setWronginput] = useState(false);
    let [isSuccessfull, setIssuccessful] = useState(false);

    let [existsTitle, seteistsTitle] = useState(JSON.parse(localStorage.getItem('Blog') ?? "").title || []);
    let [existsdes, seteistsDes] = useState(JSON.parse(localStorage.getItem('Blog') ?? "").content || []);


    const [Bloginput, setBlogInput] = useState<UpdateInput>({
        title: existsTitle,
        content: existsdes,
        id: JSON.parse(localStorage.getItem('Blog') ?? "").id || []
    });

    const [isLoading, setIsloading] = useState(false);

    const api = axios.create({
        baseURL: `${PROD}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(localStorage.getItem("token") || "{}").token
        }
    });

    let navigate = useNavigate();
    console.log(Bloginput)

    return <div className="flex flex-col w-[100%] ">
        <AppBar></AppBar>
        <div className="w-[100%] flex flex-col items-center">
            <p className="font-inter text-center my-10 text-4xl font-[600]
            text-gray-950  ">Update Blog</p>

            <div className="w-[80%] flex gap-10  flex-col ">

                <div className="relative w-full min-w-[200px]">
                    <input id="title"
                        value={existsTitle}
                        className="peer h-full  w-full resize-none rounded-[7px] border border-gray-500 border-t-transparent bg-transparent     text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-gray-500 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 font-inter text-lg font-[500] p-3"

                        placeholder=" " onChange={(e) => {
                            seteistsTitle(e.target.value)
                            setBlogInput({
                                ...Bloginput,
                                title: ` ${e.target.value}`
                            })



                            const eachText = e.target.value;
                            for (let i = 0; i < eachText.length; i++) {
                                setTitleInput(i);

                            };

                            if (titleInput! > 50) {
                                document.getElementById('data')!.style.color = "red"
                            }


                        }}></input>

                    < span className=" font-medium text-slate-600 font-inter mt-[4px] ml-[2px]  text-sm flex justify-between" >
                        <p id="data"> {titleInput} / 50 </p>
                        <p >  Maximum 50 characters </p>
                    </span>
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1 flex h-full w-full select-none text-[11px]  leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 font-inter font-medium">
                        Write Blog Title....
                    </label>
                </div>

                <div className="relative w-full min-w-[200px]">
                    <textarea
                        value={existsdes}
                        id="des"
                        className=" dec peer h-full min-h-[200px] w-full resize-none rounded-[7px] border border-gray-500 border-t-transparent bg-transparent px-3 py-2.5  text-sm  text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-gray-500 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 font-inter text-[1rem]"
                        placeholder=""
                        onChange={(e) => {
                            seteistsDes(e.target.value)

                            setBlogInput({
                                ...Bloginput,
                                content: `${e.target.value}`
                            });

                            const eachText = e.target.value;


                            for (let i = 0; i < eachText.length; i++) {
                                setdesInput(i);
                            }


                            if (desInput! > 1000) {
                                document.getElementById("des-count")!.style.color = "red"
                            }




                        }}></textarea>
                    < span className="-mt-[1px] text-sm font-medium text-slate-600 font-inter  flex ml-[2px] justify-between" >
                        <p id="des-count"> {desInput} / 1000 </p>
                        <p >  Maximum 1000 characters </p>
                    </span>
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px]  leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 font-inter font-medium">
                        Write Blog Descripition....
                    </label>
                </div>

                <div className="flex justify-end items-end ">
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center -mt-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={async () => {
                        try {
                            function delay(ms: number): Promise<void> {
                                return new Promise(resolve => setTimeout(resolve, ms));
                            }


                            setIsloading(true);
                            const response = await api.put("/api/v1/blog", Bloginput);
                            if (response.status === 200) {
                                setIsloading(false);

                                setIssuccessful(true);


                                await delay(6000).then(() => {
                                    setIssuccessful(false);
                                });

                                navigate("/blog");
                                localStorage.removeItem('Blog')

                            }
                        }
                        catch (e) {
                            if (isAxiosError(e)) {
                                if (e.request?.status == 403) {
                                    setWronginput(true);
                                    console.log(e.response)
                                    setTimeout(() => {
                                        setWronginput(false);
                                    }, 3000);

                                    setIsloading(false)
                                }
                            }
                            setIsloading(false)
                        }
                    }}>Update</button>

                </div>
            </div>
            {
                wrongInput ? <TostDanger msg="Kindly Enter Correct input" /> : null
            }

        </div >
        {

            isLoading ? <Loading></Loading> : null
        }
        {
            isSuccessfull ? <SuccessComp></SuccessComp> : null
        }

    </div >
}


// Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt culpa hic aperiam consectetur, reprehenderit necessitatibus est accusantium, dolores aut illo maiores aliquid nam quasi voluptatibus qui quae sit tempore facilis rerum officiis suscipit. Molestias, quia dolore dolorem quibusdam reprehenderit maiores autem repellendus maxime praesentium excepturi voluptatum cupiditate, velit magnam.