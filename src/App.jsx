import styles from "./App.module.css";
import rate from "./Rate.module.css";
import comment from "./Comment.module.css";
import { ReactComponent as IconStar } from "./images/icon-star.svg";
import PictureColton from "./images/image-colton.jpg";

function Title() {
  return (
    <h1 className={styles.title}>10,000+ of our users love our products.</h1>
  );
}

function Description() {
  return (
    <p className={styles.description}>
      We only provide great products combined with excellent customer service.
      See what our satisfied customers are saying about our services.
    </p>
  );
}

function Rate() {
  return (
    <div className={rate.rate}>
      <ul>
        <li>
          <IconStar />
        </li>
        <li>
          <IconStar />
        </li>
        <li>
          <IconStar />
        </li>
        <li>
          <IconStar />
        </li>
        <li>
          <IconStar />
        </li>
      </ul>

      <strong>Rated 5 Stars in Reviews</strong>
    </div>
  );
}

function Comment() {
  return (
    <div className={comment.comment}>
      <header>
        <img
          className={comment.avatar}
          src={PictureColton}
          alt="someone's avatar"
        />

        <div className={comment.user}>
          <strong>Colton Smith</strong>
          <span>Verified Buyer</span>
        </div>
      </header>

      <p>
        “ We needed the same printed design as the one we had ordered a week
        prior. Not only did they find the original order, but we also received
        it in time. Excellent! ”
      </p>
    </div>
  );
}

const clsx = (...classes) => classes.join(" ");

function App() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Title />
        <Description />
      </header>

      <ul className={clsx(styles.list, styles.rate)}>
        <li>
          <Rate />
        </li>
        <li>
          <Rate />
        </li>
        <li>
          <Rate />
        </li>
      </ul>

      <ul className={clsx(styles.list, styles.comment)}>
        <li>
          <Comment />
        </li>
        <li>
          <Comment />
        </li>
        <li>
          <Comment />
        </li>
      </ul>
    </main>
  );
}

export default App;
