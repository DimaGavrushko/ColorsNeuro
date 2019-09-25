import {Component} from '@angular/core';

export interface IRGB {
  R: number;
  G: number;
  B: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  RGB: IRGB = {
    R: 255.0,
    G: 0.0,
    B: 0.0
  };

  constructor() {}

  changeColorFromRGB(params: any) {
    switch (params.key) {
      case 'R':
        this.RGB.R = +params.value;
        break;
      case 'G':
        this.RGB.G = +params.value;
        break;
      case 'B':
        this.RGB.B = +params.value;
        break;
    }
  }

  changeFromColorPicker(color: string) {
    this.RGB.R = parseInt(color.slice(1, 3), 16);
    this.RGB.G = parseInt(color.slice(3, 5), 16);
    this.RGB.B = parseInt(color.slice(5), 16);
  }
}
