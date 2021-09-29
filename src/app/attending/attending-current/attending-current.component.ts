import { Component, OnInit } from '@angular/core';
import {AttendingService} from "../attending.service";

@Component({
  selector: 'app-attending-current',
  templateUrl: './attending-current.component.html',
  styleUrls: ['./attending-current.component.scss']
})
export class AttendingCurrentComponent implements OnInit {

  currentPair: any;
  constructor(private attendingService: AttendingService) { }

  ngOnInit(): void {
  }

}
