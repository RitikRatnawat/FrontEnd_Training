import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any;
  constructor(private _http: HttpClient) {
    this._http.get("/assets/json/data.json").subscribe((res) => this.data = res);
  };

  getData() {
    return this.data;
  }

  sort(by: any) {

    if (by == "Name")
      this.data.sort((a: any, b: any) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      })
    else if (by == "Age")
      this.data.sort((a: any, b: any) => { return b.age - a.age });
  }

}
