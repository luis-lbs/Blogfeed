/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Comment } from './Comment';
import s from './Post.module.css';
import { Avatar } from './Avatar';

export function Post({ postData }) {
  const [post, setPost] = useState(postData);

  const createComment = (event) => {
    event.preventDefault();
    let content = document.getElementById('commentText').value;
    let comment = {
      author: 'luis-lbs',
      avatarUrl: 'https://github.com/luis-lbs.png',
      content,
      upVotes: 0,
    };
    setPost((prev) => {
      let next = JSON.parse(JSON.stringify(prev));
      next.comments.unshift(comment);
      return next;
    });
    document.getElementById('commentText').value = '';
  };
  return (
    <article className={s.post} key={`mainPost-${post.id}`}>
      <header>
        <div className={s.author}>
          <Avatar url={post.author.avatarUrl} />
          <div className={s.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title="6 de outubro às 15:38" dateTime="2023-10-06">
          Publicado há 1h
        </time>
      </header>
      <div className={s.content}>
        <p>{post.content}</p>
      </div>

      <form className={s.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea id="commentText" placeholder="Deixe um comentário"></textarea>
        <div className={s.buttonArea}>
          <button type="submit" onClick={(e) => createComment(e)}>
            Publicar
          </button>
        </div>
      </form>

      <div className={s.commentList}>
        {post.comments.length > 0 &&
          post.comments.map((comment, index) => (
            <Comment
              key={`comment-${index}`}
              author={comment.author}
              avatar={comment.avatarUrl}
              content={comment.content}
              upVotes={comment.upVotes}
            />
          ))}
      </div>
    </article>
  );
}
