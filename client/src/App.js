import Header from './components/presentationals/Header/Header';
import Footer from './components/presentationals/Footer/Footer';
import Home from './components/containers/Home/Home';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
