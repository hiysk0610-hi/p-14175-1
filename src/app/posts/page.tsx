"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([]);
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
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      </>
    );
}