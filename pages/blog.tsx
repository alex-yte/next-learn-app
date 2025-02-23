// pages/blog.tsx
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import PostCard from './components/PostCard';
import './blog.css';
import { log } from 'console';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Author = {
  id: number;
  name: string;
};

type PostWithAuthor = Post & { authorName: string };

export const getStaticProps: GetStaticProps = async () => {
  // Получение постов
  const resPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7&_page=2');
  const posts: Post[] = await resPosts.json();
  console.log(posts);

  // Получение авторов
  const resAuthors = await fetch('https://jsonplaceholder.typicode.com/users');
  const authors: Author[] = await resAuthors.json();
  console.log(authors);

  // Объединение постов с именами авторов
  const postsWithAuthors: PostWithAuthor[] = posts.map((post) => {
    const author = authors.find((author) => author.id === post.userId);
    return {
      ...post,
      authorName: author ? author.name : 'Неизвестный автор',
    };
  });
  console.log(postsWithAuthors);


  return {
    props: {
      posts: postsWithAuthors,
    },
  };
};

export default function BlogPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <h1>Блог</h1>
      <ul id="blog-list">
        {posts.map((post: PostWithAuthor) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            link={`/blog/${post.id}`}
            authorName={post.authorName}
          />
        ))}
      </ul>
    </main>
  );
}
