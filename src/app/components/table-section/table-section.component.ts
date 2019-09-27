import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table-section',
  templateUrl: './table-section.component.html',
  styleUrls: ['./table-section.component.css']
})
export class TableSectionComponent {

  displayedColumns: string[] = ['result', 'R', 'G', 'B', 'color'];
  @Input() dataSource = [];
  @Input() RGB: any = {};

  constructor() {
  }

  getMaxResult() {
    let idx = 0, max = 0;
    this.dataSource.forEach((el, i) => {
      if (el.result !== null && el.result > max) {
        max = el.result;
        idx = i;
      }
    });

    return this.dataSource[idx];
  }

}
