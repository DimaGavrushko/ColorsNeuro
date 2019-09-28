import {Component} from '@angular/core';
import {NeuroNetService} from './services/neuro-net.service';

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

  dataSource = this.neuroNetService.getInitData();

  constructor(private neuroNetService: NeuroNetService) {
  }

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
    this.writeInNeuro(this.convertToIntensity(this.RGB));
    this.dataSource = this.neuroNetService.getNeuroData();
  }

  changeFromColorPicker(color: string) {
    this.RGB.R = parseInt(color.slice(1, 3), 16);
    this.RGB.G = parseInt(color.slice(3, 5), 16);
    this.RGB.B = parseInt(color.slice(5), 16);
    this.writeInNeuro(this.convertToIntensity(this.RGB));
    this.dataSource = this.neuroNetService.getNeuroData();
  }

  writeInNeuro([R, G, B]: number[]) {
    for (let i = 0; i < this.neuroNetService.NEURO_COUNT; i++) {
      this.neuroNetService.mNeuro[i].x = [R, G, B];
    }
  }

  onAutoTech() {
    for (let i = 0; i < 1000; i++) {
      const R = Math.random();
      const G = Math.random();
      const B = Math.random();
      this.writeInNeuro([R, G, B]);
      this.neuroNetService.teach(this.getTechColor(R, G, B));
    }
    this.dataSource = this.neuroNetService.getNeuroData();
  }

  onTeach(idx) {
    this.writeInNeuro(this.convertToIntensity(this.RGB));
    this.neuroNetService.teach(idx);
    this.dataSource = this.neuroNetService.getNeuroData();
  }

  getTechColor(R, G, B) {
    let level = R;
    if (G > level) {
      level = G;
    }
    if (B > level) {
      level = B;
    }
    level *= 0.7;

    let techColor = 0;
    if (R > level) {
      techColor |= 1;
    }
    if (G > level) {
      techColor |= 2;
    }
    if (B > level) {
      techColor |= 4;
    }

    return techColor;
  }

  convertToIntensity(RGB: IRGB) {
    return [RGB.R / 255, RGB.G / 255, RGB.B / 255];
  }
}
