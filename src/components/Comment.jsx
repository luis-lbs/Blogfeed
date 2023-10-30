/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react';
import s from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({avatar, content, author, upVotes}) {
  return (
    <div className={s.comment}>
      <Avatar url={avatar}/>
      <div className={s.commentBox}>
        <div className={s.commentContent}>
          <header>
            <div className={s.authorAndTime}>
              <strong>{author}</strong>
              <time
                title="07 de outubro às 00:13"
                dateTime="2023-10-07 23:47:00"
              >
                {/*incuir o tempo aqui*/}
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir<span>{upVotes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
