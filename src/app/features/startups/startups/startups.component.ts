import { Component, OnInit } from '@angular/core';
import { startupList } from '../services/startupList.mock';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css']
})
export class StartupsComponent implements OnInit {

  startups = startupList;

  constructor() { }

  ngOnInit() {
  }

}
