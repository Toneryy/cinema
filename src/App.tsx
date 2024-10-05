import 'normalize.css';
import s from './styles/App.module.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
