import 'normalize.css';
import s from './styles/App.module.css';

import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
