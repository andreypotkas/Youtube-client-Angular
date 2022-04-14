import {
  AfterViewInit, Directive, ElementRef, Input, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAgeStatus]',
})
export class AgeStatusDirective implements AfterViewInit {
  @Input() date: number = 0;

  public color: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.defineColor());
  }

  private defineColor():string {
    switch (true) {
      case this.date < 2.628e+9: this.color = 'green'; break;
      case this.date < 6.048e+8: this.color = 'blue'; break;
      case this.date > 1.5748e+10: this.color = 'red'; break;
      default: this.color = 'white';
    }
    return this.color;
  }
}
