import { useContext } from "react";
import DataContext from "../../store/data-context";
import "../Form/form.css"

const Form = () => {

    const ctx = useContext(DataContext);
    let selectedOption;

    const onChangeHandler = (event) => {
        selectedOption = event.target.value;
    }

    const sort = () => {
        ctx.sort(selectedOption);
    }

    return (
        <div className="form-container">
                <label>
                    <input type="radio" value="Name" name="sortby" onChange={onChangeHandler}/>
                    &nbsp;&nbsp;By Name
                </label>
                <label>
                    <input type="radio" value="Age" name="sortby" onChange={onChangeHandler}/>
                    &nbsp;&nbsp;By Age
                </label>

                <button className="sort" onClick={sort}>SORT</button>
        </div >
    );
}

export default Form;