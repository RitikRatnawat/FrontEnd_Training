import classes from "./App.module.css"
import Form from "./components/Form/form";
import Table from "./components/Table/table";

function App() {
  return (
    <section className={classes.container}>
      <div className={classes["card-container"]}>
        <Form />
        <Table />
      </div>
    </section>
  );
}

export default App;
