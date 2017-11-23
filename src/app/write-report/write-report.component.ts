import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-write-report',
  templateUrl: './write-report.component.html',
  styleUrls: ['./write-report.component.css']
})
export class WriteReportComponent implements OnInit {
  currentUser:any;
  constructor(private dataService: DataService) {
    console.log("coucou");
  	this.currentUser = dataService.getUsers();
  	console.log(this.currentUser);
  }

  ngOnInit() {
  }

}
