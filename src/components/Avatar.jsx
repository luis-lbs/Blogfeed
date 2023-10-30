/* eslint-disable react/prop-types */
import s from './Avatar.module.css';

export function Avatar({ url }) {
  return (
    <img className={s.avatar} src={url} alt="uma imagem de avatar de usuário" />
  );
}
