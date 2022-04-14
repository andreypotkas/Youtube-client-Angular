import {
  AfterViewInit, Directive, ElementRef, Input, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAgeStatus]',
})
export class AgeStatusDirective implements AfterViewInit {
  @Input()date: number = 0;
  @Input()type: string = '';
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', this.defineColor());
  }

  private defineColor():string {
    let color = '';
    switch (true) {
      case this.date < 2.628e+9: color = 'green'; break;
      case this.date < 6.048e+8: color = 'blue'; break;
      case this.date > 1.5748e+10: color = 'red'; break;
      default: color = 'white';
    }
    return color;
  }
}
