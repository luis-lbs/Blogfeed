/* eslint-disable react/prop-types */
import s from './Post.module.css';
export function Post({ author, content }) {
  return (
    <article className={s.post}>
      <header>
        <div className={s.author}>
          <img src="https://github.com/luis-lbs.png" className={s.avatar} />
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
        <textarea placeholder="Deixe um comentário"></textarea>
        <div className={s.buttonArea}>
          <button type="submit">Publicar</button>
        </div>
      </form>
    </article>
  );
}
