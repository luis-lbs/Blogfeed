/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Comment } from './Comment';
import s from './Post.module.css';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post({ postData }) {
  const [post, setPost] = useState(postData);
  const [commentContent, setCommentContent] = useState('');

  const postDate = format(postData.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
  const postDateRelativeToNow = formatDistanceToNow(postData.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const createComment = (event) => {
    event.preventDefault();
    let comment = {
      id: post.comments.length + 1,
      author: 'luis-lbs',
      avatarUrl: 'https://github.com/luis-lbs.png',
      content: commentContent,
      upVotes: 0,
    };

    setPost((prev) => {
      let next = JSON.parse(JSON.stringify(prev));
      next.comments.unshift(comment);
      return next;
    });
    setCommentContent('');
  };

  const deleteComment = (commentId) => {
    setPost((prev) => {
      let next = JSON.parse(JSON.stringify(prev));
      next.comments = next.comments.filter(
        (comment) => comment.id !== commentId
      );
      return next;
    });
  };

  const handleUpVote = (commentId) => {
    setPost((prev) => {
      let next = JSON.parse(JSON.stringify(prev));
      let currentComment = next.comments.find(
        (comment) => (comment.id = commentId)
      );
      currentComment.upVotes += 1;
      return next;
    });
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

        <time title={postDate} dateTime={() => post.publishedAt.toISOString()}>
          {`públicado hà ${postDateRelativeToNow}`}
        </time>
      </header>
      <div className={s.content}>
        <p>{post.content}</p>
      </div>

      <form className={s.commentForm} onSubmit={(e) => createComment(e)}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          required
        ></textarea>
        <div className={s.buttonArea}>
          <button
            type="submit"
            disabled={commentContent.length == 0 ? true : false}
          >
            Publicar
          </button>
        </div>
      </form>

      <div className={s.commentList}>
        {post.comments.length > 0 &&
          post.comments.map((comment, index) => (
            <Comment
              key={`comment-${index}`}
              id={comment.id}
              author={comment.author}
              avatar={comment.avatarUrl}
              content={comment.content}
              upVotes={comment.upVotes}
              deleteComment={deleteComment}
              handleUpVote={handleUpVote}
            />
          ))}
      </div>
    </article>
  );
}
