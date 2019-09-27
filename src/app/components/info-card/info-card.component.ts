import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  @Input() RGB;
  @Input() dataSource;
  @Output() onAutoTeach = new EventEmitter();
  @Output() onTeach = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
