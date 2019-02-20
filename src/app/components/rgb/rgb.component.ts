import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IRGB} from '../../app.component';

@Component({
  selector: 'app-rgb',
  templateUrl: './rgb.component.html',
  styleUrls: ['./rgb.component.css']
})
export class RgbComponent {

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
