import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/lucas-ferrari-correa.png",
        name: "Lucas Ferrari",
        role: "Software Engineer"
      },
      content: [
        { type: 'paragraph', content: "Fala galera" },
        { type: 'paragraph', content: "Vamos falar de um projeto legal" },
        { type: 'link', content: 'http://globoesporte.globo.com/' },
      ],
      publishedAt: new Date('2023-07-16 13:47:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/lucas-ferrari-correa.png",
        name: "Lucas Corrêa",
        role: "Software Vrau"
      },
      content: [
        { type: 'paragraph', content: "Fala galera" },
        { type: 'paragraph', content: "Vamos falar de um projeto legal" },
        { type: 'link', content: 'http://globoesporte.globo.com/' },
      ],
      publishedAt: new Date('2023-07-17 13:47:00')
    }
  ]

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
