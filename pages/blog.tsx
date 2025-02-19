import type { InferGetStaticPropsType, GetStaticProps } from "next";

import './blog.css';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json();


  return {
    props: {
      posts,
    },
  };
};

export default function BlogPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
      <main>
        <h1>Blog</h1>
        <ul id="blog-list">
          {posts.map((post: any) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  }
