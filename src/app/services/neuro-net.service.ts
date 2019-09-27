import {Injectable} from '@angular/core';
import {COLORS} from '../components/colors';

interface Neuron {
  x: number[];
  w: number[];
  sum: number;
  y: number;
  h: number;
}

@Injectable({
  providedIn: 'root'
})
export class NeuroNetService {


  private static E = 2.7182818284590452354;
  public NEURO_COUNT = 8;
  public IN_NEURO = 3;
  private _mNeuro: Neuron[] = [];


  constructor() {
    for (let i = 0; i < this.NEURO_COUNT; i++) {
      this._mNeuro.push({
        x: [0, 0, 0],
        w: [0, 0, 0],
        y: 0,
        sum: 0,
        h: 1
      });
    }
  }

  get mNeuro(): Neuron[] {
    return this._mNeuro;
  }

  getNeuroData() {
    const neuroData = [];
    COLORS.forEach((color, i) => {
      this.procNeuro(this._mNeuro[i]);
      neuroData.push({
        wR: this.mNeuro[i].x[0].toFixed(3),
        wG: this.mNeuro[i].x[1].toFixed(3),
        wB: this.mNeuro[i].x[2].toFixed(3),
        result: this.mNeuro[i].y.toFixed(3),
        color
      });
    });
    return neuroData;
  }

  activeSigm(x: number) {
    return 1. / (1 + Math.pow(NeuroNetService.E, -x)) - 0.5;
  }

  activeSigmPro(x: number) {
    return Math.pow(NeuroNetService.E, -x) / Math.pow((1 + Math.pow(NeuroNetService.E, -x)), 2);
  }

  procNeuro(n: Neuron) {
    let net = 0;
    for (let i = 0; i < this.IN_NEURO; i++) {
      net += n.x[i] * n.w[i];
    }
    n.sum = net;
    n.y = this.activeSigm(net);
  }

  teach(num: number) {
    this.getNeuroData();
    for (let i = 0; i < this.NEURO_COUNT; i++) {
      let t = 0;
      if (num === i) {
        t = 1;
      }
      const deltaRes = this._mNeuro[i].y - t;
      const delta = this.activeSigmPro(this._mNeuro[i].sum) * deltaRes;
      for (let j = 0; j < this.IN_NEURO; j++) {
        this._mNeuro[i].w[j] = this._mNeuro[i].w[j] - this._mNeuro[i].h * delta * this._mNeuro[i].x[j];
      }
    }
    return 0;
  }

  getInitData() {
    const initData = [];
    COLORS.forEach(color => {
      initData.push({
        wR: 1.000,
        wG: 1.000,
        wB: 1.000,
        result: 0.000,
        color
      });
    });
    return initData;
  }
}

