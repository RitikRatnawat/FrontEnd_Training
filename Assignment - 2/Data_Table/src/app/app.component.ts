import { Component, OnInit } from '@angular/core';
import { APIServiceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  data :any;

  constructor(private _apiService: APIServiceService) {}

  showData(){
    this._apiService.getData().subscribe(res => this.data = res)
  }

  resetData(){
    this.data = undefined;
  }
}
