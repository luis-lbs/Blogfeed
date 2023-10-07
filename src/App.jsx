import './global.css';
import s from './App.module.css';

import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <main>
      <Header />
      <div className={s.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </main>
  );
}

export default App;
