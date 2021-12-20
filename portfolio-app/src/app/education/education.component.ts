import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../shared/constants/constants';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  courseList:any[] = CONSTANTS.EDUCATION;
  darkThemeEnabled: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.checkForTheme();
  }

  checkForTheme(){
    if(document.body.classList.contains('dark-theme')){
      this.darkThemeEnabled = true;
    }
    document.body.addEventListener('theme-changed',(e)=>{
      this.toggleThemeClass(e as CustomEvent);
    });
  }
  toggleThemeClass(eve: CustomEvent){
    if(eve.detail.lightThemeEnabled){
      this.darkThemeEnabled = false;
    }else{
      this.darkThemeEnabled = true;
    }
  }

  ngOnDestroy(): void{
    document.body.removeEventListener('theme-changed',()=>{});
  }

}
