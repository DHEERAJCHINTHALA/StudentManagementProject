import { Component, HostListener, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'StudentManagementProject';

  HeaderAndFooter=false
  constructor(private routing:Router)
  {

    routing.events.subscribe(router=>{

      if(router instanceof NavigationEnd)
      {

         if(router.url=="/")
         {
          this.HeaderAndFooter
         } 
         else if(router.url=="/app-students")
         {
          this.HeaderAndFooter = true
         }

      }
    })

  }

  @ViewChild('cursor') cursor: any;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    this.cursor.nativeElement.style.left = event.pageX - 25 + 'px';
    this.cursor.nativeElement.style.top = event.pageY - 25 + 'px';
  }
}
