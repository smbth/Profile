import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../shared/constants/constants';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  techFileList = CONSTANTS.TECHNOLOGY_FILE_NAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
