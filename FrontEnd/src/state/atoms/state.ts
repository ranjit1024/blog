import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { JwtPayload, jwtDecode } from "jwt-decode";

import { PROD } from "../../config";


const api = axios.create({
    baseURL: `${PROD}`,

    headers: {
        'Content-Type': 'application/json',

    }
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = JSON.parse(localStorage.getItem('token') || "{}").token;

    return config;
});


export interface BlogTypes {
    "content": string;
    "title": string;
    "userid": string,
    "author": { email: string },
    "publishdate": Date
    "id": number

}


type FetchBlogsResponse = {
    blogs: BlogTypes[]; // Ensure this is a number or undefined
    currentPage: number;
    totalPages: number;
};
export const fetchBlogs = async ({ pageParam = 1 }: { pageParam: number }): Promise<FetchBlogsResponse> => {

    const res = await api.get(`/api/v1/blog/bulk`, {
        params: { page: pageParam, limit: 2 }
    });
    return res.data;
};



export function UseYourBlogs() {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState<BlogTypes[]>([]);

    const token = localStorage.getItem('token');
    let id = "";
    if (token) {
        const decode = jwtDecode(token) as JwtPayload & { id: string }
        id = decode.id;
    }

    try {
        useEffect(() => {
            api.get(`/api/v1/blog/${id}`)
                .then(response => {
                    setLoading(true)
                    setBlogs(response.data.blog)
                });
        }, [])

    }
    catch (e) {
        if (isAxiosError(e)) {
            console.log(e)
        }
    }

    return { blogs, loading };
}

