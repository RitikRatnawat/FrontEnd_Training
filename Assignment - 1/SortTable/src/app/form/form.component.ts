import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private service: DataService) {}

  form = new FormGroup({
    sortby: new FormControl('')
  });

  sort(){
    this.service.sort(this.form.value.sortby);
  }
}
