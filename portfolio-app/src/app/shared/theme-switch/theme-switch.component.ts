import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.css']
})
export class ThemeSwitchComponent implements OnInit {
  lightTheme: boolean = true;
  constructor() { }

  ngOnInit(): void {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    // system-wide dark theme is enabled
    if(prefersDark.matches){
      this.toggleTheme();
    }
  }

  toggleTheme(){
    this.lightTheme = !this.lightTheme;
    document.body.classList.toggle("dark-theme");
    const event = new CustomEvent('theme-changed',{detail: {lightThemeEnabled: this.lightTheme}});
    document.body.dispatchEvent(event);
  }

}
