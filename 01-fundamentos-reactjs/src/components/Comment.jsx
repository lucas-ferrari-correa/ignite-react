import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/lucas-ferrari-correa.png" alt=""/>

      <div className={styles.commentBox}></div>
    </div>
  )
}