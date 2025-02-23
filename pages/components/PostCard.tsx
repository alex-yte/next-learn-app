// components/PostCard.js
import React from 'react';

interface PostCardProps {
    id : number;
    title: string;
    body: string;
    link: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, body, link }) => (
    <li key={id}>
    <h2>{title}</h2>
    <p>{body}</p>
    <a href={link}>Read more</a>
  </li>
);

export default PostCard;
