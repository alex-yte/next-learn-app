// components/PostCard.tsx
import React from 'react';

interface PostCardProps {
  id: number;
  title: string;
  body: string;
  link: string;
  authorName: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, body, link, authorName }) => {
  return (
    <li key={id}>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>{authorName}</h3>
      <a href={link}>Читать далее</a>
    </li>
  );
};

export default PostCard;
