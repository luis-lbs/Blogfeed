import s from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

const backgroundImgUrl =
  'https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40';

export function Sidebar() {
  return (
    <aside className={s.sidebar}>
      <img
        src={backgroundImgUrl}
        alt="imagem de um computador"
        className={s.cover}
      />
      <div className={s.profile}>
        <img
          className={s.avatar}
          src="https://github.com/luis-lbs.png"
          alt="imagem do github de luis-lbs"
        />
        <strong>Luis Felipe</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="">
          <PencilLine size={20}/>
          Edite seu perfil
        </a>
      </footer>
    </aside>
  );
}
