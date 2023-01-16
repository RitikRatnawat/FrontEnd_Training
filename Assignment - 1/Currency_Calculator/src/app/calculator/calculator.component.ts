import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

const rates = { "USD": 1, "EUR": 0.924, "INR": 81.31, "GBP": 0.819, "JPY": 128};

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  currencyForm = new FormGroup({
    fromCurrency: new FormControl('USD'),
    toCurrency: new FormControl('INR'),
    amount: new FormControl()
  });

  onSubmit() {
    let fromCurr = this.currencyForm.controls.fromCurrency.value;
    let fromValue = rates[fromCurr as keyof typeof rates];
    let toCurr = this.currencyForm.controls.toCurrency.value;
    let toValue = rates[toCurr as keyof typeof rates];

    let amount = this.currencyForm.controls.amount.value;
    
    let convertedValue =  ((toValue/fromValue) * amount).toFixed(2);
    // console.log(convertedValue);

    this.currencyForm.controls.amount.setValue(convertedValue);
  }
}
