import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { data } from "react-router-dom";
import { Blog } from "../../pages/blog";
import { PROD } from "../../config";
const api = axios.create({
    baseURL: `${PROD}`,

    headers: {
        'Content-Type': 'application/json',
    }
});

// adding dynmic headers
api.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem("token") || "{}").token;
    if (token) {
        config.headers.Authorization = token;
    }
    return config
})
// done

export interface BlogTypes {
    "content": string;
    "title": string;
    "userid": string,
    "author": { email: string }

}


type FetchBlogsResponse = {
    blogs: BlogTypes[];
    nextCursor?: number; // Ensure this is a number or undefined
};




export const fetchBlogs = async ({ pageParam = 10 }): Promise<FetchBlogsResponse> => {
    const response = await api.get("/api/v1/blog/bulk");

    console.log('Fetched data:', response.data); // Debugging log

    return {
        blogs: response.data.blogs, // Ensure this is an array
        nextCursor: response.data.nextCursor, // Ensure API return
    };
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