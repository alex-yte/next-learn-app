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
    <li key={id} >
      <h2 className='text-lg line-clamp-1 text-ellipsis'>{title}</h2>
      <p className='line-clamp-3 text-ellipsis'>{body}</p>
      <h3 className='mb-2'>{authorName}</h3>
      <a className='inline-block border border-gray-200 rounded-lg p-2' href={link}>Читать далее</a>
    </li>
  );
};

export default PostCard;
