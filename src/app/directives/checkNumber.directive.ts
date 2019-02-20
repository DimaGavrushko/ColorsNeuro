import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[checkNumber]'
})
export class CheckNumberDirective {

  inputElement: HTMLElement;
  from = 0;
  to = 0;

  constructor(private elementRef: ElementRef) {
    this.inputElement = elementRef.nativeElement;
  }

  @Input() set checkNumber(st: String) {
    const range = st.split(' ');
    this.from = +range[0];
    this.to = +range[1];
  }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    if ((<any>this.inputElement).value > this.to) {
      (<any>this.inputElement).value = this.to;
    } else if ((<any>this.inputElement).value < this.from) {
      (<any>this.inputElement).value = this.from;
    }
  }
}
