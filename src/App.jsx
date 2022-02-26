import styles from "./App.module.css";
import rate from "./Rate.module.css";
import comment from "./Comment.module.css";
import { ReactComponent as IconStar } from "./images/icon-star.svg";
import PictureColton from "./images/image-colton.jpg";
import PictureAnne from "./images/image-anne.jpg";
import PictureIrene from "./images/image-irene.jpg";

function Title({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}

function Description({ children }) {
  return <p className={styles.description}>{children}</p>;
}

const times = (fn, n) => Array.from({ length: n }, (_, idx) => fn(idx));

function Rate({ value, title }) {
  return (
    <div className={rate.rate}>
      <ul>
        {times(
          (id) => (
            <li key={id}>
              <IconStar />
            </li>
          ),
          value
        )}
      </ul>

      <strong>{title}</strong>
    </div>
  );
}

function Comment({ user, content }) {
  return (
    <div className={comment.comment}>
      <header>
        <img
          className={comment.avatar}
          src={user.photo}
          alt={`${user.name}'s avatar`}
        />

        <div className={comment.user}>
          <strong>{user.name}</strong>
          <span>{user.isVerified ? "Verified Buyer" : "Not Verify"}</span>
        </div>
      </header>

      <p>{content}</p>
    </div>
  );
}

const clsx = (...classes) => classes.join(" ");

function App() {
  const rates = [
    {
      title: "Rated 5 Stars in Reviews",
      value: 5,
    },
    {
      title: "Rated 5 Stars in Report Guru",
      value: 5,
    },
    {
      title: "Rated 5 Stars in BestTech",
      value: 5,
    },
  ];

  const comments = [
    {
      user: {
        name: "Colton Smith",
        isVerified: true,
        photo: PictureColton,
      },
      content: `“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”`,
    },
    {
      user: {
        name: "Irene Roberts",
        isVerified: true,
        photo: PictureIrene,
      },
      content: `“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”`,
    },
    {
      user: {
        name: "Anne Wallace",
        isVerified: true,
        photo: PictureAnne,
      },
      content: `“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”`,
    },
  ];

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Title>10,000+ of our users love our products.</Title>
        <Description>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </Description>
      </header>

      <ul className={clsx(styles.list, styles.rate)}>
        {rates.map((rate) => (
          <li key={rate.title}>
            <Rate {...rate} />
          </li>
        ))}
      </ul>

      <ul className={clsx(styles.list, styles.comment)}>
        {comments.map((comment) => (
          <li key={comment.content}>
            <Comment {...comment} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
