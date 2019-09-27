import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {COLORS} from '../colors';

@Component({
  selector: 'app-buttons-section',
  templateUrl: './buttons-section.component.html',
  styleUrls: ['./buttons-section.component.css']
})
export class ButtonsSectionComponent implements OnInit {

  colors: string[] = COLORS;
  @Output() onAutoTeach = new EventEmitter();
  @Output() onTeach = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onTeachClick(option) {
    this.onTeach.emit(this.colors.indexOf(option.value) + 1);
  }

    onAutoTeachClick(event) {
    this.onAutoTeach.emit(event);
  }

}
