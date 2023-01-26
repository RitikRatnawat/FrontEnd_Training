import "./FormControl.css"

const FormControl = (props) => {
    return (
        <div className="controls">
            <select id="fromCurrency"
                value={props.fromCurrency}
                onChange={props.onFromCurrencyHandler}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
            </select>

            <input type="submit" id="submit"
                value="Convert"
                onClick={props.calculate} />

            <select id="toCurrency"
                value={props.toCurrency}
                onChange={props.onToCurrencyHandler}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
            </select>
        </div>
    )
}

export default FormControl