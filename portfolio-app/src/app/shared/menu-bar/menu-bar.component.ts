import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @ViewChild('mySidepanel')
  sideBar!: ElementRef;
  currentUrl: string = "about";
  routeSelector: boolean = false;
  constructor(private renderer: Renderer2,private router: Router) {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: RouterEvent) => {
      this.currentUrl = event.url;
    })
  }

  ngOnInit(): void {
  }

  toggleSidebar(show: boolean){
    if(show){
      this.renderer.setStyle(this.sideBar.nativeElement,'width','100%');
    }else{      
      this.renderer.setStyle(this.sideBar.nativeElement,'width','0px');
    }

  }

  showRouteSelector(flag: boolean){
    this.routeSelector = flag;
  }

}
