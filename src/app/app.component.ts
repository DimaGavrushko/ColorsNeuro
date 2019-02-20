import {Component} from '@angular/core';
import {ConvertColorService} from './services/convert-color.service';

export interface IRGB {
  R: number;
  G: number;
  B: number;
}

export interface IXYZ {
  X: number;
  Y: number;
  Z: number;
}

export interface ILAB {
  L: number;
  A: number;
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

  XYZ: IXYZ = this.colorService.fromRGBtoXYZ(this.RGB);
  LAB: ILAB = this.colorService.fromXYZtoLAB(this.XYZ);

  constructor(private colorService: ConvertColorService) {}

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
    this.XYZ = this.colorService.fromRGBtoXYZ(this.RGB);
    this.LAB = this.colorService.fromXYZtoLAB(this.XYZ);
  }

  changeColorFromXYZ(params: any) {
    switch (params.key) {
      case 'X':
        this.XYZ.X = +params.value;
        break;
      case 'Y':
        this.XYZ.Y = +params.value;
        break;
      case 'Z':
        this.XYZ.Z = +params.value;
        break;
    }
    this.RGB = this.colorService.fromXYZtoRGB(this.XYZ);
    this.LAB = this.colorService.fromXYZtoLAB(this.XYZ);
  }

  changeColorFromLAB(params: any) {
    switch (params.key) {
      case 'L':
        this.LAB.L = +params.value;
        break;
      case 'A':
        this.LAB.A = +params.value;
        break;
      case 'B':
        this.LAB.B = +params.value;
        break;
    }
    this.XYZ = this.colorService.fromLABtoXYZ(this.LAB);
    this.RGB = this.colorService.fromXYZtoRGB(this.XYZ);
  }

  changeFromColorPicker(color: string) {
    this.RGB.R = parseInt(color.slice(1, 3), 16);
    this.RGB.G = parseInt(color.slice(3, 5), 16);
    this.RGB.B = parseInt(color.slice(5), 16);
    this.XYZ = this.colorService.fromRGBtoXYZ(this.RGB);
    this.LAB = this.colorService.fromXYZtoLAB(this.XYZ);
  }
}
