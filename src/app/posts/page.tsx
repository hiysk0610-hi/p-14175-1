"use client";
import type { PostDto } from "@/type/post";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState<PostDto[]>([]);
    useEffect(() => {
    fetch("http://localhost:8080/api/v1/posts")
      .then((res) => res.json())
      .then(setPosts);   
  }, []);
     
   
    return (
      <>
        <h1>글 목록</h1>

        <ul>
        {posts.length == 0 && <li>로딩중...</li>}
        {posts.map((post) => (
        <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
         </li>        
        ))}
      </ul>
      </>
    );
}