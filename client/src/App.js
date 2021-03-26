import Header from './components/presentationals/Header/Header';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <div>MOVIES</div>
      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
