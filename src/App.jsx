import { Wrapper } from './App.style';

const App = () => {
  return (
    <>
      <div class={Wrapper}>
        <p>Solid + Tailwind + Emotion</p>
        <p>See repo {' '}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/dominggo1999/solid-twin-emotion">
            here
          </a>
        </p>
      </div>
    </>
  );
};

export default App;
