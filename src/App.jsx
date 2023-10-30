import './global.css';
import s from './App.module.css';

import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  const postsList = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/luis-lbs.png',
        name: 'luis-lbs',
        role: 'Full stack developer at Cacau Show',
      },
      content: `
      Fala galeraa 👋
      
      Estou terminando de subir mais um projeto no meu portifa. É um dos
      projetos que fiz durante a trilha ignite da Rocketseat 🚀. O nome do
      projeto é Blogfeed
      
      assim que estiver online na vercel compartilho aqui com vocês 🌟
      `,
      publishedAt: new Date(),
      comments: [],
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Frontend Engineer at TechCo',
      },
      content: `
      E aí pessoal! 👋
    
      Hoje estou empolgada para compartilhar um novo projeto de código aberto que
      desenvolvi. É uma biblioteca JavaScript para gráficos interativos chamada
      "Chartify.js". Mal posso esperar para ver o que vocês acham! 📈
      `,
      publishedAt: new Date(),
      comments: [],
    },
    {
      id: 3,
      author: {
        avatarUrl: 'https://github.com/Bullas.png',
        name: 'Karol (Bullas) Attekita',
        role: 'Product Designer at DesignHub',
      },
      content: `
      Olá pessoal! 👋
    
      Hoje, estou compartilhando um novo design de interface que criei para uma
      aplicação de e-commerce. Adoraria receber seus comentários e feedback para
      melhorá-lo ainda mais! 🎨
      `,
      publishedAt: new Date(),
      comments: [],
    },
  ];
  return (
    <main>
      <Header />
      <div className={s.wrapper}>
        <Sidebar />
        <main>
          {postsList.map((post) => (
            <Post postData={post} key={`post-${post.id}`}/>
          ))}
        </main>
      </div>
    </main>
  );
}

export default App;
