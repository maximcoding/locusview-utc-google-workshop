import {Directive, ElementRef, Input, Renderer2, AfterViewInit, Component} from '@angular/core';



@Directive({selector: '[colorize]'})
export class ColorizeDirective implements AfterViewInit {

  @Input() changeColor: string = '';

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }
  ngAfterViewInit(): void {
    this.renderer
      .setStyle(this.elementRef.nativeElement,
        'background-color', this.changeColor);
  }
}
