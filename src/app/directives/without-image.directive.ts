import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appWithoutImage]'
})
export class WithoutImageDirective {

  constructor(private elementRef: ElementRef) {
  }

  //DIRECTIVE OF IMAGES
  //when it get a error in the element it put defult src  
  @HostListener('error')
  loadImageByDefault() {
    const element = this.elementRef.nativeElement
    element.src = 'https://cdn-icons-png.flaticon.com/512/57/57108.png'
  }
}
