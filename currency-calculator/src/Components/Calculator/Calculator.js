import { useState } from "react"
import FormControl from "../FormControl/FormControl";
import "./Calculator.css"

const rates = {
    "USD": 1, "EUR": 0.924, "INR": 81.31, "GBP": 0.819, "JPY": 128
};

const Calculator = () => {

    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");

    const onAmountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const onFromCurrencyHandler = (event) => {
        setFromCurrency(event.target.value);
    }

    const onToCurrencyHandler = (event) => {
        setToCurrency(event.target.value);
    }

    const calculateAmount = () => {
        let fromValue = rates[fromCurrency]
        let toValue = rates[toCurrency]

        let convertedAmount = ((toValue / fromValue) * amount).toFixed(2);
        setAmount(convertedAmount);
    }

    return (
        <div className="calculator">
            <h2 className="heading">Currency Calculator</h2>

            <form>
                <div className="form-controls">
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        min="1"
                        placeholder="Enter Amount to be converted..."
                        onChange={onAmountChangeHandler}
                    />
                    <FormControl
                        fromCurrency={fromCurrency}
                        toCurrency={toCurrency}
                        onFromCurrencyHandler={onFromCurrencyHandler}
                        onToCurrencyHandler={onToCurrencyHandler}
                        calculate={calculateAmount}
                    />
                </div>
            </form>
        </div >
    );
}

export default Calculator