import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydirective]',
  standalone: true
})
export class MydirectiveDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) {
    this.colorchange('red');
   }

   colorchange(color:string){
    this.renderer.setStyle(this.el.nativeElement,'color',color);

   }

   @HostBinding('style.border') border? :string;

   @HostListener('click') onclick(){

    this.colorchange('blue');
    this.border = '20px solid green';
   }

}
