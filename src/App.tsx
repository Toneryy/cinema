import 'normalize.css';
import s from './styles/App.module.css';

import Header from './Components/Header';
import Intro from './Components/Intro';

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <Intro />
    </div>
  );
}

export default App;
