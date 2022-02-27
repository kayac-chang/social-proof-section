# React - How to make Social Proof Section

## Introduction

Hello, What's up guys
Welcome back to my tutorial
If you're new in here, My name is Hello,
I'm love programming and web technology,
and love to share with you guys

Today, we are going to make a social proof section with React

We will cover:
1. basic react concept like functional component, JSX, props ...etc
2. using pure css to make an Responsive Web
3. deploy your work to the internet so everyone can see it

There are a lot of things we need to talk,
so let's got jump in to it

## Setup

Let's start with talking about how to setup your react project.

there are several way to startup your react application
one of the most common and easiest way,
is using a program call **Create React App**
which is a CLI (aka Command Line Interface)
to let you easily setup and running react with a boilerplate.
they give you a basic project structure and package you need
also provide a development server
which let you can easily working on without any hassle.

**notice**
make sure you are already have NodeJS with npm 5.2+ installed in your machine
```bash
npm --version
```

so now, open the terminal, and type
```bash
npx create-react-app social-proof-section
```
which will run a CLI to install bunch of stuff for your react project
after installation,
we can go into project, and run
```
npm start
```
which start the development server, and now we can see the app running

To make our work clear and efficient,
we are going to clean up the boilerplate we have.

Remove `src/App.css` `src/App.test.js` `src/logo.svg`, 
and modify `src/App.js` to make an empty page
```js
function App() {
  return null;
}

export default App;
```

add `@import-normalize` at the top of `src/index.css`,
this will help us handle cross-browser default styling issue,
and we remove some default stuff, so we don't have to override again and agin.
```css
@import-normalize;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

Copy `images/` folder from Social Proof Section sample project
in our `src/` directory,
and we are good to go.

## Start

It's very easy to get stuck at begin as a beginner,
to make our work more clear and productive,
we will following the some steps which been mention in [Thinking in React](TIR)
to get the job done.

### Step 1: Breaking down big UI Into small pieces of components

Start by analyzing make you double,
when we look at the mockup, 
the first part we should take care is the mobile layout,
start from mobile not only a principle but a good approach to make Responsive Web Design easier.

Then we start to break down mockup, into four pieces:

- header
  - Title
  - Description
- List of Rate Cards
- List of Comment Cards

and modify `src/App.js` with following code:
```js
function Title() {
  return null;
}

function Description() {
  return null;
}

function Rate() {
  return null;
}

function Comment() {
  return null;
}

