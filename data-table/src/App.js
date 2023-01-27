import { useContext } from 'react';
import Table from './components/Table/Table';
import classes from './App.module.css';
import APIContext from './store/api-context';

function App() {

  const apiCtx = useContext(APIContext);

  return (
    <section className={classes.container}>
      <div className={classes["table-container"]}>
        <div className={classes.table}>
          <Table />
        </div>
        <div className={classes.actions}>
          <button className={classes.btn} onClick={apiCtx.fetch}>Fetch Data</button>
          <button className={classes.btn} onClick={apiCtx.reset}>Reset Data</button>
        </div>
      </div>
    </section>
  );
}

export default App;
