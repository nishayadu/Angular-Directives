import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseEvent]'
})


export class MouseEventDirective {

  
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
   this.highlightElement('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlightElement(null);
  }

  private highlightElement(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
