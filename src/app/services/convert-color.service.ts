import {Injectable} from '@angular/core';
import {ILAB, IRGB, IXYZ} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ConvertColorService {

  constructor() {
  }

  fromRGBtoXYZ(RGB: IRGB): IXYZ {
    let R = RGB.R / 255.0;
    let G = RGB.G / 255.0;
    let B = RGB.B / 255.0;

    if (R > 0.04045) {
      R = Math.pow((R + 0.055) / 1.055, 2.4);
    } else {
      R = R / 12.92;
    }
    if (G > 0.04045) {
      G = Math.pow((G + 0.055) / 1.055, 2.4);
    } else {
      G = G / 12.92;
    }
    if (B > 0.04045) {
      B = Math.pow((B + 0.055) / 1.055, 2.4);
    } else {
      B = B / 12.92;
    }

    R = R * 100;
    G = G * 100;
    B = B * 100;

    let X = +(R * 0.4124 + G * 0.3576 + B * 0.1805).toFixed(2);
    let Y = +(R * 0.2126 + G * 0.7152 + B * 0.0722).toFixed(2);
    let Z = +(R * 0.0193 + G * 0.1192 + B * 0.9505).toFixed(2);
    X = X > 95 ? 95 : (X < 0 ? 0 : X);
    Y = Y > 100 ? 100 : (Y < 0 ? 0 : Y);
    Z = Z > 109 ? 109 : (Z < 0 ? 0 : Z);

    return {X, Y, Z};
  }

  fromXYZtoRGB(XYZ: IXYZ): IRGB {
    const _X = XYZ.X / 100;
    const _Y = XYZ.Y / 100;
    const _Z = XYZ.Z / 100;

    let _R = _X * 3.2406 + _Y * -1.5372 + _Z * -0.4986;
    let _G = _X * -0.9689 + _Y * 1.8758 + _Z * 0.0415;
    let _B = _X * 0.0557 + _Y * -0.2040 + _Z * 1.0570;

    if (_R > 0.0031308) {
      _R = 1.055 * Math.pow(_R, (1 / 2.4)) - 0.055;
    } else {
      _R = 12.92 * _R;
    }
    if (_G > 0.0031308) {
      _G = 1.055 * Math.pow(_G, (1 / 2.4)) - 0.055;
    } else {
      _G = 12.92 * _G;
    }
    if (_B > 0.0031308) {
      _B = 1.055 * Math.pow(_B, (1 / 2.4)) - 0.055;
    } else {
      _B = 12.92 * _B;
    }

    let R = +(_R * 255).toFixed();
    R = R > 255 ? 255 : (R < 0 ? 0 : R);
    let G = +(_G * 255).toFixed();
    G = G > 255 ? 255 : (G < 0 ? 0 : G);
    let B = +(_B * 255).toFixed();
    B = B > 255 ? 255 : (B < 0 ? 0 : B);

    return {R, G, B};
  }

  fromXYZtoLAB(XYZ: IXYZ): ILAB {
    let _X = XYZ.X / 95;
    let _Y = XYZ.Y / 100;
    let _Z = XYZ.Z / 109;

    if (_X > 0.008856) {
      _X = Math.pow(_X, (1 / 3));
    } else {
      _X = (7.787 * _X) + (16 / 116);
    }
    if (_Y > 0.008856) {
      _Y = Math.pow(_Y, (1 / 3));
    } else {
      _Y = (7.787 * _Y) + (16 / 116);
    }
    if (_Z > 0.008856) {
      _Z = Math.pow(_Z, (1 / 3));
    } else {
      _Z = (7.787 * _Z) + (16 / 116);
    }

    let L = +((116 * _Y) - 16).toFixed(2);
    L = L > 100 ? 100 : (L < 0 ? 0 : L);
    let A = +(500 * (_X - _Y)).toFixed(2);
    A = A > 127 ? 127 : (A < -128 ? -128 : A);
    let B = +(200 * (_Y - _Z)).toFixed(2);
    B = B > 127 ? 127 : (B < -128 ? -128 : B);

    return {L, A, B};
  }

  fromLABtoXYZ(LAB: ILAB): IXYZ {
    let _Y = (LAB.L + 16) / 116;
    let _X = LAB.A / 500 + _Y;
    let _Z = _Y - LAB.B / 200;

    if (Math.pow(_Y, 3) > 0.008856) {
      _Y = Math.pow(_Y, 3);
    } else {
      _Y = (_Y - 16 / 116) / 7.787;
    }
    if (Math.pow(_X, 3) > 0.008856) {
      _X = Math.pow(_X, 3);
    } else {
      _X = (_X - 16 / 116) / 7.787;
    }
    if (Math.pow(_Z, 3) > 0.008856) {
      _Z = Math.pow(_Z, 3);
    } else {
      _Z = (_Z - 16 / 116) / 7.787;
    }

    let X = +(_X * 95).toFixed(2);
    X = X > 95 ? 95 : (X < 0 ? 0 : X);
    let Y = +(_Y * 100).toFixed(2);
    Y = Y > 100 ? 100 : (Y < 0 ? 0 : Y);
    let Z = +(_Z * 109).toFixed(2);
    Z = Z > 109 ? 109 : (Z < 0 ? 0 : Z);

    return {X, Y, Z};
  }
}
