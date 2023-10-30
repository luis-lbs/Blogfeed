/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Comment } from './Comment';
import s from './Post.module.css';
import { Avatar } from './Avatar';

export function Post() {
  const [comments, setComments] = useState([]);
  const avatarUrl = 'https://github.com/luis-lbs.png'

  const createComment = (event) => {
    event.preventDefault();
    let content = document.getElementById('commentText').value;
    let comment = {
      avatar: avatarUrl,
      content,
      author: 'luis felipe',
      upVotes: 0,
    };
    setComments([...comments, comment]);
    document.getElementById('commentText').value = '';
  };

  return (
    <article className={s.post}>
      <header>
        <div className={s.author}>
          <Avatar url={avatarUrl}/>
          <div className={s.authorInfo}>
            <strong>Luis Felipe</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="6 de outubro às 15:38" dateTime="2023-10-06">
          Publicado há 1h
        </time>
      </header>
      <div className={s.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Estou terminando de subir mais um projeto no meu portifa. É um dos
          projetos que fiz durante a trilha ignite da Rocketseat 🚀. O nome do
          projeto é Blogfeed
        </p>

        <p>assim que estiver online na vercel compartilho aqui com vocês 🌟</p>

        <p>
          <a href="">#novoprojeto </a> <a href="">#nlw </a>{' '}
          <a href="">#rocketseat</a>
        </p>
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
        {comments.length > 0 &&
          comments.map((comment, index) => (
            <Comment
              key={index}
              author={comment.author}
              avatar={comment.avatar}
              content={comment.content}
              upVotes={comment.upVotes}
            />
          ))}
      </div>
    </article>
  );
}
