import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  data: any;
  iterableDiffer: any;

  constructor(private iterableDiffers: IterableDiffers, private service: DataService) {
    this.iterableDiffer = this.iterableDiffers.find([]).create(undefined);
  }

  ngDoCheck(): void {

    let change = this.iterableDiffer.diff(this.data);

    if(this.data == null)
      this.update();

    if (change)
      this.update();
  }

  update() {
    this.data = this.service.getData();
  }
}
