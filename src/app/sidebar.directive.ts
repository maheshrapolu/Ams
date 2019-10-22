import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSidebar]',
  exportAs: 'appSidebar'
})
export class SidebarDirective {

  constructor() { }

  @HostBinding('class.is-open') click = false;



  @HostListener('click') onClic() {
    this.click = !this.click;
  }
}
