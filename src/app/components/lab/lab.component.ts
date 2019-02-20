import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ILAB, IRGB} from '../../app.component';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent {

  @Input() LAB: ILAB;
  @Input() RGB: IRGB;
  @Output() onSlider = new EventEmitter();
  @Output() onInput = new EventEmitter();
  @Output() onColorPicker = new EventEmitter();

  constructor() {
  }

  getColor() {
    return `rgb(${this.RGB.R}, ${this.RGB.G}, ${this.RGB.B})`;
  }

  onSliderChange(ev: any, key: String) {
    this.onSlider.emit({
      value: ev.value,
      key: key
    });
  }

  onInputChange(ev: any, key: String) {
    this.onInput.emit({
      value: ev.target.value,
      key: key
    });
  }

  onColorPickerChange(ev: any) {
    this.onColorPicker.emit(ev);
  }
}
