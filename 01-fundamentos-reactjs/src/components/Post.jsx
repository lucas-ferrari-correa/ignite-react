import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/lucas-ferrari-correa.png" />
          <div className={styles.authorInfo}>
            <strong>Lucas Ferrari</strong>
            <span>Software Developer</span>
          </div>
        </div>

        <time title="16 de julho de 2023" dateTime='2023-07-16 13:47:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Olá</p>
        <p>Linha1</p>
        <p>Linha2</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe seu comentário'/>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}