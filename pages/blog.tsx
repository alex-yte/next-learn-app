import type { InferGetStaticPropsType, GetStaticProps } from "next";
import PostCard from "./components/PostCard";

import './blog.css';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5&_page=1")
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
          {posts.map((post: Post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              link={`/blog/${post.id}`}
            />
          ))}
        </ul>
      </main>
    );
  }