function App() {
  return (
    <main>
      <header>
        <Title />
        <Description />
      </header>

      <ul>
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

      <ul>
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
```

The structure of our work seems more clear now,
let's getting start to build our static site.

> #### JSX
> did you notice we write HTML in Javascript file?
> actually, this is not real HTML.
> the syntax called `jsx`, which is a template for compiler to generate React Element,
> React Element are pure Javascript Object which contains some data for present the UI. 
>
> the following examples are equivalent:
> ```js
> const element = (
>   <h1 className="greeting">
>     Hello, world!
>   </h1>
> );
> ```
> ```js
> const element = React.createElement(
>   'h1',
>   {className: 'greeting'},
>   'Hello, world!'
> );
> ```

> #### Functional Component
> From react 16+, we are mostly using functional component now.
> it's worth to known, 
> the *component* terms in here is actually a **abstraction**,
> that developer easy to understand and discussion,
> the actual implement detail is even simple, just a **pure function**,
> which produce `react element` by passing `props`.

### Step 2: Build A Static Version in React

We are start to build a static site, 
seems like it's a little bit hard to doing whole process at once.
Let us separate piece by piece.

#### 1. Write semantic tag with content (or placeholder content)

we are going to implement `Title` and `Description`,
these should be easy.

```js
function Title() {
  return <h1>10,000+ of our users love our products.</h1>;
}

function Description() {
  return (
    <p>
      We only provide great products combined with excellent customer service.
      See what our satisfied customers are saying about our services.
    </p>
  );
}
```

`Rate` is a component which includes stars and some description,
we can mockup by this:
```js
function Rate() {
  return (
    <div>
      <ul>
        <li>star</li>
        <li>star</li>
        <li>star</li>
        <li>star</li>
        <li>star</li>
      </ul>

      <strong>Rated 5 Stars in Reviews</strong>
    </div>
  );
}
```

The `Comment` component which can be separated into 
- header
  - avatar
  - username
  - description of user
- description

```js
function Comment() {
  return (
    <div>
      <header>
        <div>Avatar</div>

        <div>
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
```

now we have basic structure with some content,
time to make our page prettier with `css`.

#### 2. Prepare css structure for styling

We are going to make some style for our application,
create `src/App.module.css` and modify `src/App.jsx` to use that style.

**src/App.module.css**
```css
.title {
}

.description {
}

.rate {
}

.comment {
}

.main {
}

.header {
}

.list {
}
```

**src/App.jsx**
```js
import styles from './App.module.css'

function Title() {
  return (
    <h1 className={styles.title}>...</h1>
  );
}

function Description() {
  return (
    <p className={styles.description}>...</p>
  );
}

function Rate() {
  return (
    <div className={styles.rate}>
    ...
    </div>
  );
}

function Comment() {
  return (
    <div className={styles.comment}>
    ...
    </div>
  );
}

function App() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
      ...
      </header>

      <ul className={styles.list}>
      ...
      </ul>

      <ul className={styles.list}>
      ...
      </ul>
    </main>
  );
}
```

> ##### What is `*.module.css`
> if you see this file extension first time, 
> it's called **css module**,
> **css module** is simple, just normal css + module support,
> the main reason we using module is for isolate our style from global scope,
> module style only apply on component which currently using it.
> it really handy approach when you working on **Component**.
> In Create React App, 
> we using **import** syntax to bring **css module** in scope,
> and using styles like accessing attributes on Javascript Object,
> It's worth to know that this `styles.xxx` actually **just a string**,
> this is an className generated at build time,
> bundler will generate different string by every modules who is using it.

#### 3. Design System First and Start styling 

To make our style more organize, 
it's nice to have a rule or system to limit arbitrary value usage.
this `1unit = 0.25rem = 4px` rule you will see in many design system again and again.

add following code on top of your `src/App.module.css`
the `:local` syntax help us encapsulate some style normally influence global scope. 

```css
:local :root {
  /* 1unit = 0.25rem = 4px */
  --1: 0.25rem;
  --2: 0.5rem;
  --3: 0.75rem;
  --4: 1rem;
  --5: 1.25rem;
  --6: 1.5rem;
}
```

and then, start to layout `.main` and `.title`,

```css
.main {
  padding-inline: var(--6);
}

.title {
  padding-inline: var(--2);
}

.description {
  line-height: var(--6);
}
```

see, we using **css variable** to reuse spacing number.
we keep going to implement our color plate.

```css
:local :root {
  ...

  /* theme */
  --primary: #512051;
  --secondary: #927b91;
}
```

```css
.title {
  ...

  color: var(--primary);
}

.description {
  ...

  color: var(--secondary);
}
```

and we now can finish our `header` section

```css
.header {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--4);
}
```

next, we going to implement our components `Rate` and `Comment`

#### 4. Adding Assets

Before we start to implement `Rate` and `Comment`,
we need to import some assets from our `src/images`.

Thanks for Create React App,
They provide a easy way let us just using `import` syntax 
to bring our assets like `jpg`, `png` or `svg` into project.

We try to bring `images/icon-star.svg` into our project.

```js
// import svg as react component
import { ReactComponent as IconStar } from "./images/icon-star.svg";
```

And then, we using `IconStar` like normal **React Component**.

```js
function Rate() {
  return (
    <div className={styles.rate}>
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
```

now, we have more style need to used, 
modify our style system like below

```css
:local :root {
  /* 1unit = 0.25rem = 4px */
  --0: 0;
  --1: 0.25rem;
  --2: 0.5rem;
  --3: 0.75rem;
  --4: 1rem;
  --5: 1.25rem;
  --6: 1.5rem;
  --7: 1.75rem;
  --8: 2rem;
  --9: 2.25rem;
  --10: 2.5rem;
  --20: 5rem;
  --full: 100%;

  /* theme */
  --white: white;
  --primary: #512051;
  --primary-light: #ee69a4;
  --secondary: #927b91;
  --secondary-light: #f7f2f7;
}
```

and start styling `Rate` component

```css
/* === rate === */
.rate {
  background-color: var(--secondary-light);
  border-radius: var(--2);
  padding: var(--4);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--2);
}
.rate ul {
  display: flex;
  gap: var(--2);
}
.rate strong {
  font-size: var(--3);
  color: var(--primary);
}
```

after we finished the `Rate`, we are going to implement `Comment` as well,
first, bring `images/image-colton.jpg` into scope, 
this picture can being our comment avatar.

```js
// bring image as url string
import PictureColton from "./images/image-colton.jpg";
```

seems `Comment` component more complex than previous one,
we can start modify our `jsx` a little bit,

```js
function Comment() {
  return (
    <div className={styles.comment}>
      <header>
        <img
          className={styles.avatar}
          src={PictureColton}
          alt="someone's avatar"
        />

        <div className={styles.user}>
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
```

and styling our `Comment`.

```css
.comment {
  background-color: var(--primary);
  color: var(--white);
  padding: var(--8);
  font-size: var(--3);
  border-radius: var(--2);

  display: flex;
  flex-direction: column;
  gap: var(--6);
}
.comment header {
  display: flex;
  gap: var(--6);
}
.comment .user {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.comment .user span {
  color: var(--primary-light);
}
.comment .avatar {
  width: var(--10);
  aspect-ratio: 1/1;
  border-radius: var(--full);
  overflow: hidden;
}
.comment p {
  line-height: var(--6);
}
```

#### 5. Adjust layout and any Decoration

```css
.main {
  padding-inline: var(--6);
  padding-block: var(--20);

  display: flex;
  flex-direction: column;
  gap: var(--10);
}

.list {
  display: flex;
  flex-direction: column;
  gap: var(--4);
}
```

Now, we add some decoration to the background,
because decoration not influence our content,
we can create it by using `css background-image`.

mention that, 
because decoration is larger than viewport,
we don't wont horizontal scroll behavior,
so using `overflow: hidden` trick to disable that.

```css
:local :root {
  overflow: auto;
}
:local body {
  position: relative;
  overflow: hidden;
}
.main::before {
  content: "";
  background-image: url("./images/bg-pattern-top-mobile.svg");
  background-repeat: no-repeat;
  position: absolute;
  top: var(--0);
  left: var(--0);
  width: 374px;
  height: 232px;
}
.main::after {
  content: "";
  background-image: url("./images/bg-pattern-bottom-mobile.svg");
  background-repeat: no-repeat;
  position: absolute;
  bottom: var(--0);
  left: var(--1\/2);
  transform: translateX(calc(-1 * var(--1\/2)));
  width: 375px;
  height: 503px;
}
```

#### 6. Implement Desktop Size for Responsive Web Design

before adapt to responsive web design,
adding some unit in our design system will let our work more efficient.

```css
:local :root {
  /* 1unit = 0.25rem = 4px */
  --0: 0;
  --1: 0.25rem;
  --2: 0.5rem;
  --3: 0.75rem;
  --4: 1rem;
  --5: 1.25rem;
  --6: 1.5rem;
  --7: 1.75rem;
  --8: 2rem;
  --9: 2.25rem;
  --10: 2.5rem;
  --11: 2.75rem;
  --12: 3rem;
  --14: 3.5rem;
  --16: 4rem;
  --20: 5rem;
  --1\/2: 50%;
  --full: 100%;
  --screen-w: 100vw;
  --screen-h: 100vh;

  /* breakpoint */
  --sm: 640px;
  --md: 768px;
  --lg: 1024px;
  --xl: 1280px;
  --2xl: 1536px;

  /* theme */
  ...
}
```

seems our `App.module.css` become larger and larger,
we can separate our component into their own stylesheet.
create two css file, `Rate.module.css` and `Comment.module.css`,
and move our `rate` and `comment` style to their file,

**src/Comment.module.css**
```css
/* === comment === */
.comment {
  background-color: var(--primary);
  color: var(--white);
  padding: var(--8);
  font-size: var(--3);
  border-radius: var(--2);

  display: flex;
  flex-direction: column;
  gap: var(--6);
}
.comment header {
  display: flex;
  gap: var(--6);
}
.comment .user {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.comment .user span {
  color: var(--primary-light);
}
.comment .avatar {
  width: var(--10);
  aspect-ratio: 1/1;
  border-radius: var(--full);
  overflow: hidden;
}
.comment p {
  line-height: var(--6);
}
```

**src/Rate.module.css**
```css
/* === rate === */
.rate {
  background-color: var(--secondary-light);
  border-radius: var(--2);
  padding: var(--4);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--2);
}
.rate ul {
  display: flex;
  gap: var(--2);
}
.rate strong {
  font-size: var(--3);
  color: var(--primary);
}
```

and then import them into our `src/App.jsx`

```js
import rate from "./Rate.module.css";
import comment from "./Comment.module.css";
```

change component style reference

```js
function Rate() {
  return (
    <div className={rate.rate}>
    ...
    </div>
  );
}

function Comment() {
  return (
    <div className={comment.comment}>
      <header>
        <img
          className={comment.avatar}
          ...
        />

        <div className={comment.user}>
        ...
        </div>
      </header>

      <p>
      ...
      </p>
    </div>
  );
}
```

start from `.main` layout, 
adding `media query rule` change style by viewport width.

```css
@media (min-width: 640px) {
  :global #root {
    min-height: var(--screen-h);
    display: flex;
  }
  .main {
    max-width: var(--lg);
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
```

and we look at `list` layout,
because `list of rate` and `list of comment` 
are different style in `lg` width,
we can to distinguish then by adding new class.

```js
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
```

> **notice**
> using nice and handy utils to improve readability,
> like `clsx` function we using above.

```css
@media (min-width: 768px) {
  .list.rate > li:nth-child(2) {
    transform: translateX(calc(1 * var(--16)));
  }
  .list.rate > li:nth-child(3) {
    transform: translateX(calc(2 * var(--16)));
  }

  .list.comment {
    flex-direction: row;
    grid-column: 1 / 3;
  }
  .list.comment > li:nth-child(2) {
    transform: translateY(calc(1 * var(--4)));
  }
  .list.comment > li:nth-child(3) {
    transform: translateY(calc(2 * var(--4)));
  }
}
```

also, our header need to styling as well

```css
@media (min-width: 640px) {
  .header {
    text-align: start;
  }
  .title {
    font-size: var(--12);
  }
}
```

we can also make our component Responsive,
see how we adapt this to our `rate` style.

**src/Rate.module.css**
```css
@media (min-width: 640px) {
  .rate {
    flex-direction: row;
  }
  .rate > * {
    flex: 1;
  }
  .rate ul {
    justify-content: center;
  }
}
```

and then update our decoration too.

```css
@media (min-width: 768px) {
  .main::before {
    background-image: url("./images/bg-pattern-top-desktop.svg");
    width: 584px;
    height: 362px;
  }
  .main::after {
    background-image: url("./images/bg-pattern-bottom-desktop.svg");
    width: 1085px;
    height: 673px;
    left: auto;
    right: var(--0);
    transform: none;
  }
}
```


our `Rate` and `Comment` are static for now,
next we want to passing some `props` 
let our component content change dynamically.

#### 7. Update Component by passing props

Now, we start to passing some data to our components.
At first, we need to decide what should be passing by props,
most of time, the text content.

> ##### React Props
> react props are just object pass to the component
> if you are using `jsx` syntax, 
> then you can passing props like write HTML attribute,
> but there are some reserved keyword need to remember
> like `children`, `key` and `ref`
> which a little bit different compare to normal props.

update `Title` and `Description` with following code,

```js
function Title({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}
```

```js
function Description({ children }) {
  return <p className={styles.description}>{children}</p>;
}
```

```js
function App() {
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

      ...
    </main>
  );
}
```

mention that when we using `children` keyword on props,
we can write some nested children like how we write in normal HTML.

next, we are going to handle list of rates and comments,
first, we have to define what kinds of data and what's their structure.

Inside your `App` components, we can define data like this.

```js
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

  ...
}
```

and update our `jsx` by this,
yes, we can passing `array of component` with special `key` props.
and seems props are just plain Javascript object,
we can using `object destructure` to passing them to component at once,
without assign explicitly.

```js
function App() {
  ...

  return (
    <main className={styles.main}>
      ...

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
```

write some little helper will let you double

```js
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
```

seems like `props` is just some Javascript stuff,
we can also use `prop` to do some `string processing` or `conditional`.

```js
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
```

## Final

Congratulations! we are finish our site with React and make it Responsive.
There so many stuff we are cover,
but that's just a begin of the journey.

Please let us know if you have any questions,
I will love to help you and always.

See you bye!

[TIR]: https://reactjs.org/docs/thinking-in-react.html