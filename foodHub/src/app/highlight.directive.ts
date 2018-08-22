import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { overrideComponentView } from '@angular/core/src/view';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseover') overrideComponentView() {
    this.hover(true);
  }
  @HostListener('mouseout') outerHeight() {
    this.hover(false);
  }

  hover(status: boolean) {
    if (status) {
      this.renderer.setStyle(this.element.nativeElement, 'text-decoration', 'underline');
    } else {
      this.renderer.setStyle(this.element.nativeElement, 'text-decoration', 'none');
    }
  }
}
