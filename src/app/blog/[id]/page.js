"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (!response.ok) {
          throw new Error("Blog not found");
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchBlog();
  }, [id]);

  if (error) {
    return (
      <div className="flex justify-center items-center py-8 text-rose-500 font-semibold text-lg">
        Error: {error}
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center py-8">
        <span className="loading loading-infinity text-accent loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="lg:w-2/3 md:w-4/5 w-full mx-auto py-8 px-6">
      <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-8">
        {blog?.title}
      </h2>
      <div className="bg-white shadow-xl rounded-xl border-l-4 border-l-teal-600 p-6 mb-8 transition-transform transform hover:scale-105 duration-300">
        <p className="text-gray-700 text-lg font-medium leading-relaxed">{blog?.body}</p>
      </div>
      <div className="flex justify-center">
        <Link href="/">
          <button className="bg-teal-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 hover:bg-teal-700">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;